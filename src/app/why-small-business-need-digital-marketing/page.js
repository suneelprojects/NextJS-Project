import React from 'react';
import Headingpart from './Headingpart';
import DigitalMarketingArticle from './DigitalMarketingArticle.jsx';
import TypesOfDM from './TypesofDM.jsx';

const page = () => {
    return (
        <div>
            <Headingpart/>
            <DigitalMarketingArticle/>
            <TypesOfDM/>
        </div>
    );
};

export default page;