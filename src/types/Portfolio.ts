import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type ImageSize = {
  url: string
  width: number
  height: number
  mimeType: string
  filesize: number
  filename: string
}

type HeroImage = {
  id: number
  alt: string | null
  caption: string | null
  updatedAt: string
  createdAt: string
  url: string
  thumbnailURL: string
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  focalX: number
  focalY: number
  sizes: {
    thumbnail: ImageSize
    square: ImageSize
    small: ImageSize
    medium: ImageSize
    large: ImageSize
    xlarge: ImageSize
    og: ImageSize
  }
}

type TextNode = {
  detail: number
  format: number
  mode: string
  style: string
  text: string
  type: 'text'
  version: number
}

type ParagraphNode = {
  children: TextNode[]
  direction: string
  format: string
  indent: number
  type: 'paragraph'
  version: number
  textFormat: number
  textStyle: string
}

type ContentRoot = {
  children: ParagraphNode[]
  direction: string
  format: string
  indent: number
  type: 'root'
  version: number
}

type Content = {
  root: ContentRoot
}

type Breadcrumb = {
  id: string
  doc: number
  url: string
  label: string
}

type Category = {
  id: number
  title: string
  slug: string
  slugLock: boolean
  parent: number | null
  breadcrumbs: Breadcrumb[]
  updatedAt: string
  createdAt: string
}

type Meta = {
  title: string
  image: string | null
  description: string
}

type Author = {
  id: number
  name: string
  updatedAt: string
  createdAt: string
  email: string
  loginAttempts: number
}

export type Portfolio = {
  id: number
  title: string
  year: number
  heroImage: HeroImage
  content: Content | DefaultTypedEditorState
  categories: Category[]
  meta: Meta
  publishedAt: string
  authors: Author[]
  slug: string
  slugLock: boolean
  updatedAt: string
  createdAt: string
  _status: 'published' | 'draft' | string
}
