import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { MoveUpRight, MoveDownRight, Space } from "lucide-react";
import Spacer from './ui/spacer';

const FAQ = () => {
    const [activeItem, setActiveItem] = useState(null);

    const questions = [
        {
            id: 1,
            title: 'What is the typical process like?',
            content: 'We start with a discovery call, then create a detailed proposal. Once approved, we begin development with regular updates and feedback sessions.',
        },
        {
            id: 2,
            title: 'What does a project typically cost?',
            content: 'The cost of a project can change depending on how complex it is and what you need. Once we get a better idea of what you’re looking for, we’ll send you a detailed quote!',
        },
        {
            id: 3,
            title: 'How long does a project usually take?',
            content: 'Timeline depends on project scope. Websites typically take 2-4 weeks, while complex applications may take 2+ months.',
        },
    ];

    return (
        <div className="FAQ-Wrapper h-auto relative grid grid-cols-1 lg:grid-cols-[35%,65%] w-screen px-0 lg:px-16 md:px-7 sm:items-center sm:mx-0 sm:text-center md:text-left md:pb-36 lg:pt-16 lg:gap-9">
            {/* Left Section */}
            <div className="relative flex flex-col md:w-[364px] lg:w-full text-4xl font-semibold leading-[44px] md:text-left lg:items-start ">
                <h1 className="relative z-10 font-semibold align-text-top md:pl-0 text-text-default sm:text-3xl lg:text-5xl lg:mb-6 lg:self-start sm:pb-5 sm:px-20 lg:leading-normal">
                    Still wondering if we&rsquo;re right for you?
                </h1>
            </div>

            <Spacer className="md:block lg:hidden" />

            {/* Right Section */}
            <div className=" contentWrapper">
                <div className=" w-fullrounded-lg content-container">
                    <Accordion.Root type="single" collapsible className="space-y-4 ">
                        {questions.map((item) => (
                            <Accordion.Item
                                key={item.id}
                                value={`item-${item.id}`}
                                className="px-6 overflow-hidden md:px-0 accordion-item"
                            >
                                <Accordion.Header className='accordion-header rounded-sm sm:rounded-md backdrop-blur-sm sm:p-4 bg-[rgba(17,0,0,0.08)] transition-all duration-500 sm:max ease-in-out'>
                                    <Accordion.Trigger
                                        onClick={() =>
                                            setActiveItem(activeItem === item.id ? null : item.id)
                                        }
                                        className="flex items-center justify-between w-full text-left bg-transparent"
                                    >
                                        <span className="text-lg font-medium sm:text-xl md:text-2xl sm:w-3/5 text-text-default ">{item.title}</span>
                                        <div
                                            className={`transition-transform duration-700 ease-in-out ${activeItem === item.id
                                                ? "rotate-[1deg] transition-transform duration-700"
                                                : "rotate-10 transition-transform duration-700"
                                                }`}
                                        >
                                            {activeItem === item.id ? (
                                                <MoveDownRight className="sm:w-12 sm:h-12 sm:p-2 text-text-default-secondary bg-bg-default-secondary sm:rounded-full" />
                                            ) : (
                                                <MoveUpRight className="text-white sm:w-12 sm:h-12 sm:p-2 bg-bg-default-tertiary sm:rounded-full" />
                                            )}
                                        </div>

                                    </Accordion.Trigger>
                                    <Accordion.Content className="p-4 text-sm sm:text-left sm:text-base lg:text-lg xl:text-xl transition-all duration-500 sm:max ease-in-out data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out ">
                                        {item.content}
                                    </Accordion.Content>
                                </Accordion.Header>

                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </div>
            </div>
            <Spacer className="sm:block md:hidden h-14" />
        </div >
    );
};

export default FAQ;
