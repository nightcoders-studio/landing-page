import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { MoveUpRight, MoveDownRight } from "lucide-react";

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
        <div className="FAQ-Wrapper relative grid grid-cols-1 lg:grid-cols-[35%,65%] w-screen px-0 lg:px-16 md:px-7 sm:items-center sm:mx-0 sm:text-center md:text-left md:pb-36 lg:pt-16 lg:gap-3">
            {/* Left Section */}
            <div className="flex items-center justify-center h-screen bg-slate-500">
                <h1 className="text-4xl font-bold text-white">
                    Still wondering if we're right for you?
                </h1>
            </div>

            {/* Right Section */}
            <div className="h-screen p-4 bg-pink-500 contentWrapper">
                <div className="w-full p-6 bg-white rounded-lg shadow-md content-container">
                    <Accordion.Root type="single" collapsible className="space-y-4">
                        {questions.map((item) => (
                            <Accordion.Item
                                key={item.id}
                                value={`item-${item.id}`}
                                className="overflow-hidden border-b border-gray-200"
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger
                                        onClick={() =>
                                            setActiveItem(activeItem === item.id ? null : item.id)
                                        }
                                        className="flex items-center justify-between w-full p-4 text-left rounded-md bg-gray-50 hover:bg-gray-100"
                                    >
                                        <span className="text-lg font-medium">{item.title}</span>
                                        <div
                                            className={`transition-transform duration-300 ease-in-out ${activeItem === item.id ? "rotate-180" : "rotate-0"
                                                }`}
                                        >
                                            {activeItem === item.id ? (
                                                <MoveDownRight className="w-6 h-6 text-gray-600" />
                                            ) : (
                                                <MoveUpRight className="w-6 h-6 text-gray-600" />
                                            )}
                                        </div>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="p-4 text-sm text-gray-700 bg-gray-50">
                                    {item.content}
                                </Accordion.Content>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
