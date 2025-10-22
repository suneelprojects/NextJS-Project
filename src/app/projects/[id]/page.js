import React from 'react'
import Head from 'next/head'
import OpenBlogPage from '../OpenBlogPage'

const page = ({ params }) => {
  const { id } = params;
  const canonicalUrl = `https://socialprachar.com/projects/${id}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <OpenBlogPage/>
    </>
  )
}

export default page
