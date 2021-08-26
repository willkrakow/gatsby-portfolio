---
layout: project
date: 2021-08-24T13:13:04.861Z
title: Yonder
thumbnail: images/computer_desk.jpeg
stack:
  - React
  - Gatsby
  - Theme UI
  - Sanity
  - Gatsby Functions
  - TypeScript
slug: yonder
description: A website for a bar I love.
publicId: yonder_bar
source: https://github.com/willkrakow/yonder
---

When my fiancé and I first started dating, we’d often stop in at a bar in downtown Hillsborough called Yonder. As with most places in our sleep town, most of the Yonder regulars were old enough to be our parents. Nevertheless, we never felt anything less than warm southern hospitality from the bartenders (who also happen to be the bar owners), and grew quite fond of the place.

Yonder is a bar with character; it’s august, artsy, dark, cheery and sassy all at once. The cocktails have quirky names, most of them derived from characters both fictional and local (my personal favorite is *Eryk’s Gussied Up Ole’ Fashioned*, named after the barkeep himself). They’re also fantastic at social media promotion and brand voice, and actually keep their hours updated on both Google Maps and Facebook.
However, the one thing Yonder had been missing was a slick website. Here’s what they were working with before:

It’s functional and direct, but I though I could help the bar out by building a site whose design and function better reflected the off-kilter coziness one comes to expect at Yonder.

## Design
In a word, Yonder is vintage.  In contrast, I lean into design trends and modern minimalism in my work. I struggled a bit to design components and typography that looked dated in style but not technology (i.e., I wanted a 20’s vibe with the sharpness of Web3.0). Here’s how it turned out:

## Content management
For the first time, I dove into creating the content management system before building out the front-end. Sanity has been my go-to CMS recently, particularly because of its dead-simple approach to schemas: just write it in JSON. I scaffolded my basic content types, such as menu categories (e.g., wine, beer, cocktails), subcategories (red wine, rosé, lager, spritzy), events (band performances, open mic nights), art (local artists often put up galleries inside Yonder for promotion), and site settings (phone number, social accounts, etc.).
Since I know how frustrating it can be to work on an inflexible site with an underpowered CMS, I also wrote a page building schema.

## Front-end
In my opinion, Gatsby is the best choice for content-driven sites. Tools like `gatsby-plugin-image` and `gatsby-source-**`, paired with GraphQL, provide remarkably terse ways for generating rich pages on a fast site.

Gatsby also offers built-in TypeScript support, a perk I only began to appreciate after trying to compose a `tsconfig.json` file on my own. With Gatsby, you can literally just change the file name from `.js` or `.jsx` to `.tsx` and bam, you’re writing type-safe code.

TypeScript has made me a better developer. Before I picked it up, I felt twinges of anxiety when writing functions to manipulate anything but the most trivial objects. But now, it often feels like the code just *writes itself*, provided I can remember how TS generics work.

### Page building
The trickiest part of the front-end was creating the page builder for the home page and landing pages. There’s a library that can handle this – `block-content-to-react`– but since I was trying to keep the site footprint minimal I sucked it up and wrote the code myself. It turned out to be less intricate than I expected:

