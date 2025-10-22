import React from 'react';
import Head from 'next/head';
import Headingpart from './Headingpart';
import DigitalMarketingArticle from './DigitalMarketingArticle.jsx';
import TypesOfDM from './TypesofDM.jsx';

const page = () => {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://socialprachar.com/why-small-business-need-digital-marketing" />
            </Head>
            <div>
                <Headingpart/>
                <DigitalMarketingArticle/>
                <TypesOfDM/>
            </div>
        </>
    );
};

export default page;
