---
layout: project
title: My Favorite Hooks - useDownload
thumbnail: images/usedownload.png
stack:
  - React
  - TypeScript
  - Vite
slug: react-use-download
source: https://github.com/willkrakow/my-hooks/blob/master/src/hooks/useDownload.ts
description: A custom hook for fetching and downloading files from an external server. Written in TypeScript.
publicId: carbon_lvdylp
date: 2022-09-07
---

Although downloads are as foundational to the internet as Wordpress blogs and cats, there isn't a nice built-in Javascript API to handle them. Of course, there is a quite elegant way to do it in HTML:

```html
<a href="https://example.com/download.jpg" download="download.jpg">Download me!</a>
```

but who writes raw HTML anymore? Additionally, often we want to handle downloads from secure storage like S3, and need to generate secure, signed URLs on the fly.

To handle downloads the React-way, we'll need to fetch the file, parse its contents into a blob, then download it to the client computer. Here's one way to do it:

```typescript
import { useEffect, useRef } from "react";

const useDownload = (targetUrl: string, fileName?: string) => {
    const downloadRef = useRef<HTMLAnchorElement | null>();
    useEffect(() => {
        const a = document.createElement('a');
        fetch(targetUrl)
            .then(r => r.blob())
            .then(blob => {
                const objectUrl = window.URL.createObjectURL(blob);
                a.href = objectUrl

                if (!fileName) {
                    a.target = '__blank'
                } else {
                    a.download = fileName
                }
                document.body.appendChild(a);
                downloadRef.current = a
            })

        return () => {
            downloadRef.current = null;
            document.body.removeChild(a);
        }
    }, [targetUrl, fileName])

    const handleDownload = () => {
        if (downloadRef.current) {
            downloadRef.current.click();
        }
    }

    return handleDownload;
}

export default useDownload;
```

In effect, this hook *does* create (and, importantly, destroy) the aforementioned HTML `<a>` tag and "click" it. But why write one line of HTML when you can write 37 lines of Typescript that gets twice-tranpiled to DOM-rendering Javascript?