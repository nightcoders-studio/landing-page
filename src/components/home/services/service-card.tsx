import Image, { StaticImageData } from 'next/image'

type ServiceCardProps = {
  image: StaticImageData | string
  title: string
  description: string
  imagePosition?: 'left' | 'right' // Optional, default: left
}

const ServiceCard = ({ image, title, description, imagePosition = 'left' }: ServiceCardProps) => {
  const isLeft = imagePosition === 'left'

  return (
    <div className="flex flex-row gap-6 bg-neutral-400/10 p-3 items-center rounded-2xl">
      <div className={`w-full md:w-1/2 ${isLeft ? 'order-1' : 'order-2'}`}>
        <Image
          src={image}
          alt={`${title} image`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className={`w-full md:w-1/2 flex flex-col gap-2 ${isLeft ? 'order-2' : 'order-1'}`}>
        <h1 className="text-xl text-default font-bold">{title}</h1>
        <p className="text-text-default-tertiary text-md font-sm">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
