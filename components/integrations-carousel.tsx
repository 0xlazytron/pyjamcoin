'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import IntegrationImg02 from '@/public/images/integrations-02.svg'
import IntegrationImg03 from '@/public/images/integrations-03.svg'
import IntegrationImg04 from '@/public/images/integrations-04.svg'
import IntegrationImg05 from '@/public/images/integrations-05.svg'
import Star from '@/public/images/star.svg'


// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Navigation])

export default function IntegrationsCarousel() {

const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false)

  useEffect(() => {
  const carousel = new Swiper('.stellar-carousel', {
  breakpoints: {
  320: {
  slidesPerView: 1
  },
  640: {
  slidesPerView: 2
  },
  1024: {
  slidesPerView: 3
  }
  },
  grabCursor: true,
  loop: false,
  centeredSlides: false,
  initialSlide: 0,
  spaceBetween: 24,
  navigation: {
  nextEl: '.carousel-next',
  prevEl: '.carousel-prev',
  },
  })
  setSwiperInitialized(true)
  }, [])

  return (
  <>
    <div className="stellar-carousel swiper-container group">
      <div className="swiper-wrapper w-fit">
        <div
          className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
          <div className="flex flex-col p-5 h-full">
            <div className="flex items-center mb-3">
              <h2
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0">
                <span className="text-teal-500">Step 1:</span> Download and Set Up Phantom Wallet</h2>
            </div>
            <div className="grow mb-4">
              <div className="text-sm text-slate-400">
                <ul>
                  <li>1. Visit the <a href="https://phantom.app/">https://phantom.app/</a></li>
                  <li>2. Click on the "Download" button and choose your preferred platform (Chrome, Firefox, Brave, or
                    Edge)</li>
                  <li>3. Follow the instructions to add the Phantom Wallet extension to your browser</li>
                  <li>4. Open the Phantom Wallet extension and click on "Create New Wallet"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
          <div className="flex flex-col p-5 h-full">
            <div className="flex items-center mb-3">
              <h2
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0">
                <span className="text-teal-500">Step 2:</span> Create Your Wallet</h2>
            </div>
            <div className="grow mb-4">
              <div className="text-sm text-slate-400">
                <ul>
                  <li>1. Follow the prompts to set up your wallet</li>
                  <li>2. Securely store your seed phrase in a safe place</li>
                  <li>3. Never share your seed phrase with anyone</li>
                  <li>4. Your wallet is now ready to use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
          <div className="flex flex-col p-5 h-full">
            <div className="flex items-center mb-3">
              <h2
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0">
                <span className="text-teal-500">Step 3:</span> Fund Your Phantom Wallet</h2>
            </div>
            <div className="grow mb-4">
              <div className="text-sm text-slate-400">
                <ul>
                  <li>1. Click on the "Deposit" button in the Phantom Wallet</li>
                  <li>2. Copy your wallet address</li>
                  <li>3. Use an exchange or another wallet to send Solana (SOL) to your Phantom Wallet address</li>
                  <li>4. Ensure you have enough SOL to participate in the presale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
          <div className="flex flex-col p-5 h-full">
            <div className="flex items-center mb-3">
              <h2
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0">
                <span className="text-teal-500">Step 4:</span> Visit the Presale Page</h2>
            </div>
            <div className="grow mb-4">
              <div className="text-sm text-slate-400">
                <ul>
                  <li>1. Go to the <a href="https://pyjama-coin.com/presale">https://pyjama-coin.com/presale</a></li>
                  <li>2. Find the Presale Wallet address displayed on the page</li>
                  <li>3. Copy the Presale Wallet address</li>
                  <li>4. Ensure you have the correct address before proceeding.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
          <div className="flex flex-col p-5 h-full">
            <div className="flex items-center mb-3">
              <h2
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0">
                <span className="text-teal-500">Step 5:</span> Participate in the Presale</h2>
            </div>
            <div className="grow mb-4">
              <div className="text-sm text-slate-400">
                <ul>
                  <li>Open your Phantom Wallet</li>
                  <li>Click on the "Send" button and paste the Presale Wallet address</li>
                  <li>Enter the amount of Solana (SOL) you wish to send</li>
                  <li>Minimum investment is 0.1 SOL, and the maximum investment per wallet is 200 SOL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
          <div className="flex flex-col p-5 h-full">
            <div className="flex items-center mb-3">
              <h2
                className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0">
                <span className="text-teal-500">Step 6:</span> Confirm and Receive PyjamaCoins</h2>
            </div>
            <div className="grow mb-4">
              <div className="text-sm text-slate-400">
                <ul>
                  <li>Review the transaction details in Phantom Wallet</li>
                  <li>Approve the transaction to complete the purchase</li>
                  <li>Your PyjamaCoins will be sent to your wallet automatically</li>
                  <li>Coins will be sent within 48 hours after the presale ends</li>
                  <li>Please note that amounts below the minimum limit of 0.1 SOL will not be refunded</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* Arrows */}

    <div className="flex py-8 justify-end">
      <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
        <span className="sr-only">Previous</span>
        <svg className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
        </svg>
      </button>
      <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
        <span className="sr-only">Next</span>
        <svg className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
        </svg>
      </button>
    </div>




    <div className="relative">
      {/* Blurred shape */}
      <div
        className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none"
        aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z"
            transform="matrix(1 0 0 -1 -661 1163)" />
        </svg>
      </div>
      {/* Content */}
      <div className="grid md:grid-cols-2 xl:-mx-6 text-sm">
        {/* Pro price (Linke Spalte, 30%) */}
        <div className="px-6 flex flex-col justify-end w-6/10">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div
              className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
              Presale Price (3 Rounds)</div>
          </div>
        </div>
        <div className="px-6 justify-end w-6/10">
          <div className="flex flex-col items-start grow pb-4 mb-4 border-b border-slate-800">
            <span className="text-slate-400">The presale is structured over three rounds, each lasting 72 hours with a
              20% price increase per round:</span>
            <div className="flex items-center mt-2">
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span className="text-slate-400">First Round: Price: 0.007 USDT per coin, Duration: 72 hours, Allocated
                Tokens: 117,000,000 PyjamaCoins, Hardcap: 6300 SOL</span>
            </div>

            <div className="flex items-center mt-2">
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span className="text-slate-400">Second Round: Price: 0.0084 USDT per coin, Duration: 72 hours, Allocated
                Tokens: 100,000,000 PyjamaCoins, Hardcap: 6461.54 SOL</span>
            </div>

            <div className="flex items-center mt-2">
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span className="text-slate-400">Third Round: Price: 0.01008 USDT per coin, Duration: 72 hours, Allocated
                Tokens: 85,000,000 PyjamaCoins, Hardcap: 6592.31 SOL</span>
            </div>

          </div>
          </div>



          <div className="px-6 flex flex-col justify-end w-3/10">
            <div className="grow pb-4 mb-4 border-b border-slate-800">
              <div
                className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
                Listing Price</div>
            </div>
          </div>
          <div className="px-6 flex flex-col justify-end w-6/10">
            <div className="flex items-center grow pb-4 mb-4 border-b border-slate-800">
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span className="text-slate-400">$0.018 per PyjamaCoin</span>
            </div>
          </div>

          <div className="px-6 flex flex-col justify-end w-3/10">
            <div className="grow pb-4 mb-4 border-b border-slate-800">
              <div
                className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
                Presale Duration</div>
            </div>
          </div>
          <div className="px-6 flex flex-col justify-end w-6/10">
            <div className="flex items-center grow pb-4 mb-4 border-b border-slate-800">
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span className="text-slate-400">9 days</span>
            </div>
          </div>

          <div className="px-6 flex flex-col justify-end w-3/10">
            <div className="grow pb-4 mb-4 border-b border-slate-800">
              <div
                className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
                Total Tokens for Presale</div>
            </div>
          </div>
          <div className="px-6 flex flex-col justify-end w-6/10">
            <div className="flex items-center grow pb-4 mb-4 border-b border-slate-800">
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span className="text-slate-400">350 million PyjamaCoins</span>
            </div>
          </div>

          <div className="px-6 flex flex-col justify-end w-3/10">
            <div className="grow pb-4 mb-4 border-b border-slate-800">
              <div
                className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
                Early Investors</div>
            </div>
          </div>
          <div className="px-6 flex flex-col justify-end w-6/10">
            <div className="flex items-center grow pb-4 mb-4 border-b border-slate-800">
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span className="text-slate-400">Receive an additional 10% PyjamaCoins (1 Round)</span>
            </div>
          </div>


          <div className="px-6 flex flex-col justify-end w-3/10">
            <div className="grow pb-4 mb-4 border-b border-slate-800">
              <div
                className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
                Unsold Tokens</div>
            </div>
          </div>
          <div className="px-6 flex flex-col justify-end w-6/10">
            <div className="flex items-center grow pb-4 mb-4 border-b border-slate-800">
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span className="text-slate-400">Will be burned after the presale</span>
            </div>
          </div>

          <div className="px-6 flex flex-col justify-end w-3/10">
            <div className="grow pb-4 mb-4 border-b border-slate-800">
              <div
                className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
                Airdrop</div>
            </div>
          </div>
          <div className="px-6 flex flex-col justify-end w-6/10">
            <div className="flex items-center grow pb-4 mb-4 border-b border-slate-800">
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span className="text-slate-400">Participate in our exclusive airdrop for additional PyjamaCoins</span>
            </div>
          </div>

          <div className="px-6 flex flex-col justify-end w-3/10">
            <div className="grow pb-4 mb-4 border-b border-slate-800">
              <div
                className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
                Deflationary Mechanism</div>
            </div>
          </div>
          <div className="px-6 flex flex-col justify-end w-6/10">
            <div className="flex items-center grow pb-4 mb-4 border-b border-slate-800">
              <svg className="shrink-0 fill-purple-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                  d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
              </svg>
              <span className="text-slate-400">To ensure the value of PyjamaCoin increases over time, a deflationary
                mechanism is in place. 0.01% of each transaction is burned, reducing the total supply and increasing
                scarcity.</span>
            </div>
          </div>
        </div>
      </div>
      



  </>
  )
  }