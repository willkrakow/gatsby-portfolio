---
layout: project
title: GPX Parser
thumbnail: images/gpxparser.png
stack:
  - React
  - Bootstrap
  - Netlify
slug: gpx-parser
source: https://github.com/willkrakow/gps-grapher
livesite: https://adoring-goldwasser-a7c4c6.netlify.app/
publicId: gpxparser_rp1sxh
---
Back when I was a runner, cyclist and triathlete, the most frequented app on my phone was [Strava](https://strava.com/).

If you're unfamiliar with Strava, imagine if Instagram and MapMyRun had a lovechild. Strava is the offspring. It's social media for endurance athletes.

As with the other large social media companies, Strava is all about collecting, parsing, and interpreting your data. But unlike certain tech giants, Strava's utility is in giving you the ability to view that data, which makes it a valuable tool for type-A athlete-nerds who like to dissect each workout to excrutiating precision.

### The Plan
I decided to create a web app that lets users upload their .gpx files (i.e., from a Garmin or other GPS watch/device) and quickly see some statistics about their activity. I wanted to keep the app lightweight, with a clean UI/UX.

### The Tech Stack
This project was bootstrapped with [`create-react-app`](https://create-react-app.dev/). I added the [Bootstrap](https://getbootstrap.com/) grid module for basic layout and then used [`styled-components`](https://styled-components.com/) for custom styling. Regrettably, I chose [Chart.js](https://chartjs.org/) for the data plots and spent too much time calling functions from inside 100 line JSON configs which just feels wrong.

#### Google Maps API
To be honest, Google Cloud services often intimidate me. There are about 15 different APIs for different Google Maps features and languages. I used the Javascript Maps SDK and the Map Styles tool to create a frame that would match the styles on the site. I also used `react-google-map` (which, importantly, is **Not** the same as `react-google-maps`, as I spent 45 minutes figuring out).

### The Project
See the [working demo](https://adoring-goldwasser-a7c4c6.netlify.app/).

#### Parsing uploads
I used the FileReader browser API to parse the uploaded file and then applied useState to store the resulting XML.

#### Math
While .gpx files are delightfully minimalist, such sparsity comes at the cost of the app parsing the file. I had to think back to Calc 3 to figure out how to calculate distances and velocities across points on a sphere (i.e., our planet).

Here's the formula I used:

```
// Formula for the distance between two GPS coordinates (a:[float, float], b:[float, float])

function distance(a, b) {
  const [lat1, lon1] = a;
  const [lat2, lon2] = b;
 
  //Add method to Number prototype to convert degrees to radians
  if (typeof Number.prototype.toRad === "undefined") {
    // eslint-disable-next-line
    Number.prototype.toRad = function () {
      return (this * Math.PI) / 180;
    };
  }

  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1).toRad(); // Javascript functions in radians
  const dLon = (lon2 - lon1).toRad();
  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1.toRad()) *
      Math.cos(lat2.toRad()) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}
}
```

With that formula, I could loop over the points, finding the distance between each subsequent pair, and calculate the total distance of the route.

#### Removing outliers
GPS is notoriously fickle, and I quickly discovered that every so often, a set of coordinates would be outlandishly off the logical path. To remove these outliers, I did two things:

- Throwing out any points where the calculated pace was greater than 50kph (or, for cycling, 150kph).
- Compress the array of coordinates by chunking into groups of 5 and returning the average of the 5 points.

### Styles
I went for a slightly neumorphic look, which big chunky shapes and rounded corners and some faint gradients. At first I was planning to go ultra-minimalist – black backgrounds, white text, really only styling the buttons and cards - but found that giving each chart/plot its own unique color would make them easier to quickly identify.

### Hosting
I use GitHub for version control which meant that deploying this app to Netlify was super simple. I like serverless a lot, and Netlify has a fantastic free tier that lets you host up to 100GB of bandwidth usage and 300 build minutes per month. In fact, Netlify is where this portfolio site is hosted too!

***

Thanks for reading! 

