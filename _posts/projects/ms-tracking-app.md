---
layout: project
title: Women's Health + React Native
thumbnail: images/healthdata.jpeg
stack:
  - TypeScript
  - React Native
  - React
  - Tensorflow
slug: mc-tracking-app
source: https://github.com/willkrakow/trackerapp
publicId: healthdata_dbdaw4
description: Machine learning for menstrual cycle predictions + an iOS app for securely tracking your health
date: 2022-08-01
---

Regardless of your take on the overturning of *Roe v. Wade*, it has inarguably brought much-needed attention to two important issues: **women's health** and **data privacy**.

In the wake of the supreme court's decision, there have been a flurry of news reports critiquing the data privacy and security practices of women's health apps. Almost all of these apps store user health data server side, and the fear is that law enforcement could subpoena this data to as part of criminal investigations into possible abortions.

While companies are required to comply with subpoena orders for user data, the 5th Amendment protects the users themselves from turning over their data. Thus, the obvious technical solution is to store all sensitive data locally, on the user's device.

I decided to build such an app - one that uses local authentication and storage. While the web is more my forte, the local storage options for web applications just aren't up to par with clean SQLite interface of native apps. This was my first time really building a full React Native app, and I can't say I enjoyed the process. My experience was likely worsened by the fact that at the time I'm building this, the React Native ecosystem is spliced, seemingly by some breaking changes in version 0.60.
## Mobile App Technologies
- React Native
- TypeScript
- Expo
- TypeORM
- SQLite
- Victory Charts

## Issues Encountered
One of the issues I encountered while building this app was how best to display data. I wanted to display charts of various physiological metrics plotted against time, but had to make a few judgement calls as to the specifics. For example, I deliberated over whether charts should be interpolated (or "smoothed") using splines. 

In other words, if a user enters a body temperature of 98.4 F on January 1, then a body temperature of 98.8 on January 3, should the graph show their body temperature as 98.6 on January 2 (even if they've entered no data for that day)? I decided that yes, I would interpolate data points, partly due to the mean value theorem and partly because the graphs looked prettier when they were nice and spline-y. Also, if the chart wasn't interpolated via spline, and was instead a step-chart, the data displayed would be equally invalid.

## Machine Learning
I found a dataset on Kaggle of time-series menstrual cycle data and used it to train a Tensorflow model that would predict what day of a woman's cycle she was currently in. I'm still tuning the layers but will post here when it's complete.