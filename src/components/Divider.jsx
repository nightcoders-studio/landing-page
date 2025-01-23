// import React from 'react';

const Divider = () => {
    return (
        <div
            id="divider"
            className="relative flex items-center justify-center w-full h-16 px-4 overflow-hidden md:py-2 sm:px-2 bg-bg-default-tertiary"
        >
            <div className="flex items-center gap-9 md:m-0 whitespace-nowrap">
                <span className="text-white">Web Development</span>
                <i className="fa-solid fa-circle text-icon-brand-tertiary"></i>
                <span className="text-white">Product Design</span>
                <i className="fa-solid fa-circle text-icon-brand-tertiary"></i>
                <span className="text-white">Software Development</span>
                <i className="fa-solid fa-circle text-icon-brand-tertiary"></i>
                <span className="text-white">Landing Pages</span>
                <i className="fa-solid fa-circle text-icon-brand-tertiary"></i>
                <span className="text-white">SaaS</span>
                <i className="fa-solid fa-circle text-icon-brand-tertiary"></i>
                <span className="text-white">AI Automation</span>
            </div>
        </div>
    );
};

export default Divider;
