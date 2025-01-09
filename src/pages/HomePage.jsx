// HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
import WhatWeDoBest from '../components/WhatWeDoBest';
import HowWeWork from '@/components/HowWeWork';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Divider />
            <WhatWeDoBest />
            <HowWeWork />
            {/*<Portfolio />
            <ClientReview />
            <Testimonial />
            <FAQ />
            <StartYourProject /> */}
            <Footer />

        </div>
    );
};

export default HomePage;
