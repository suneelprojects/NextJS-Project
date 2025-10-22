import React from 'react';
import DataScience from './DataScience.jsx';
import Ai from './Ai.jsx';
import AEO_opt from './AEO_opt';
import Head from 'next/head';

const page = () => {
    return (
        <>
        <Head>
          <link rel="canonical" href="https://socialprachar.com/data_science-artificial_intelligence" />
        </Head>
        <div>
            <DataScience/>
            <Ai/>
            <AEO_opt/>
        </div>
        </>
    );
};

export default page;