import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/pyjama-coin-the-tamagotchi-in-the-crypto-world-logo.png'

export default function Logo() {
  return (

    <div className="">
      <Link className="flex flex-row  gap-5 " href="/" aria-label="PyjamaCoin">
        <Image className="max-w-none pt-56 mb-8" src={LogoImg} width={250} priority alt="PyjamaCoin Logo" />

      </Link>


    </div>
  )
}