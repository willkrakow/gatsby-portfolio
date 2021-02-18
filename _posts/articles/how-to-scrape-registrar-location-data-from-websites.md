---
layout: article
date: 2021-02-18T02:17:40.796Z
title: How to scrape registrar location data from websites
thumbnail: https://images.pexels.com/photos/346696/pexels-photo-346696.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
slug: "{{title}}"
---
A while back my company acquired a list of prominent bloggers in our industry. We hoped to reach out to these bloggers to promote our then recently launched influencer program. However, one thing missing from the list was the location data for each blogger. With GDPR in mind, I wanted to be very cautious about who we contacted; the US has much more lenient laws about unsolicited emails, so I wanted to identify which of the bloggers' sites had IPs registered in the US.

My first thought was to spend a day looking up domain and whois info on [the ICANN database](https://lookup.icann.org). However, being lazy, and a programmer, I thought "I should be able to automate this".

And so, enter Python and [IPInfo](https://ipinfo.io).

Here's an overview of the method I used. (View the source on GitHub)[https://github.com/willkrakow/country_lookup].

## Tools

### ipinfo.io
To get info about each blogger's website on the list, [create an IP Info account](https://ipinfo.io/). IP Info provides a web-based GUI for on-the-fly IP metadata requests, as well as a REST API that can be used to build a scripts around larger datasets. The free tier should be more than enough for medium sized projects.

### `tldextract`
This Python library provides a quick means for parsing URLs, removing trailing slashes, subdomains, `https://www.`, etc. We'll use this to clean the URLs before performing a whois lookup.

```
>>> import tldextract
>>> tldextract.extract('http://forums.news.cnn.com/')
ExtractResult(subdomain='forums.news', domain='cnn', suffix='com')
```
[Source](https://github.com/john-kurkowski/tldextract)

### Built-in libraries
You can use Python's built in `socket` library to identify the host IP from a domain. For environment variables, install `pipenv` with `pip -U install pipenv`, then run `pipenv install [LIBRARY]` for simplified package management. You can then create a Pipfile to store API keys and local files, and import the files with the built-in `os` library:

```
# settings.py
# Setting up environment variables for access from any file in your root directory

from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

# OR, explicitly providing path to '.env'
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

```
To use your environment variables in your `main` file (or in any file in the directory):
```
# main.py
# Importing environment variables.
import os

input_file=os.getenv("INPUT_FILE")
```

### Running the program
```
// Lookup US registered domains
$ cd country_lookup
$ python3 main.py

// Lookup domains registered in other countries by passing the two-letter country code
$ python3 main.py ar
```
[Two-letter country codes from IBAN](https://www.iban.com/country-codes) 