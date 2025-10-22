import React from 'react';
import Head from 'next/head';
import Thankyou from './Thankyou';

const page = () => {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://socialprachar.com/thank-you" />
            </Head>
            <div>
                <Thankyou/>
            </div>
        </>
    );
};

export default page;