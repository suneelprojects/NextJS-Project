import React from 'react';
import Intro from './Introduction.jsx';
import StepbyStep from './StepbyStepCareer.jsx';
import DMCvsDSAI from './DMCvsDSAI.jsx';
import AEO_opt from './AEO_opt.jsx';
import Conclusion from './Conclusion.jsx';


const page = () => {
    return (
        <div>
            <Intro/>
            <StepbyStep/>
            <DMCvsDSAI/>
            <AEO_opt/>
            <Conclusion/>
        </div>
    );
};

export default page;