

import React from 'react';
import OurCEO from '@/components/about/OurCEO';
import Team from '@/components/about/Team';

export const metadata = {
    title: "About",
    description: "This is the about page",
}

const page = () => {
    return (
        <>
            <OurCEO />
            <Team />
        </>
    );
};

export default page;