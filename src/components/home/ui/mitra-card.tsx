import Image, { StaticImageData } from 'next/image'
import React from 'react'

const MitraCard = ({ image }: { image: StaticImageData | string }) => {
  return (
    <div className="bg-default-tertiary/20 rounded-xl flex items-center justify-center ">
      <Image
        src={image}
        alt="Mitra Image"
        width={120}
        height={120}
        className="object-contain filter grayscale h-[60px] w-[120px]"
      />
    </div>
  )
}

export default MitraCard
