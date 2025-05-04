import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { type Portfolio } from '@/types/Portfolio'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import PortfolioHero from '@/heros/PortfolioHero'
import Image from 'next/image'
import Contact from '@/components/home/contact'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const portfolios = await payload.find({
    collection: 'portfolios',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = portfolios.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function PortfolioDetail({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/portfolios/' + slug
  const portfolio = (await queryPostBySlug({ slug })) as unknown as Portfolio

  if (!portfolio) return <PayloadRedirects url={url} />

  return (
    <article className="min-h-screen text-primary md:p-4 xl:p-10 px-4 max-w-[1200px] mx-auto">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PortfolioHero portfolio={portfolio} />

      <div className="flex w-full gap-4 justify-between md:flex-row flex-col">
        <div className="p-10 bg-neutral-400/10 rounded-2xl md:w-1/2">
          <h2 className="text-2xl font-bold text-primary">About This Project</h2>
          <p className="text-tertiary text-md mt-4">{portfolio.aboutThisProject}</p>
        </div>

        <div className="p-10 bg-neutral-400/10 rounded-2xl md:w-1/2">
          <h2 className="text-2xl font-bold text-primary">What Client Say?</h2>
          <div className="flex gap-4">
            <Image
              src={portfolio.review.reviewImage.url}
              alt={portfolio.review.reviewImage.alt}
              width={300}
              height={300}
              className="w-24 h-24 object-cover rounded-2xl mt-4 bg-neutral-400/10"
            />
            <div className="flex flex-col">
              <p className="text-tertiary text-md mt-4">{portfolio.review.reviewText}</p>
              <p className="text-secondary text-sm font-semibold mt-4">
                {portfolio.review.reviewAuthor}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full bg-neutral-400/10 justify-between md:flex-row flex-col mt-10 rounded-2xl">
        <div className="flex flex-col md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-primary">The Features</h2>
          <p className="text-tertiary text-md mt-4">
            {portfolio.features.split('\n').map((str, index: number) => (
              <span key={index} className="block">
                {str}
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-col md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-primary">Use Case</h2>
          <p className="text-tertiary text-md mt-4">
            {portfolio.features.split('\n').map((str, index: number) => (
              <span key={index} className="block">
                {str}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="flex w-full bg-neutral-400/10 justify-between md:flex-row flex-col mt-10 rounded-2xl">
        <div className="flex w-full flex-col p-10 gap-2">
          <h2 className="text-2xl font-bold text-primary">Technical Stack</h2>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 justify-between">
            <div className="flex gap-4 p-6 ring-brand ring-1 rounded-2xl items-start">
              <Image src="/react.svg" alt="react front end tech stack" width={20} height={20} />
              <div className="flex flex-col">
                <h3 className="font-semibold text-primary">Front End</h3>
                <p className="text-tertiary">{portfolio.techStacks.frontEnd}</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 ring-brand ring-1 rounded-2xl items-start">
              <Image src="/react.svg" alt="react front end tech stack" width={20} height={20} />
              <div className="flex flex-col">
                <h3 className="font-semibold text-primary">Back End</h3>
                <p className="text-tertiary">{portfolio.techStacks.backEnd}</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 ring-brand ring-1 rounded-2xl items-start">
              <Image src="/react.svg" alt="react front end tech stack" width={20} height={20} />
              <div className="flex flex-col">
                <h3 className="font-semibold text-primary">Design</h3>
                <p className="text-tertiary">{portfolio.techStacks.design}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          <RichText
            className="max-w-[48rem] mx-auto"
            data={portfolio.content as DefaultTypedEditorState}
            enableGutter={false}
          />
        </div>
      </div>

      <Contact />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const portfolio = await queryPostBySlug({ slug })

  return generateMeta({ doc: portfolio })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'portfolios',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
