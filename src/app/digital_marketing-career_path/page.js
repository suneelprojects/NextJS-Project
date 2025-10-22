import React from 'react';
import Head from 'next/head';
import Intro from './Introduction.jsx';
import StepbyStep from './StepbyStepCareer.jsx';
import DMCvsDSAI from './DMCvsDSAI.jsx';
import AEO_opt from './AEO_opt.jsx';
import Conclusion from './Conclusion.jsx';


const page = () => {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://socialprachar.com/digital_marketing-career_path" />
            </Head>
            <div>
                <Intro/>
                <StepbyStep/>
                <DMCvsDSAI/>
                <AEO_opt/>
                <Conclusion/>
            </div>
        </>
    );
};

export default page;
