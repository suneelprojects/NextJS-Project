import React from 'react'
import Head from 'next/head'
import EventsOpenPage from '../EventsOpenPage'

const page = ({ params }) => {
  const { id } = params;
  const canonicalUrl = `https://socialprachar.com/events/${id}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <EventsOpenPage/>
    </>
  )
}

export default page
