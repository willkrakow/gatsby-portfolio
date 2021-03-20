---
layout: project
title: Where is Mango?
thumbnail: a4303973-0365-42d5-a47b-ebd640f233d0_1_201_a.jpeg
stack:
  - React
slug: projects/where-is-mango
source: https://github.com/willkrakow
livesite: https://www.whereismango.com
---
## Background
In the middle of the pandemic my girlfriend and I got a cat. We named her* Mango, and though she cute and, at only a few weeks old, adorably klutzy, she quickly became too much to handle inside our small riverside cottage. So we started letting her outside.

At first she was too timid to even leave the porch. Not long after that, she would venture to the edge of our backyard and then scamper on home at the slightest chitter from a squirrel.

But within a few weeks, Mango began dissappearing for hours at a time. My now-fiancé and I would pretend not to worry, at least until the sun set.

Once, the neighbors found her without a collar and sent them off to a friend's house. Another time, I got a knock on the door from a woman who lived a quarter mile away, who said she had discovered Mango lounging in the street in front of her house. On Thanksgiving, I got a message on Nextdoor that Mango was playing in the stream behind my old apartment complex, nearly a mile down the road.

Through all this, she didn't have a collar, but was known throughout the neighborhood thanks to her fiesty and quirky personality. Nevertheless, we decided it was time to do something to ensure that no matter how far she wandered, we - or whoever found her - would be able to track her and bring her home.

My fiancé found a $25 solution on Amazon that included a collar with a QR code badge that linked up to a generic and ad-ridden page you could customize to a limited extent. However, the page didn't have an SSL certificate and there was no way to alter the URL. Plus, Mango lost that collar about 3 days after it arrived.

And so, I decided to throw my own QR code on her collar that redirects to [whereismango.com](https://www.whereismango.com/).

### How it works
There are numerous QR code collars on Amazon, but they are expensive and Mango looses collars at an alarming rate. I purchased whereismango.com and created a QR code on [qr.io](https://qr.io).

## Whereismango.com
The site is basically just a React SPA with a form, and a few goodies hidden under the hood.

The form leverages the Geolocation browser API to allow Mango-finders to input their GPS coordinates. I also set up a useEffect hook that sets a "_foundamangocat" cookie on an initial visit and grabs the user's approximate location using the ipinfo.io client-side API.

Finally, I added a gallery using the [Cloudinary CDN](https://cloudinary.com/), so that users can appreciate how freaking adorable Mango is.

## Server side
To handle form submissions (both the automated approximate location and the full contact form) I built a lightweight Node.js server. I probably could have used something like Netlify/AWS Functions for such a simple implementation, but for some reason I kept running into issues with the Geolocation API on a static site.

I pulled in the Twilio Node library and use it to send 3 texts: a verification message to the person who submitted the form, which also includes my contact info; messages to myself and my fiancé that include the form info as well as a URL formatted to the Google Maps URL spec so that we can quickly see where the heck Mango is now.

## Deployment
I proxied requests from the React app through the default server port and pushed everything to a single Heroku Dyno. Since the Heroku free tier doesn't support SSL, I had to upgrade to the Hobby plan at $7 / month. Printing the QR code stickers came out to around $15 after shipping, I got a wholesale box of collars for $10, and Twilio bills each SMS at $0.00075. All-in-all, unless Mango goes viral, the whole project came out to about the same price as two of the Amazon collars and was far more personal.

## Final notes
While this project was admittedly simple, I felt a sense of bombastic satisfaction knowing that I had built something that was more featureful and better fit my needs than a commercial product.