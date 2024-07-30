import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/pyjama-coin-the-tamagotchi-in-the-crypto-world-logo.png'

export default function Footer() {
return (
<footer>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

    {/* Blocks */}
    <div className="grid sm:grid-cols-1 gap-8 py-8 md:py-12">

      {/* 1st block */}
      <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
        <div className="h-full flex flex-col sm:flex-col lg:flex-col justify-center">
          <div className="mb-4 sm:mb-0">
            <div className="mb-4">
              <Link className="inline-flex" href="/" aria-label="PyjamaCoin">
              <Image className="max-w-none pt-2 mb-8" src={LogoImg} width={150} priority alt="PyjamaCoin Logo" />
              </Link>
            </div>
            <div className="text-sm text-slate-300 -mt-8 mb-2"><a href="https://pyjama-coin.com">© Pyjama-coin.com</a> <span
                className="text-slate-500">-</span> All
              rights reserved.</div>
          </div>
          <div className="text-sm text-slate-300 mb-2"><Link href="mailto:info@pyjama-coin.com?subject=Request&amp;body=Hella%20PyjamaCoin%20Team," target="_blank">Support</Link></div>
          
          {/* Social links */}
          <ul className="flex items-center justify-center">
            <li>
              <a className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                href="https://x.com/pyjamacoin" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li>
              <a className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                href="https://t.me/Pyjamacoin" target='_blank' aria-label="Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" x="0px" y="0px" viewBox="0 0 50 50">
                  <path className="w-8 h-8 fill-current"
                    d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z">
                  </path>
                </svg>

              </a>
            </li>
            <li className="ml-2">
              <a className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                href="https://www.instagram.com/pyjamacoin2024?igsh=dG5lMG4xOXZxOXB4&utm_source=qr" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" x="0px" y="0px" viewBox="0 0 50 50">
                  <path className="w-8 h-8 fill-current"
                    d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z">
                  </path>
                </svg>
              </a>
            </li>
          </ul>
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-1 justify-center mt-5">
            <h2 className="text-xs text-slate-400 font-medium mb-1">Risk Disclaimer</h2>
            <p className="text-slate-400 transition duration-150 ease-in-out text-xs">Investing in cryptocurrencies, including Pyjama Coin, involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. The value of cryptocurrencies can be highly volatile, and past performance is not indicative of future results. We strongly recommend consulting with a financial advisor before making any investment decisions. By using our platform, you acknowledge that you understand and accept these risks.</p>
          </div>
        </div>
      </div>

      {/* 2nd block */}


    </div>

  </div>
</footer>
)
}