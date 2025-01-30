// HomePage.jsx
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Divider from '../components/Divider';
import WhatWeDoBest from '../components/WhatWeDoBest';
import HowWeWork from '@/components/HowWeWork';
import Portfolio from '@/components/OurWorkSpeaksforItself'
import OurClients from '@/components/OurClients';
import StartProject from '@/components/StartProject';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import Spacer from '@/components/ui/spacer';


const HomePage = () => {
    return (
        <div>
            <Hero />
            <Divider />
            <Spacer />
            {/* <WhatWeDoBest /> */}
            <HowWeWork />
            <Portfolio />
            <OurClients />
            <Testimonial />
            <FAQ />
            <StartProject />
            <Footer />

        </div>
    );
};

export default HomePage;
