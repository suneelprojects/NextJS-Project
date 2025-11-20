import React from 'react';
import Head from 'next/head';
import ProjectDetails from './ProjectDetails';

const ProjectDetailsPage = ({ params }) => {
  const { slug } = params;
  const canonicalUrl = `https://socialprachar.com/sos/projectsdetails/${slug}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <ProjectDetails params={params} />
    </>
  );
};

export default ProjectDetailsPage;
