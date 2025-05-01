import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Nightcoders is a creative web and mobile development agency based in Aceh, Indonesia. We specialize in building websites, mobile apps, and also offer premium web templates and UI/UX design services.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'Nightcoders – Digital Agency for Websites, Mobile Apps, Web Templates & Design',
  title: 'Nightcoders – Digital Agency for Websites, Mobile Apps, Web Templates & Design',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
