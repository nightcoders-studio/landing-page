'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const HeroImage = () => {
  return (
    <div className="w-full hidden md:block">
      <DotLottieReact
        src="https://lottie.host/11e8a7b2-5a0d-49bb-a853-8a879fa28fd4/v18c8NWPFX.lottie"
        speed={1}
        loop
        autoplay
      />
    </div>
  )
}

export default HeroImage
