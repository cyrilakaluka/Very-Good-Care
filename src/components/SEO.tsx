import Head from 'next/head';
import React from 'react';

const SEO = ({ pageTitle, pageDescription }: { pageTitle: string; pageDescription: string }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}

export default SEO;