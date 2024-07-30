import Image from 'next/image'
import Highlighter, { HighlighterItem } from './highlighter'

import FeatureImg04 from '@/public/images/feature-image-04.png'

export default function Features03() {
  return (
    <section className="relative">

      {/* Blurred shape */}
      <div className="absolute top-0 -translate-y-1/4 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#bs3-a)" fillRule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
        </svg>
      </div>

      <div id="#our-app" className="max-w-6xl mx-auto px-4 sm:px-6 flex-col-reverse" >
        <div className="pt-16 pb-12 md:pt-12 md:pb-20 border-b border-slate-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-start md:text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Real Rewards. No Empty Promises.</h2>
            <p className="text-lg text-slate-400 mb-8">Unlike others who promise private jets and cyber trucks, we focus on what truly matters. At PyjamaCoin, we provide real, attainable rewards and a fun, engaging experience. Our team is dedicated to delivering on our promises and ensuring you enjoy every moment.</p>
            <p className="flex justify-start md:justify-center mt-4 pb-2 text-base md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 font-medium">Our app is expected to be released in 2025 Q1</p>
            <p className="justify-start md:justify-center w-100 md:w-2/3 mx-auto pb-8 text-base bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200">You can follow the development of our app at regular intervals in our <a className="border-b-2 border-purple-400 hover:text-purple-400" href="/changelog">changelog</a>. We will report on this regularly.</p>
          </div>

          <div className="max-w-3xl mx-auto -mt-10 mb-10 md:mb-0">
            <div data-aos="fade-down">
              <Highlighter className="group">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Radial gradient */}
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px]" />
                    </div>
                    <Image src={FeatureImg04} width={768} height={400} alt="Feature 04" />
                  </div>
                </HighlighterItem>
              </Highlighter>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}