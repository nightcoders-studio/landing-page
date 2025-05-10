import { Code, Phone } from 'lucide-react'
import Link from 'next/link'
import HeroImage from './hero-image'

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-4 gap-6 items-center">
      <div className="flex flex-col gap-3 md:gap-5">
        <p className="text-default-tertiary font-semibold">40+ Client Happy</p>
        <h1 className="text-default-secondary text-3xl font-bold">
          {`We're Here to Help You Rock `}
          <span className="text-brand-secondary">Digital Innovation</span>
        </h1>
        <p className="text-default-tertiary">
          Helping businesses tackle digital challenges with tailored software solutions and seamless
          integrations.
        </p>
        <div className="flex gap-2">
          <Link href="/portfolios">
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-brand rounded-3xl">
              <Code size={16} />
              <span>See our Work</span>
            </button>
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 text-brand border border-brand rounded-3xl">
            <Phone size={16} />
            <span>Contact Us</span>
          </button>
        </div>
      </div>

      <HeroImage />
    </div>
  )
}

export default Hero