```
*src/components/pageBuilder/index.tsx*

// query for Sanity block content, resolving references to other Sanity objects
export const query = graphql`
  {
    sanityLandingPage(name: { eq: "Home" }) {
      _id
      _key
      id
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`;

// markup
const IndexPage: React.FC<IndexPageProps> = (props) => {
const { _rawContent: content } = props.data.sanityLandingPage;


// Map blocks to array of corresponding React components
const blocks = content.map(b => {
    let el
    switch (b._type) { // Check block type
      case "centerTextSection":
        el = <CenterTextSection key={b._key} bodyText={b.bodyText} headerText={b.headerText} />
        break
      case "hero":
        el = <Hero key={b._key} _key={b._key} _type={b._type} image={b.image} title={b.title} subtitle={b.subtitle || null} cta={b.cta || null} />
        break
      case "menuSection":
        el = <MenuSection categories={b.categories} title={b.title} description={b.description} cta={b.cta} key={b._key} />
        break
      case "eventSection":
        el = <EventSection key={b._key} content={b.content} _key={b._key} _type={b._type} />
        break
      case "formSection":
        el = <FormSection key={b._key} _key={b._key} _type={b._type} collectEmail={b.collectEmail} collectName={b.collectName || false} collectMessage={b.collectMessage || false} buttonText={b.buttonText || "Submit"} />
        break
      case "locationAndHoursSection":
        el = <LocationSection {...b} key={b._key} />;
        break
      default:
        el = null;
        break;
    }
    return el
  })

```
*Note: ideally, you can just use the spread operator to pass in the block content, but due to poor planning, some of the object keys and types coming from Sanity didn’t exactly match the component props.*
### Search
Sanity doesn’t have a built-in search utility, so I put together a useSearch hook and a serverless function:
```
*src/utils/useSearch.tsx*

import { navigate } from 'gatsby';
import React from 'react';
import { IBeer, ICocktail, IDrink, IWine } from '../typings';

export interface ISearchResults {
  topResults?: ((IWine | IBeer | ICocktail) & IDrink)[];
  partialResults?: ((IWine | IBeer | ICocktail) & IDrink)[];
}

const useSearch = () => {
    const [ query, setQuery ] = React.useState('');
    const [ results, setResults ] = React.useState<ISearchResults>({});

    const handleChange: React.EventHandler<React.FormEvent> = (e: React.FormEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value);
    }

    const handleSubmit: React.EventHandler<React.FormEvent> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = new URL(`/api/suggest`, window.location.origin || "http://localhost:8000");
        const params = {search: query}
        url.search = new URLSearchParams(params).toString();

        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query })
        })
        const json: ISearchResults = await res.json();
        navigate("/search-results/", {
            state: {
                query: query,
                results: json,
            }
        })
    }
    
    return { query, handleChange, handleSubmit, results, setResults };
}

export default useSearch;
```
```
*api/search.tsx*

import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import sanityClient from "@sanity/client";
import { ICategory, IDrink } from '../typings'
import { flatten, flattenDeep, values } from "lodash";

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
// Parse the search term
  const search = req.query.search;
  const searchTerms = search.split(' ');

// Use current date to define the API version
  const today = new Date();

// Sanity HTTP API config
  const client = sanityClient({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: today.toISOString().split("T")[0],
    token: process.env.SANITY_TOKEN,
    useCdn: true,
  });

// Sanity GROQ query for menu categories (excluding food and togo)
  const query = '*[_type == "category" && name != $food && name != $togo] {name, subcategories}';
  const params = {
      food: "Food",
      togo: "To go",
  };

// Fetch data, then flatten each category/subcategory. The 
// result is a flat array of drink objects.
  const drinks = client.fetch(query, params).then((data: Partial<ICategory>[]) => {
    const allDrink = flatten(data.map(category => flattenDeep(category?.subcategories?.map(subcategory => subcategory.drinks))))
    return allDrink
  })

// Utility for returning lowercase version of drink object
  const lowercaseValues = (drink: IDrink) => {
      return values(drink).map(prop => prop.toString().toLowerCase())
  }

// Utility for checking is search term is in array of
// strings
   const termIsInArray = (
     drinkProps: any[]
   ): ((value: string, index: number, array: string[]) => unknown) => {
     return (term) =>
       drinkProps.toString().toLowerCase().includes(term.toLowerCase());
   };

// Filter drinks. Top results contain all search terms.
// Partial results contain only some of the search terms.
  drinks.then((drinks: IDrink[]) => {
    const topResults = drinks.filter(drink => {
      const drinkProps = lowercaseValues(drink);
      return searchTerms.every(termIsInArray(drinkProps))
    })
    const partialResults = drinks.filter(drink => {
        const drinkProps = lowercaseValues(drink);
        return searchTerms.some(termIsInArray(drinkProps)) && !searchTerms.every(termIsInArray(drinkProps))
    })
    return { topResults, partialResults}
  }
  ).then(({topResults, partialResults }) => {
    res.send({ topResults, partialResults })
  })
}


```
### Style system
In the past, `styled-components` was my preferred style library, but I chose ThemeUI for this project and for the most part, I’m happy with it. In a way, ThemeUI is closer to vanilla CSS, as the styles are mostly separated from the JSX/markup.
Currently, I’m trying to work around a color mode bug in ThemeUI. When site is first loaded, there’s a mix of dark mode and light mode colors throughout the site. Flipping the color mode switch to dark mode fixes this, and then switching back to light mode works fine. I’m not entirely sure what’s happening, but I believe it has to do with the style precedence of the `sx` prop in ThemeUI not overriding the `theme` context. If you have a solution or work around, please, oh please let me know.
## Final thoughts
As usual, this project continually took longer than I expected. I had an MVP ready in about 12 hours, but as I ran into issues with CMS schema and a few style hacks I’d tossed in, I ended up putting around 60 hours into the (as yet) finished project.

However, since I abstracted most of front-end code and tried to keep the whole thing a modular as possible, I’ll be able to reuse the majority of my work in future projects. Though it’s not completely there yet, I’d like to get it to the point where the entire site (theme, pages, content, etc.) can be controlled through the safety of the CMS. Though I guess at that point I’m basically Squarespace, the antithesis of web devs everywhere. Oh well.