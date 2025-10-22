import React from 'react';
import Head from 'next/head';
import OpenCourseBlog from '../OpenCourseBlog';

const page = ({ params }) => {
    const { slug } = params;
    const canonicalUrl = `https://socialprachar.com/courseBlog/${slug}`;

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div>
                <OpenCourseBlog/>
            </div>
        </>
    );
};

export default page;
