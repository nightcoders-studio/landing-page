// HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
import WhatWeDoBest from '../components/WhatWeDoBest';
import HowWeWork from '@/components/HowWeWork';
import Portfolio from '@/components/OurWorkSpeaksforItself'
import OurClients from '@/components/OurClients';
import StartProject from '@/components/StartProject';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Divider />
            <WhatWeDoBest />
            <HowWeWork />
            <Portfolio />
            <OurClients />
            <StartProject />
            {/*<Testimonial />
            <FAQ />
            <StartYourProject /> */}
            <Footer />

        </div>
    );
};

export default HomePage;
