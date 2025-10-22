import React from 'react';
import Head from 'next/head';
import DatesForm from './DatesForm';

const page = () => {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://socialprachar.com/datesform" />
            </Head>
            <div>
               <DatesForm/>
            </div>
        </>
    );
};

export default page;
