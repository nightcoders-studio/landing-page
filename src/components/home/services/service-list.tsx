'use client'

import React, { useEffect, useState } from 'react'
import ServiceCard from './service-card'

const ServiceList = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // check on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const imagePosition = isMobile ? 'left' : 'right'

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ServiceCard
        image={'/mobile-dev.png'}
        title="Mobile App Development"
        description="Empower your business with sleek, user-friendly mobile applications. Whether for iOS or Android, we craft apps that combine exceptional design with high performance"
      />
      <ServiceCard
        image={'/web-dev-service.png'}
        title="Web Development"
        description="We create fast, secure, and visually appealing websites tailored to your business, from simple sites to complex cloud platforms."
      />
      <ServiceCard
        imagePosition={imagePosition}
        image={'/ai-service.png'}
        title="AI Integration & Automation"
        description="Leverage the power of AI to automate processes, enhance decision-making, and unlock new business opportunities. We bring smart solutions that drive efficiency"
      />
      <ServiceCard
        imagePosition={imagePosition}
        image={'/design-service.png'}
        title="Digital Product Design"
        description="We create user-focused designs that are both engaging and efficient, from wireframes to prototypes, ensuring great looks and functionality."
      />
    </div>
  )
}

export default ServiceList
