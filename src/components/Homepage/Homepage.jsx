'use client';

import React, { Suspense, lazy } from 'react';
import "@/components/Homepage/index.css";
import Loading from '@/components/reusedComponents/Loading';

// Lazy load components
const UnlockPotential = lazy(() => import('./unlockPotential/UnlockPotential'));
const HomeBadge = lazy(() => import('./HomeBadge/HomeBadge'));
const Clients = lazy(() => import('./clients/clients'));
const EnrollDetails = lazy(() => import('./EnrollDetails/EnrollDetails'));
const NewsOnUs = lazy(() => import('./newsArticle/newsOnUs'));
const PlacedStudents = lazy(() => import('./PlacedStudents/PlacedStudents'));
const TopCatogery = lazy(() => import('./TopCatogery/TopCatogery'));
const HomeCourses = lazy(() => import('./HomeCardComp/HomeCourses'));
const PathToExcellence = lazy(() => import('./sp_pathToExcellence/PathToExcellence'));
const UpComming = lazy(() => import('./UpComming/UpComming'));
const Comments = lazy(() => import('./comments/Comments'));

const Homepage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <UnlockPotential />
            <HomeBadge />
            <Clients />
            <EnrollDetails />
            <NewsOnUs />
            <PlacedStudents/>
            <TopCatogery />
            <HomeCourses/>
            <PathToExcellence />
            <UpComming />
            <Comments />
        </Suspense>
    );
};

export default Homepage;
