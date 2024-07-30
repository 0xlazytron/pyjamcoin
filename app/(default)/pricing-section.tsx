import Pricing from '@/components/pricing'

export default function PricingSection() {
  return (
    <section className="relative">
      {/* Radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-4xl mx-auto text-start md:text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3 pt-10 md:pt-0">PyjamaCoin Tokenomics</div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Building a Thriving Ecosystem</h2>
            <p className="text-lg text-slate-400">Pyjama Coin Tokenomics are designed to ensure a fair and rewarding experience for all players. By distributing tokens across gameplay rewards, development, and community partnerships, we create a vibrant and engaged ecosystem that supports continuous growth and innovation. Additionally, our burn mechanism ensures that 0.05% of each transaction amount is permanently removed from circulation, making Pyjama Coin a deflationary asset.</p>
            <p className="pt-8 text-lg md:text-2xl md:justify-center  flex bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3 font-extrabold"><span className="font-medium">Max Supply&nbsp;:&nbsp;</span> One Trillion PyjamaCoins</p>
          </div>
          <Pricing />
        </div>
      </div>

    </section>
  )
}
