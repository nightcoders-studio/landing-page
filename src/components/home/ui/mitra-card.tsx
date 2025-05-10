import Image, { StaticImageData } from 'next/image'
import React from 'react'

const MitraCard = ({ image }: { image: StaticImageData | string }) => {
  return (
    <div className="flex items-center justify-center w-[264px] h-[120px] bg-neutral-400/10 p-3 rounded-2xl hover:scale-105 duration-200 group">
      <div className="flex items-center w-[264px] h-[120px] justify-center bg-default-tertiary/20 group-hover:scale-105">
        <Image
          src={image}
          alt="Mitra Image"
          width={120}
          height={120}
          className="object-contain filter grayscale group-hover:grayscale-0 transition duration-300 h-[60px] w-[120px]"
        />
      </div>
    </div>
  )
}

export default MitraCard
