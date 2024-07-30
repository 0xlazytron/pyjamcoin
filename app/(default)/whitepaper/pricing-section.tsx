import Image from 'next/image'
import Particles from '@/components/particles'
import Illustration from '@/public/images/page-illustration.svg'

export default function PricingSection() {
  return (
    <section className="relative">

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
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
        <div className="pt-32 pb-20 md:pt-40 md:pb-24">

          {/* Section header */}
          <div className="text-left pb-12 md:pb-12 mt-48">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
              PyjamaCoin</div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Whitepaper</h1>
          </div>

          {/* Introduction */}
          <div className="text-left pb-10 md:pb-16">
            <h2 className="h1 bg-clip-text text-3xl text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Introduction</h2>
            <p>Welcome to PyjamaCoin, where the fun of digital pets meets the world of cryptocurrency on the advanced Solana blockchain. Our mission is to create a scam-free, engaging game that allows players to earn real value while enjoying a nostalgic experience reminiscent of Tamagotchi. This whitepaper provides an overview of PyjamaCoin's vision, game mechanics, tokenomics, and a detailed roadmap for our launch and development phases. As we enter the rapidly growing global app gaming market, valued at over $100 billion, PyjamaCoin is positioned to tap into this expansive opportunity, offering a blockchain-based platform that enhances user engagement and monetization.</p>
          </div>

          {/* Vision */}
          <div className="text-left pb-12 md:pb-12">
            <h2 className="h1 bg-clip-text text-3xl text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Vision</h2>
            <p>PyjamaCoin aims to merge the joy of digital pet care with the lucrative opportunities of the crypto world, on a platform that emphasizes genuine, transparent engagement. We are committed to delivering a project that provides real earning potential and continuous development influenced by our community. Players worldwide will help shape the game's future, voting on new features, characters, and pajamas, contributing to an ever-evolving gameplay experience.</p>
          </div>

          {/* Game Mechanics */}
          <div className="text-left pb-12 md:pb-12">
            <h2 className="h1 bg-clip-text text-3xl text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Game Mechanics (How to Earn PyjamaCoins)</h2>
            <p>The primary objective is to keep your digital pet happy by playing, feeding, bathing, and socializing with it. When your pet is happy and wears its pajamas to sleep, it earns PyjamaCoins. The happier the pet, the more coins it earns during sleep.</p>
            <p className="pt-4">There are three happiness levels:</p>
            <ul className="pt-4">
              <li><span className="font-bold">Sad:</span> No coins earned</li>
              <li><span className="font-bold">Okay:</span> Some coins earned</li>
              <li><span className="font-bold">Happy:</span> Maximum coins earned</li>
            </ul>

            <p className="pt-4">To ensure your pet goes to bed happy, players must engage in various activities throughout the day. Actions to Keep Pets Happy:</p>
            <ul className="pt-4">
              <li><span className="font-bold">Feeding:</span> Regular meals to keep your pet satisfied</li>
              <li><span className="font-bold">Bathing:</span> Keeping your pet clean and fresh</li>
              <li><span className="font-bold">Playing:</span> Interactive games to entertain your pet</li>
              <li><span className="font-bold">Walking:</span> Actual walks tracked via step count to keep your pet active</li>
              <li><span className="font-bold">Socializing:</span> Letting your pet interact with friends</li>
            </ul>

            <p className="pt-4 font-bold">Customization Options</p>
            <p>Players can customize their pets by choosing their:</p>
            <ul>
              <li>Gender</li>
              <li>Name</li>
              <li>Type</li>
              <li>Pajamas</li>
            </ul>
            <p className="pt-4">Additional items such as sleep masks, earplugs, and nightlights can be purchased to enhance the pet's sleep quality, leading to more coins earned.</p>
          </div>

          {/* Tokenomics */}
          <div className="text-left pb-12 md:pb-12">
            <h2 className="h1 bg-clip-text text-3xl text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Tokenomics</h2>
            <h3 className="bg-clip-text text-2xl font-bold bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Total Supply</h3>
            <ul>
              <li><span className="font-bold">Max Supply:</span> 1,000,000,000 PyjamaCoins</li>
            </ul>
            <h3 className="bg-clip-text pt-8 text-2xl font-bold bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Distribution</h3>
            <ul>
              <li><span className="font-bold">Presale:</span> 35% (350,000,000 PyjamaCoins)</li>
              <li><span className="font-bold">Gameplay Rewards:</span> 30% (300,000,000 PyjamaCoins)</li>
              <li><span className="font-bold">Development & Team:</span> 20% (200,000,000 PyjamaCoins) - These tokens are subject to a 12-month lock-up post-presale, with 50% released annually.</li>
              <li><span className="font-bold">Marketing & Partnerships:</span> 4% (40,000,000 PyjamaCoins) - Subject to vesting, with staged releases to ensure ongoing support for marketing activities.</li>
              <li><span className="font-bold">Airdrop:</span> 7% (70,000,000 PyjamaCoins)</li>
              <li><span className="font-bold">Exchange Listings:</span> 4% (40,000,000 PyjamaCoins) - Reserved to facilitate listings on major exchanges, ensuring liquidity and accessibility of PyjamaCoins across platforms.</li>
            </ul>
          </div>

          {/* Presale Details */}
          <div className="text-left pb-12 md:pb-12">
            <h2 className="h1 bg-clip-text text-3xl text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Presale Details</h2>
            <p>The presale is structured over three rounds, each lasting 72 hours with a 20% price increase per round:</p>
            <ul>
              <li><span className="font-bold">First Round:</span> Price: 0.007 USDT per coin, Duration: 72 hours, Allocated Tokens: 117,000,000 PyjamaCoins, Hardcap: 6300 SOL</li>
              <li><span className="font-bold">Second Round:</span> Price: 0.0084 USDT per coin, Duration: 72 hours, Allocated Tokens: 100,000,000 PyjamaCoins, Hardcap: 6461.54 SOL</li>
              <li><span className="font-bold">Third Round:</span> Price: 0.01008 USDT per coin, Duration: 72 hours, Allocated Tokens: 85,000,000 PyjamaCoins, Hardcap: 6592.31 SOL</li>
            </ul>
          </div>

          {/* Roadmap */}
          <div className="text-left pb-12 md:pb-12">
            <h2 className="h1 bg-clip-text text-3xl text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Roadmap</h2>
            <h3 className="bg-clip-text pt-8 text-2xl font-bold bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Phase 1: Concept & Development</h3>
            <ul className="py-2">
              <li>Idea inception and team formation</li>
              <li>Initial game design and mechanics planning</li>
              <li>Creation of digital pet assets and animations</li>
            </ul>

            <h3 className="bg-clip-text pt-8 text-2xl font-bold bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Phase 2: Presale & Airdrop</h3>
            <ul className="py-2">
              <li>Launch the presale in three phases</li>
              <li>Implement the airdrop program</li>
              <li>Commence initial marketing and community building</li>
              <li>Listing on CoinMarketCap and CoinGecko</li>
            </ul>

            <h3 className="bg-clip-text pt-8 text-2xl font-bold bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Phase 3: Smart Contract Development and Audit</h3>
            <ul className="py-2">
              <li>Develop and audit the PyjamaCoin smart contract</li>
              <li>Deploy the smart contract on the Solana blockchain</li>
            </ul>

            <h3 className="bg-clip-text pt-8 text-2xl font-bold bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Phase 4: Game Launch and Introduction</h3>
            <ul className="py-2">
              <li>Officially launch the game following the Raydium listing</li>
              <li>Integrate an NFT marketplace for accessories</li>
            </ul>

            <h3 className="bg-clip-text pt-8 text-2xl font-bold bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Phase 5: Growth & Expansion</h3>
            <ul className="py-2">
              <li>Expand through partnerships and community activities</li>
              <li>Continuously update based on community feedback</li>
              <li>Enhance game features and introduce new elements as part of ongoing development efforts</li>
            </ul>
          </div>

          {/* Team */}
          <div className="text-left pb-12 md:pb-12">
            <h2 className="h1 bg-clip-text text-3xl text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Team</h2>
            <p>Our dedicated team ensures the success of PyjamaCoin, led by our CEO and supported by co-founders, head of marketing, lead developer, UX/UI designer, community manager, and content creators. Each member brings a wealth of expertise and a shared commitment to delivering an engaging and rewarding experience:</p>
            <ul>
              <li><span className="font-bold">CEO:</span> Leads the project and oversees all operations.</li>
              <li><span className="font-bold">Co-Founder:</span> Assists in strategic planning and execution.</li>
              <li><span className="font-bold">Head of Marketing:</span> Manages all marketing and promotional activities.</li>
              <li><span className="font-bold">Lead Developer:</span> Oversees the technical development of the game.</li>
              <li><span className="font-bold">UX/UI Designer:</span> Designs user-friendly interfaces and enhances user experience.</li>
              <li><span className="font-bold">Community Manager:</span> Engages with the community and manages social channels.</li>
              <li><span className="font-bold">Content Creator:</span> Produces engaging content and manages communications.</li>
            </ul>
          </div>
          {/* Conclusion */}
          <div className="text-left pb-12 md:pb-12">
            <h2 className="h1 bg-clip-text text-3xl text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Conclusion</h2>
            <p>Join us on this exciting journey to explore the potential of blockchain gaming with PyjamaCoin, merging the nostalgic joy of pet care with the innovative, dynamic world of cryptocurrency. We are committed to transparency, innovation, and community-driven development, ensuring that PyjamaCoin stands out as a leader in the blockchain gaming industry.</p>
          </div>

          {/* Disclaimer */}
          <div className="text-left pb-12 md:pb-12">
            <p className="font-bold">Disclaimer:</p>
            <p>Investing in cryptocurrencies carries risk. Please conduct your own research before investing. For more information, visit our website: <a href="https://pyjama-coin.com">pyjama-coin.com</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
