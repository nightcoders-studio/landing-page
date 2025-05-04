import { ArrowRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const ContentCard = ({
  image,
  title,
  description,
  slug,
  purchase = false,
  price,
}: {
  image: StaticImageData | string
  title: string
  description: string
  slug: string
  purchase?: boolean
  price?: string
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || ''
  return (
    <Link href={`${baseUrl}/${slug}`} className="w-full">
      <div className="flex flex-col gap-6 bg-neutral-400/10 p-3 items-center rounded-2xl hover:shadow-lg transition-shadow duration-200">
        <div className="w-full">
          <Image
            src={image}
            alt={`${title} image`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-xl text-default font-bold">{title}</h1>
          <p className="text-text-default-tertiary text-md font-sm line-clamp-3">{description}</p>
        </div>
        {purchase && (
          <div
            className={`flex flex-row ${price ? 'justify-between' : 'justify-end'} items-center w-full`}
          >
            {price && <p className="text-md font-bold text-primary">{price}</p>}
            <p className="text-sm text-primary flex items-center gap-1">
              Purchase Now <ArrowRight className="w-3 h-3" />
            </p>
          </div>
        )}
      </div>
    </Link>
  )
}

export default ContentCard
