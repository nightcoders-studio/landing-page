import React from 'react'
import { Button } from '../components/ui/button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";


const Hero = () => {
    return (
        <div id='heroWrapper' className='flex flex-col items-stretch gap-2 px-4 flex-start'>
            <div id='heroContainer' className='flex flex-col items-stretch gap-2 mt-10 flex-start'>
                <div id='textHeroWrapper' className='flex flex-col items-stretch gap-4 p-6 py-6 border-2 shadow-sm rounded-xl border-text-brand bg-bg-default-secondary'>
                    <h4>40+ Client Happy</h4>
                    <div id='textHeroContainer' className='flex flex-col items-stretch gap-4 '>
                        <h1 className='text-4xl'>We're Here to Help You to <span className='text-text-brand'>Rock</span> Digital <span className='text-text-brand'>Innovation</span></h1>
                        <h3>Empowering businesses to overcome digital challenges with custom software solutions, seamless integrations, and innovative technologies tailored to your needs</h3>
                    </div>
                    <Button variant="default" size="lg">Start your project <FontAwesomeIcon icon={faRocket} /></Button>
                </div>

            </div>
        </div>
    )
}

export default Hero
