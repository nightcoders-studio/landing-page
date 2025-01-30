import { useState } from "react";
import { Smartphone, Globe, BrainCircuit, PenTool } from "lucide-react";

const ServiceCard = ({ icon, title, description, tags, isExpanded, onToggle }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-2xl shadow-md w-full mb-4">
      {/* Mobile View */}
      <div className="md:hidden">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={onToggle}
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white p-3 rounded-lg shadow-md flex justify-center items-center">
              {icon}
            </div>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          </div>
          <div className="bg-gray-300 p-3 rounded-full flex justify-center items-center">
            <span className={`block w-4 h-4 border-r-2 border-b-2 border-gray-700 transform transition-transform duration-300 ${isExpanded ? 'rotate-[225deg]' : 'rotate-45'}`} />
          </div>
        </div>

        {/* Mobile Expandable Content */}
        <div className={`transition-all duration-300 ease-out ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <p className="text-gray-700">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 text-sm bg-gray-300 text-gray-800 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View - Always Expanded */}
      <div className="hidden md:grid md:grid-cols-[auto,auto,1fr] lg:grid-cols-[auto,2.4fr,5fr] gap-4 items-start">
        <div className="bg-white p-3 rounded-lg shadow-md flex justify-center items-center">
          {icon}
        </div>
        
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 lg:pl-8 xl:max-w-64">
          {title}
        </h2>

        <div>
          <p className="text-gray-700 lg:text-xl">{description}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-4">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 text-sm bg-gray-300 text-gray-800 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatWeDoBest = () => {
  const [expandedId, setExpandedId] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Smartphone className="w-6 h-6 text-gray-700" />,
      title: "Mobile App Development",
      description: "Empower your business with sleek, user-friendly mobile applications. Whether for iOS or Android, we craft apps that combine exceptional design with high performance",
      tags: [
        "Native & Cross Platform Development",
        "API Integration for Additional Functionality",
        "Optimal Performance & High-Level Security",
      ],
    },
    {
      id: 2,
      icon: <Globe className="w-6 h-6 text-gray-700" />,
      title: "Web Development",
      description: "We create fast, secure, and visually appealing websites tailored to your business, from simple sites to complex cloud platforms.",
      tags: [
        "Modern Web Technologies",
        "Responsive Design",
        "Scalable Infrastructure",
      ],
    },
    {
      id: 3,
      icon: <BrainCircuit className="w-6 h-6 text-gray-700" />,
      title: "AI Integration & Automation",
      description: "Leverage the power of AI to automate processes, enhance decision-making, and unlock new business opportunities. We bring smart solutions that drive efficiency",
      tags: [
        "Machine Learning Integration",
        "Process Automation",
        "AI-Powered Analytics",
      ],
    },
    {
      id: 4,
      icon: <PenTool className="w-6 h-6 text-gray-700" />,
      title: "Digital Product Design",
      description: "We create user-focused designs that are both engaging and efficient, from wireframes to prototypes, ensuring great looks and functionality.",
      tags: [
        "UI/UX Design",
        "Prototyping",
        "User Research",
      ],
    },
  ];

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
        <h1 className="text-3xl md:text-2xl lg:text-4xl font-semibold flex-[40%] mb-4 sm:mb-0">
          What We Do <span className="text-blue-600">Best</span>
        </h1>
        <h4 className="text-gray-600 text-lg md:text-base lg:text-xl lg:leading-relaxed lg:flex-[30%] text-center sm:text-right">
          Delivering excellence across every stage of your digital transformation
        </h4>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            isExpanded={expandedId === service.id}
            onToggle={() => setExpandedId(expandedId === service.id ? null : service.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoBest;