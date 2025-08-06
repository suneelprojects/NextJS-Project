import React from 'react';
import Header from './Header/Header';
import ProgramHighlates from './ProgramHighlates/ProgramHighlates';
import HandsOnCaseStudies from './HandsOnCaseStudies/HandsOnCaseStudies';
import CertificationAndBadges from './CertificationAndBadges/CertificationAndBadges';
import DigitalNest from './DigitalNest/DigitalNest';
import DigitalMarketing from './DigitalMarketingTools/DigitalMarketing';
import NextGenAiTools from './NextGenAITools/NextGenAiTools';
import PlacementsSupport from './PlacementSupport/PlacementSupport';
import WhatSupport from './WhatSupport/WhatSupport';

const page = () => {
    return (
        <div>
            <Header />
            <ProgramHighlates />
            <HandsOnCaseStudies />
            <CertificationAndBadges />
            <DigitalNest />
            <DigitalMarketing />
            <NextGenAiTools />
            <PlacementsSupport />
            <WhatSupport />
        </div>
    );
};

export default page;