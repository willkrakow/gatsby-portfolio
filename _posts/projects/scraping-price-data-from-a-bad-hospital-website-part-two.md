---
layout: project
date: 2021-02-16T13:13:04.861Z
title: Scraping pricing data from a bad hospital website
thumbnail: images/computer_desk.jpeg
stack:
  - React
  - NodeJS
  - Styled Components
  - MongoDB
  - MaterialUI
  - Heroku
slug: scraping-pricing-data-from-a-bad-hospital-website-part-two
description: A project to reveal price information intuitively. Part II.
publicId: unc-health-price-inhouse
---

Once [I had all the data in hand](https://williamkrakow.dev/projects/scraping-pricing-data-from-a-bad-hospital-website), I had to clean it.

In my experience, cleaning datasets is to be expected. Any set of thousands of records from a large organization such as a hospital is bound to have its quirks and outliers. However, despite its relatively dimunitive size - 3-5k hospital procedures, depending on the insurer - this set was unusually bad. Fortunately I was able to standardize the price data with the find and replace regex tool in VSCODE.

For the backend, I built a NodeJS API with routes for insurers and procedures. I hooked this up to a MongoDB Atlas cloud database and used the standard Mongo client SDK. I've used Mongoose in the past and appreciate its polyfills and server side schemas, but for this project it would likely be overkill. I'm running the server on a Free tier Heroku Dyno, so I wanted to minimize my dependencies.

For the front end, I bootstrapped the project with create-react-app, and wrote some custom hooks to fetch data from the API. Fetch requests from the React app were proxied through the server port.

Initially I ran into trouble with the database structure. I was using the payers as the top-level document, but discovered that Mongo doesn't have a great way to query strings within documents within arrays. If there is a method, let me know. I spent a good few hours reading through dry database documentation and came up with nil.

Anyways, feel free to browse the source code and the MVP. I've only gotten through 3 of the payer datasets so far, but plan to finish cleaning the rest of the sets and uploading them to the database in the near future.