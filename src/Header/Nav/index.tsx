'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { SearchIcon, MenuIcon, XIcon } from 'lucide-react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo/Logo'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative">
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-3 items-center">
        {navItems.map(({ link }, i) => (
          <CMSLink key={i} {...link} appearance="link" />
        ))}
        <Link href="/search">
          <span className="sr-only">Search</span>
          <SearchIcon className="w-5 text-primary" />
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="flex md:hidden items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {!isOpen && <MenuIcon className="w-6 h-6 text-primary" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-quaternary text-white flex flex-col p-6">
          {/* Header with logo and close icon */}
          <div className="flex justify-between items-center">
            <Logo loading="eager" priority="high" />
            <button onClick={toggleMenu} aria-label="Close menu">
              <XIcon className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Main menu links (top), Search (bottom) */}
          <div className="flex flex-col justify-between h-full">
            <div className="mt-8 flex flex-col gap-5">
              {navItems.map(({ link }, i) => (
                <button key={i} onClick={toggleMenu} className="w-full flex justify-start">
                  <CMSLink
                    {...link}
                    appearance="link"
                    className="text-lg text-brand font-semibold"
                  />
                </button>
              ))}
            </div>

            <button onClick={toggleMenu} className="w-full flex justify-start">
              <Link
                href="/search"
                className="flex items-center gap-2 text-white text-lg font-semibold pt-10 mb-5"
              >
                <SearchIcon className="w-5" />
                <span>Search</span>
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
