import Link from 'next/link'
import Logo from './logo'
import a from './a.svg'
import MobileMenu from './mobile-menu'
import { ConnectWallet } from './ConnectWallet'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center items-center h-16 md:h-20 pt-14 md:pt-0">
          {/* Site branding */}
          <div className=''>
            <Logo />

          </div>
        </div>

        <div className="flex justify-center items-center pt-48 h-16 md:h-20">
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow pt-10">

            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/">Home</Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/about">About us</Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/presale">Presale</Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/whitepaper">Whitepaper</Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/changelog">Changelog</Link>
              </li>
              <ConnectWallet text='Connect Wallet' />
            </ul>
          </nav>



          <MobileMenu />

        </div>
      </div>
    </header>
  )
}