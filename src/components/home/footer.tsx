import Link from 'next/link'
import Contact from './contact'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import Linkedin from '@/public/linkedin.svg'
import Instagram from '@/public/instagram.svg'
import Whatsapp from '@/public/whatsapp.svg'

const Footer = () => {
  return (
    <div>
      <Contact />
      <div className="w-full h-[140px] flex justify-between bg-gray-900 items-center p-10">
        <Link href="/">
          <Image src={Logo} alt="Nightcoders Logo" width={150} height={150} />
        </Link>

        <p className="text-white text-sm">©nightCoders</p>

        <div className="flex gap-6">
          <Link href="https://www.linkedin.com/company/nightcoders-dev">
            <Image src={Linkedin} alt="Linkedin Image" width={40} height={40} />
          </Link>
          <Link href="https://www.instagram.com/nightcoders.id">
            <Image src={Instagram} alt="Instagram Image" width={40} height={40} />
          </Link>
          <Link href="https://wa.me/+6285372603143">
            <Image
              src={Whatsapp}
              alt="Whatsapp Image"
              width={40}
              height={40}
              className="filter grayscale-80"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
