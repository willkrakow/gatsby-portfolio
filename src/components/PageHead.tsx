import React from 'react'
interface IPageHead {
    title: string;
    url: string;
    description: string;
}
export default function PageHead({title, url, description}: IPageHead) {
  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
