import React from 'react';
import Head from 'next/head';
import ProjectDashboard from './ProjectDashboard';
const page = () => {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://socialprachar.com/project-dashboard" />
            </Head>
            <div>
                <ProjectDashboard/>
            </div>
        </>
    );
};

export default page;