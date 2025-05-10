import Contact from '@/components/home/contact'
import PortfolioList from '@/components/home/portofolios/portfolio-list'
import { Metadata } from 'next/types'
import React from 'react'

const PortfolioPage = async () => {
  return (
    <div className="min-w-screen min-h-screen">
      <h2 className="text-3xl text-primary text-center font-bold p-4 mt-10">
        Our <span className="text-brand">Work</span> Speaks for Itself
      </h2>

      <PortfolioList />
      <br />
      <Contact />
    </div>
  )
}

export default PortfolioPage

export function generateMetadata(): Metadata {
  return {
    title: `Portofolios | Nightcoders`,
  }
}
