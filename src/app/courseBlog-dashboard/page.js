import React from 'react';
import CourseBlogdashboard from './CourseBlogdashboard';
import Head from 'next/head';

const page = () => {
    return (
        <>
        <Head>
          <link rel="canonical" href="https://socialprachar.com/courseBlog-dashboard" />
        </Head>
        <div>
          <CourseBlogdashboard/>
        </div>
        </>
    );
};

export default page;
