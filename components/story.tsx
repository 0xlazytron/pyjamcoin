import Image from 'next/image'
import Team from '@/public/images/team.jpg'

export default function Story() {
return (
<section className="relative">

  {/* Blurred shape */}
  <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10"
    aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
      <defs>
        <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
          <stop offset="0%" stopColor="#A855F7"></stop>
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
    </svg>
  </div>

  <div className="px-4 sm:px-6">
    <div className="max-w-5xl mx-auto">
      <div className="pb-12 md:pb-20">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2
            className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
            Our Story (so far)</h2>
        </div>

        <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
          <figure className=" me-0 md:me-12 m-auto">
            <Image className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} height={280} alt="Team" />
          </figure>
          <div className="max-w-[548px] mx-auto">
            <div className="text-slate-400 space-y-6">
              <p>The game was born out of an idea by two friends who were tired of all the scam projects in the market.
              They wanted to create a real game that anyone in the world could use to earn money. Over the past two
              years, this idea has evolved, and now we are a team of seven dedicated members, all pursuing the same
              mission: to finally bring an amazing and scam-free project to the market.</p>

              <p>Our journey began with the desire to create something genuine and valuable in the crypto space. Unlike
              other projects that make empty promises, we are committed to delivering a real, playable game that offers
              tangible rewards. We have spent countless hours refining our concept and designing an engaging experience
              that combines the fun of digital pets with the earning potential of cryptocurrency.</p>

             <p> We already have the complete concept and the necessary designs in place. Our game features unique elements
              such as customizable pets, daily care tasks, and emotion-based earnings. Players can engage in various
              activities to keep their pets happy and earn Pyjama Coins, making the game both entertaining and
              rewarding.</p>
              
              </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
)
}