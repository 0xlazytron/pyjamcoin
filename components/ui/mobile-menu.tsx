'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/pyjama-coin-the-tamagotchi-in-the-crypto-world-p-coin.png'
import { ConnectWallet } from './ConnectWallet'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  // function to close the mobile menu on link click
  const closeMobileMenu = () => {
    setMobileNavOpen(false)
  }

  return (
    <div className="fixed top-0 right-0 md:hidden pt-8 pe-5">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-5 h-5 fill-current text-slate-300 hover:text-white transition duration-150 ease-in-out" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <rect y="2" width="20" height="2" rx="1" />
          <rect y="9" width="20" height="2" rx="1" />
          <rect y="16" width="20" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className={`fixed z-20 top-0 right-0 h-screen w-9/12 sm:w-9/12 overflow-hidden transition-transform duration-300 ease-in-out transform ${mobileNavOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={mobileNavOpen ? { opacity: 1 } : { opacity: 0.8 }}
      >
        <ul className="ps-8 flex flex-col items-start h-full w-full border border-transparent [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] rounded-lg px-4 py-1.5">
          <li>
            <Link className="flex justify-center" href="/" aria-label="PyjamaCoin" onClick={closeMobileMenu}>
              <Image className="max-w-none pt-5 mb-2 ms-12" src={LogoImg} width={150} priority alt="PyjamaCoin Logo" />
            </Link>
          </li>
          <li className="w-full">
            <Link className="flex font-medium text-sm text-end text-slate-300 hover:text-white py-5 w-full" href="/" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="w-full">
            <Link className="flex font-medium text-sm text-slate-300 hover:text-white py-5 w-full" href="/about" onClick={closeMobileMenu}>About us</Link>
          </li>
          <li className="w-full">
            <Link className="flex font-medium text-sm text-slate-300 hover:text-white py-5 w-full" href="/presale" onClick={closeMobileMenu}>Presale</Link>
          </li>
          <li className="w-full">
            <Link className="flex font-medium text-sm text-slate-300 hover:text-white py-5 w-full" href="/whitepaper" onClick={closeMobileMenu}>Whitepaper</Link>
          </li>
          <li className="w-full">
            <Link className="flex font-medium text-sm text-slate-300 hover:text-white py-5 w-full" href="/changelog" onClick={closeMobileMenu}>Changelog</Link>
          </li>



          <li className="flex justify-between">
            <a className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" href="https://x.com/pyjamacoin" aria-label="Twitter" onClick={closeMobileMenu}>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
              </svg>
            </a>

            <a className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out pe-2" href="https://t.me/Pyjamacoin" target='_blank' aria-label="Telegram" onClick={closeMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" x="0px" y="0px" viewBox="0 0 50 50">
                <path className="w-8 h-8 fill-current" d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z">
                </path>
              </svg>
            </a>

            <a className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" href="https://www.instagram.com/pyjamacoin2024?igsh=dG5lMG4xOXZxOXB4&utm_source=qr" aria-label="Instagram" onClick={closeMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" x="0px" y="0px" viewBox="0 0 50 50">
                <path className="w-8 h-8 fill-current" d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z">
                </path>
              </svg>
            </a>
          </li>
          <div className=''>
            <div className=" text-slate-200 hover:text-white btn bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out" >
              <ConnectWallet text="Connect Wallet" />
            </div>
          </div>
        </ul>

      </nav>
    </div>
  )
}
