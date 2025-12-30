'use client';

import React from 'react';
import "@/components/Homepage/index.css";
import LazySection from '@/components/reusedComponents/LazySection';

// Import components directly (no lazy loading - LazySection handles visibility)
import UnlockPotential from './unlockPotential/UnlockPotential';
import HomeBadge from './HomeBadge/HomeBadge';
import Clients from './clients/clients';
import EnrollDetails from './EnrollDetails/EnrollDetails';
import NewsOnUs from './newsArticle/newsOnUs';
import PlacedStudents from './PlacedStudents/PlacedStudents';
import TopCatogery from './TopCatogery/TopCatogery';
import HomeCourses from './HomeCardComp/HomeCourses';
import PathToExcellence from './sp_pathToExcellence/PathToExcellence';
import UpComming from './UpComming/UpComming';
import Comments from './comments/Comments';

const Homepage = () => {
    return (
        <>
            {/* HERO - Always render immediately */}
            <UnlockPotential />
            
            {/* Everything else - Load on scroll */}
            <LazySection>
                <HomeBadge />
            </LazySection>
            
            <LazySection>
                <Clients />
            </LazySection>
            
            <LazySection>
                <EnrollDetails />
            </LazySection>
            
            <LazySection>
                <NewsOnUs />
            </LazySection>
            
            <LazySection>
                <PlacedStudents />
            </LazySection>
            
            <LazySection>
                <TopCatogery />
            </LazySection>
            
            <LazySection>
                <HomeCourses />
            </LazySection>
            
            <LazySection>
                <PathToExcellence />
            </LazySection>
            
            <LazySection>
                <UpComming />
            </LazySection>
            
            <LazySection>
                <Comments />
            </LazySection>
        </>
    );
};

export default Homepage;
