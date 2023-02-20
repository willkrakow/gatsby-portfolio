---
layout: project
title: Scraping pricing data from a bad hospital website
thumbnail: images/computer_desk.jpeg
stack:
  - Python
slug: scraping-pricing-data-from-a-bad-hospital-website
description: Part I.
publicId: unc-health-price-inhouse
date: 2021-08-30
---

A while back I was referred to a GI clinic at UNC hospitals for an ultrasound. Now, since I'm a middle class citizen in the US with decent health insurance, I thought it prudent for me to check on the price of this procedure and ensure that it wouldn't bankrupt me. And it was smart that I did - this quotidian and simple 15 minute procedure would have ran me about $1200 – and that's #after# the insurance adjustment.

But egregious prices aside, what frustrated me the most about this whole ordeal was the difficulty in finding that price in the first place, a challenge that was purportedly fixed by the implementation of the Health Price Transparency Act, which came into force on January 1, 2021.

Here's how the Centers for Medicare & Medicaid Services: summarized this piece of legislation:

> Hospital price transparency helps Americans know the cost of a hospital item or service before receiving it. Starting January 1, 2021, each hospital operating in the United States will be required to provide clear, accessible pricing information online about the items and services they provide in two ways:
>
> - As a comprehensive machine-readable file with all items and services.
> - In a display of shoppable services in a consumer-friendly format.
>
> This information will make it easier for consumers to shop and compare prices across hospitals and estimate the cost of care before going to the hospital.

That sounds logical and long overdue, and I'm glad for this bill, but in reality it has not (thus far) been very effective.

Take the UNC price estimator, for example. Here are just a few of the problems I discovered with it:

- The tool is not indexed on Google; I found it about 4 layers deep in my UNC Health patient portal. This would be a violation of HPT (which stipulates that consumers should not need accounts to access price data), but technically, anyone *can* access the tool directly at https://portalapprev.com/ptapp/#8d086f6527295fbb6f6d253f3b5548b85ef9fcad8319564656464e552fff3d1e

- Procedures are not searchable, and are listed out *1 per page*, across thousands of pages. Yes, you read that correctly. I'm not making this shit up.

![This is a joke.](https://res.cloudinary.com/djmk8xgrk/image/upload/v1616418698/Screen_Shot_2021-03-22_at_9.10.42_AM_rjnm6b.png "They aren't even trying." )

- The tool is not mobile-friendly in the slightest, which disadvantages the poor consumers who often use a mobile phone as their primary internet device, and who would be most likely to need to check prices before going to the hospital.

- The tool does not provide an easy way to compare prices across different insurance providers.

- While there is indeed an "Export" button, the only option is **Current page data**. You know, in case someone was to analyze a 1 line CSV file.

- No one goes to the hospital for a single procedure. There are all sorts of charges for a standard hospital visit (medications, laundry, IV pushes, etc.) that are not included in a listed procedures price. This will cause consumers to vastly underestimate their final bill.

I'm getting mad just thinking about this again.

Anywho, this app was essentially my way of validating my belief that UNC built this price tool intentionally poorly. Too bad their DNS security is configured poorly as well.

**UPDATE** As of March 22, 2021, the tool now includes a ReCaptcha on the landing page, ostensibly because I sent them a message which included the above criticisms as well as my intent to scrape the data and build my own tool.

ReCaptchas are notably difficult for those with impaired vision and/or hearing, as well as the elderly - populations that likely comprise the majority of the patients at UNC Health. On the bright side, there's still no API authentication to be heard of. They really hit the nail right on the thumb this time.

