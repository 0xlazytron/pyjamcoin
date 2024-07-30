'use client'; // Fügt das Pragma hinzu, um die Komponente als Client-Komponente zu markieren

import Image from 'next/image';
import Particles from '@/components/particles';
import Illustration from '@/public/images/page-illustration.svg';
import Illustration02 from '@/public/images/page-illustration-02.svg';
import IntegrationsCarousel from '@/components/integrations-carousel';
import ProgressBarContainer from '@/components/ProgressContainer';
import CopyableNumberCard from '@/components/CopyableNumberCard';
import Countdown from '@/components/Countdown';

export default function IntegrationsSection() {
  const targetDate = '2024-07-20T23:59:59';

  return (
    <section className="relative">

      {/* Illustration 02 */}
      <div
        className="md:block absolute left-1/2 -translate-x-1/2 bottom-0 -mb-16 blur-2xl opacity-90 pointer-events-none -z-10"
        aria-hidden="true">
        <Image src={Illustration02} className="max-w-none" width={1440} height={427} alt="Page Illustration 02" />
      </div>

      {/* Opacity layer */}
      <div className="absolute inset-0 bg-slate-900 opacity-60 -z-10" aria-hidden="true"></div>

      {/* Radial gradient */}
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
        aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10"
        aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-18 pt-44">


            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
              Exclusive Opportunity
            </div>

            <h1 className="h1 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Join the PyjamaCoin Presale
            </h1>
            <div className="max-w-3xl mx-auto mb-6 w-11/12 md:w-5/12 m-auto">
              <p className="text-lg text-gray-400">The world first krypto - PlayToEarn - app on iOS and Android. Ready to join the PyjamaCoin revolution? </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex justify-center -mt-8 pb-8 text-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 font-extrabold">
            <span className="font-medium">Let's start the pyjama party 🎉 </span>
          </div>

          {/* Countdown disable 
          <div className="mb-32 w-80 md:w-2/3 m-auto">
            <Countdown targetDate={targetDate} />
          </div>
*/}
          {/* Prozent Angabe */}
          <div className="mb-24 w-80 md:w-2/3 m-auto">
            <ProgressBarContainer />
          </div>
          <CopyableNumberCard />
          <h2 className="text-lg inline-flex font-medium  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 ps-4">
            How to Participate in the PyjamaCoin Presale Using Phantom Wallet
          </h2>
          <div className="pb-5 ps-4 text-sm text-gray-400">Below, you'll find a step-by-step guide on how to purchase PyjamaCoins during our presale. Follow these instructions to become a part of our exciting community.</div>


          <IntegrationsCarousel />
        </div>
      </div>
    </section>
  )
}
