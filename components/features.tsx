'use client'

import { useState } from 'react'

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import Particles from './particles'
import Illustration from '@/public/images/glow-top.svg'

export default function Features() {

const [tab, setTab] = useState<number>(1)

  return (
  <section>
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

      {/* Illustration */}
      <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
        aria-hidden="true">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
          <Image src={Illustration} className="max-w-none" width={1404} height={658} alt="Features Illustration" />
        </div>
      </div>

      <div className="pt-16 pb-12 md:pt-40 md:pb-20">

        <div>

          {/* Section content */}
          <div
            className="max-w-xl mx-auto md:max-w-none flex  md:flex-row md:space-x-8 lg:space-x-16 flex-col-reverse xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">

            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-start" data-aos="fade-down">
              {/* Content #1 */}
              <div>
                <div
                  className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                  Welcome to the World of Pyjama Coin!</div>
              </div>
              <h2
                className="h3 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                What is PyjamaCoin?</h2>
              <p className="text-lg text-slate-400 mb-8">Pyjama Coin combines the nostalgia of digital pets with the innovative world of cryptocurrency. Care for your virtual pet, earn rewards, and join a vibrant community of crypto enthusiasts and gamers. Dive into the cozy and playful universe of Pyjama Coin and start your adventure today!</p>
              <div className="my-14 md:my-2 max-w md:max-w-xs max-md:mx-auto space-y-2">
                <button className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25
                  w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !==1
                  ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25' }`} onClick={()=>
                  setTab(1)}>
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16">
                    <path
                      d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span>How It Works</span>
                </button>
                <button className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25
                  w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !==2
                  ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25' }`} onClick={()=>
                  setTab(2)}>
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16">
                    <path d="M14.6.085 8 2.885 1.4.085c-.5-.2-1.4-.1-1.4.9v11c0 .4.2.8.6.9l7 3c.3.1.5.1.8 0l7-3c.4-.2.6-.5.6-.9v-11c0-1-.9-1.1-1.4-.9ZM2 2.485l5 2.1v8.8l-5-2.1v-8.8Zm12 8.8-5 2.1v-8.7l5-2.1v8.7Z"></path></svg>
                  <span>Why Choose Pyjama Coin?</span>
                </button>
                <button className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25
                  w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !==3
                  ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25' }`} onClick={()=>
                  setTab(3)}>
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16">
                    <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z"></path>
                     </svg>
                  <span>Join Our Community</span>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <div className="relative py-24 -mt-12">

                {/* Particles animation */}
                <Particles className="absolute inset-0 -z-10" quantity={8} staticity={30} />

                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48 flex justify-center items-center">
                    {/* Halo effect */}
                    <svg
                      className="absolute inset-0 opacity-25 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
                      width="480" height="480" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
                          <stop offset="0%" stopColor="#A855F7" />
                          <stop offset="76.382%" stopColor="#FAF5FF" />
                          <stop offset="100%" stopColor="#6366F1" />
                        </linearGradient>
                      </defs>
                      <g fillRule="evenodd">
                        <path className="pulse" fill="url(#pulse-a)" fillRule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                        <path className="pulse pulse-1" fill="url(#pulse-a)" fillRule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                        <path className="pulse pulse-2" fill="url(#pulse-a)" fillRule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                      </g>
                    </svg>
                    {/* Grid */}
                    <div
                      className="absolute inset-0 left-1/2 top-1/2 opacity-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
                      <div className="h-[200%] animate-endless">
                        <div
                          className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                        <div
                          className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]" />
                        <div
                          className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                        <div
                          className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]" />
                      </div>
                    </div>
                    {/* Icons */}
                    <Transition show={tab===1} className="absolute"
                      enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                      enterFrom="opacity-0 -rotate-[0deg]" enterTo="opacity-100 rotate-0"
                      leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                      leaveFrom="opacity-100 rotate-0" leaveTo="opacity-0 rotate-[60deg]">
                      <div className="relative w-96 h-24">
                        {/* Animation im Hintergrund mit 30% Deckkraft */}
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-5 rounded-2xl">
                        </div>

                        {/* Text über der Animation mit 100% Deckkraft */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <h2 className="text-xl font-extrabold mb-2">How Pyjama Coin Enhances Your Gaming Experience</h2>
                          <span className="text-white">Pyjama Coin is a unique digital currency designed to enhance your gaming experience. Players earn Pyjama Coins by taking care of their digital pets, completing daily tasks, and participating in community events. These coins can be used for in-game purchases, upgrades, and exclusive items. The more you play, the more you earn!</span>
                        </div>
                      </div>
                    </Transition>
                    <Transition show={tab===2} className="absolute"
                      enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                      enterFrom="opacity-0 -rotate-[60deg]" enterTo="opacity-100 rotate-0"
                      leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                      leaveFrom="opacity-100 rotate-0" leaveTo="opacity-0 rotate-[60deg]">
                      <div className="relative w-96 h-24">
                        {/* Animation im Hintergrund mit 30% Deckkraft */}
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-5 rounded-2xl">
                        </div>

                        {/* Text über der Animation mit 100% Deckkraft */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <h2 className="text-xl font-extrabold mb-2">Why Pyjama Coin is More Than Just a Game</h2>
                          <span className="text-white">Pyjama Coin stands out by merging the fun of gaming with the potential of cryptocurrency. Unlike traditional games, where rewards have no real-world value, Pyjama Coin allows you to earn a digital currency that can be traded, staked, or used within the game. It’s not just a game – it’s a rewarding experience that grows with you.</span>
                        </div>
                      </div>
                    </Transition>
                    <Transition show={tab===3} className="absolute"
                      enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                      enterFrom="opacity-0 -rotate-[60deg]" enterTo="opacity-100 rotate-0"
                      leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                      leaveFrom="opacity-100 rotate-0" leaveTo="opacity-0 rotate-[60deg]">
                      <div className="relative w-96 h-24">
                        {/* Animation im Hintergrund mit 30% Deckkraft */}
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-5 rounded-2xl">
                        </div>

                        {/* Text über der Animation mit 100% Deckkraft */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <h2 className="text-xl font-extrabold mb-2">Join the Vibrant Pyjama Coin Community</h2>
                          <span className="text-white">Becoming a part of the Pyjama Coin community means more than just playing a game. It means joining a global network of gamers and crypto enthusiasts who share your passion. We regularly update our community through our website's changelog and involve our members in shaping the app. Participate in events, share your experiences, and help decide how the app evolves. Our community is vibrant, supportive, and always growing.</span>
                        </div>
                      </div>
                    </Transition>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
  )
  }