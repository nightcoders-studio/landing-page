import Image, { StaticImageData } from 'next/image'
import React from 'react'

const MitraCard = ({ image }: { image: StaticImageData | string }) => {
  return (
    <div className="w-[264px] h-[120px] bg-default-tertiary/20 rounded-xl flex items-center justify-center ">
      <Image
        src={image}
        alt="Mitra Image"
        width={80}
        height={80}
        className="object-contain filter grayscale h-[60px] w-[120px]"
      />
    </div>
  )
}

export default MitraCard
