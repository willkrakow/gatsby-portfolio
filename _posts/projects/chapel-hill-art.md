---
layout: project
title: Chapel Hill Street Art
thumbnail: images/chapelhillart.png
stack:
  - React
  - TypeScript
  - Vite
  - Cloudflare
  - Three.js
slug: chapel-hill-art
livesite: https://art.chapelhillnc.us
source: https://github.com/willkrakow/chapel-hill-art
description: Celebrating street artists in Chapel Hill and Carrboro, NC
publicId: usedatasync_fnxndt
date: 2023-07-01
---

Since moving back to my hometown of Chapel Hill, I've started to notice how well decorated this town is.

These days every small town boasts its own local art installation - in a city park, on the main historic stip, or maybe even nestled into a cookie-cutter neighborhood - but Chapel Hill (and its younger sibling, Carrboro) are covered with public murals and sculptures everywhere you look.

I wanted to create a central repository for these works and their makers, so I set about town snapping pictures. However, I quickly realized that those photographs were quite weak representations of the original art. So I went about town again, this time using [Polycam](https://poly.cam/) to capture 3D models. I compressed each model using [Draco](https://github.com/google/draco) and then renderd them to the HTML Canvas using [Three.js](https://threejs.org/). It took much longer than simply uploading some .jpeg, but I'd argue the results were worth it.