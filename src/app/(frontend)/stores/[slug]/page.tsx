import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import Image from 'next/image'
import Contact from '@/components/home/contact'
import { Store } from '@/types/Store'
import StoreHero from '@/heros/StoreHero'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const stores = await payload.find({
    collection: 'stores',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = stores.docs.map(({ slug }) => {
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
  const url = '/stores/' + slug
  const store = (await queryPostBySlug({ slug })) as unknown as Store

  if (!store) return <PayloadRedirects url={url} />

  return (
    <>
      <article className="min-h-screen text-primary md:p-4 xl:p-10 px-4 max-w-[1200px] mx-auto">
        <PageClient />

        {/* Allows redirects for valid pages too */}
        <PayloadRedirects disableNotFound url={url} />

        {draft && <LivePreviewListener />}

        <StoreHero store={store} />

        <div className="flex  flex-col flex-1 w-full justify-between p-10 bg-neutral-400/10 rounded-2xl md:w-full">
          <h2 className="text-2xl font-bold text-primary">About This Project</h2>
          <p className="text-tertiary text-md mt-4">{store.aboutThisProject}</p>
        </div>

        <div className="flex w-full bg-neutral-400/10 justify-between md:flex-row flex-col mt-10 rounded-2xl">
          <div className="flex flex-col md:w-1/2 p-10">
            <h2 className="text-2xl font-bold text-primary">The Features</h2>
            <p className="text-tertiary text-md mt-4">
              {store.features.split('\n').map((str, index: number) => (
                <span key={index} className="block">
                  {str}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col md:w-1/2 p-10">
            <h2 className="text-2xl font-bold text-primary">Use Case</h2>
            <p className="text-tertiary text-md mt-4">
              {store.features.split('\n').map((str, index: number) => (
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
                  <p className="text-tertiary">{store.techStacks.frontEnd}</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 ring-brand ring-1 rounded-2xl items-start">
                <Image src="/react.svg" alt="react front end tech stack" width={20} height={20} />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-primary">Back End</h3>
                  <p className="text-tertiary">{store.techStacks.backEnd}</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 ring-brand ring-1 rounded-2xl items-start">
                <Image src="/react.svg" alt="react front end tech stack" width={20} height={20} />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-primary">Design</h3>
                  <p className="text-tertiary">{store.techStacks.design}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8">
          <div className="container">
            <RichText
              className="max-w-[48rem] mx-auto"
              data={store.content as DefaultTypedEditorState}
              enableGutter={false}
            />
          </div>
        </div>
      </article>
      <Contact />
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const store = await queryPostBySlug({ slug })

  return generateMeta({ doc: store })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'stores',
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
