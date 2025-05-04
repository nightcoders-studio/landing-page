import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { Logo } from '@/components/Logo/Logo'
import Image from 'next/image'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/company/nightcoders-dev">
              <Image src="/linkedin.svg" alt="Linkedin Image" width={25} height={25} />
            </Link>
            <Link href="https://www.instagram.com/nightcoders.id">
              <Image src="/instagram.svg" alt="Instagram Image" width={25} height={25} />
            </Link>
            <Link href="https://wa.me/+6285372603143">
              <Image
                src="/whatsapp.svg"
                alt="Whatsapp Image"
                width={25}
                height={25}
                className="filter grayscale-80"
              />
            </Link>
          </div>
          <ThemeSelector />

          {/* <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav> */}
        </div>
      </div>
    </footer>
  )
}
