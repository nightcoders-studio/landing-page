import Image, { StaticImageData } from 'next/image'

const ContentCard = ({
  image,
  title,
  description,
}: {
  image: StaticImageData | string
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-col gap-6 bg-neutral-400/10 p-3 items-center rounded-2xl">
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
      <div className="flex flex-col gap-2">
        <h1 className="text-xl text-default font-bold">{title}</h1>
        <p className="text-text-default-tertiary text-md font-sm">{description}</p>
      </div>
    </div>
  )
}

export default ContentCard
