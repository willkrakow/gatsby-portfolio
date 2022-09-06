---
layout: project
title: LGC + WTK | Our Wedding
thumbnail: images/wedding.png
stack:
  - React
  - Bootstrap
  - VanillaJS
  - Netlify
  - Gatsby
slug: our-wedding
source: https://github.com/willkrakow/wedding-plans
livesite: https://campbellkrakow.com
publicId: wedding_byxwpi
description: My wedding website, built with Gatsby.
date: 2022-05-01
---

I spent a good long while debating whether to include this project. It's far more personal than any of my other projects, and in terms of content (i.e., "What *are* our wedding plans?"), it's far from complete. Nevertheless, I'm proud of the result, the implementation, and most importantly, the motivation.

My fiancé and I got engaged earlier this year after 15 months of dating. Her name's Laura, and she's perfect. The fact that we got together in the first place is somewhere between a miracle and a plot line from a Disney Channel movie. If you'd like to learn more, check out *[Easter and Dandelions](/writing/easter-and-dandelions)*, a story of our third date.

Okay, down to business now.

### The Stack
I wanted this site to be more than my project alone; besides, it's likely that Laura will be far more opinionated on the minutia of our wedding day that myself.

#### Content Management
[Airtable](https://airtable.com/) is one of my favorite web apps of all time. Despite the playful appearance (picture "Excel for Kids"), Airtable boasts some powerful features that pair nicely with a UI that makes spreadsheets downright fun to work with.

Each page of the site (with the exception of /rsvp) is associated with an Airtable... table, with rows corresponding to the sections of the page. This mean my fiancé can not only change the text and images, but also the order number of page sections, all within Airtable.

#### Frontend
This site was bootstrapped with Gatsby and styled with Bootstrap and `styled-components`. I used Gatsby's native graphql functionality to query page and component data sourced from Airtable.

#### Hosting / Backend
Netlify is quickly becoming my favorite company. They make hosting static sites (or web apps, for that matter), ridiculously simple. I can literally just point a Netlify site to my Github repo, push changes, and **boom** – site is live. No more fussing Heroku dynos or Google Cloud. Plus Netlify handles all the certificate signing for https, and even allows you to deploy the site to IPv6.

### Challenges
With the fate of our beloved Postal Service in limbo – and since Covid is still raging in the US – I wanted to use this site for RSVP's for the wedding. Also I'm a millennial which means I don't know where to buy stamps.

Here were the feature requirements I had in mind for the RSVP form:
- 4 fields per guest (First name, last name, dinner preference, over 21 (boolean)
- Dynamic inputs (i.e., an entire family could enter their info and submit one form)
- Asynchronous submission
- Validation for first name, last name, and dinner preference

I first tried to build my own custom stateless form, but quickly decided to toss in `react-hook-form` instead. `react-hook-form` is packed with features and has great documentation. My biggest pet peeve in React is building forms; in my opinion, Facebook took one of the most eloquent and powerful features of HTML5 and turned it into spaghetti code that we all have to write all the time (unless you're using `react-hook-form`, of course.)

(Here's the implementation)[https://github.com/willkrakow/wedding-plans/blob/main/src/components/rsvpForm.js], with custom checkboxes and all (because we like to stay classy).

### Conclusion
We're hoping to get married in April or May of 2022. Until then, we'll be in Airtable, building our perfect day :)

^Cheesy, nerdy, and wistful all in one sentence? Yeah even I'm a little nauseated.