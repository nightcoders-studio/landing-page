import type { Metadata } from 'next/types'
import { CollectionArchive } from '@/components/CollectionArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import { CardPostData } from '@/components/Card'

type Args = {
  searchParams: Promise<{
    q: string
  }>
}

export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { q: query } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  // Search parameters for collections
  const searchParams = query
    ? {
        where: {
          or: [
            {
              title: {
                like: query,
              },
            },
            {
              'meta.description': {
                like: query,
              },
            },
            {
              'meta.title': {
                like: query,
              },
            },
            {
              slug: {
                like: query,
              },
            },
          ],
        },
      }
    : {}

  // Search portfolios
  //@ts-expect-error - this is just because searchParams have to declare the types
  const portfolios = await payload.find({
    collection: 'portfolios',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    pagination: false,
    ...searchParams,
  }) // error is just because searchParams have to declare the types

  // Search stores
  //@ts-expect-error - this is just because searchParams have to declare the types
  const stores = await payload.find({
    collection: 'stores',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    pagination: false,
    ...searchParams,
  }) // error is just because searchParams have to declare the types

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h1 className="mb-8 lg:mb-16">Search</h1>
          <div className="max-w-[50rem] mx-auto">
            <Search />
          </div>
        </div>
      </div>

      {portfolios.totalDocs > 0 ? (
        <>
          <h2 className="container mb-8 font-bold  text-center">Portfolios</h2>
          <CollectionArchive posts={portfolios.docs as CardPostData[]} relationTo="portfolios" />
        </>
      ) : null}

      {stores.totalDocs > 0 ? (
        <>
          <h2 className="container font-bold mb-8 text-center mt-10">Stores</h2>
          <CollectionArchive posts={stores.docs as CardPostData[]} relationTo="stores" />
        </>
      ) : null}

      {portfolios.totalDocs === 0 && stores.totalDocs === 0 && (
        <div className="container text-center">No results found.</div>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Search | Nightcoders`,
  }
}
