'use client'

import { useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <div className="relative">
      {/* Blurred shape */}
      <div className="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#bs5-a)" fillRule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
        </svg>
      </div>
      {/* Content */}
      

      <div className="flex flex-col md:flex-row">
        <div className="px-6 justify-end pt-6 bg-slate-700/20 rounded-2xl mb-12">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Presale</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">%</span><span className="text-3xl font-bold text-slate-50"> 35</span>
            </div>
            <div className="text-slate-500">35% of the total supply (325 million Pyjama Coins) is allocated for the presale. Unsold tokens will be burned, and early investors receive a 15% bonus.</div>
          </div>
        </div>
        <div className="px-6 pt-6 justify-end border-purple-500 border-2 bg-slate-700/20 rounded-2xl mb-12">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Community</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">%</span><span className="text-3xl font-bold text-slate-50"> 10</span>
            </div>
            <div className="text-slate-500">10% of the total supply is dedicated to community building, marketing efforts, and strategic partnerships. This fosters growth, engagement, and expansion of the game's ecosystem.</div>
          </div>
        </div>
        <div className="px-6 pt-6 justify-end bg-slate-700/20 rounded-2xl mb-12">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Gameplay Rewards</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">%</span><span className="text-3xl font-bold text-slate-50"> 25</span>
            </div>
            <div className="text-slate-500">25% of the total supply is allocated to reward players for in-game activities and achievements, encouraging active participation and engagement.</div>
          </div>
        </div>

        <div className="px-6 justify-end pt-6 bg-slate-700/20 rounded-2xl mb-12">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Airdrop Program</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">%</span><span className="text-3xl font-bold text-slate-50"> 10</span>
            </div>
            <div className="text-slate-500">10% of the tokens are allocated for airdrops to reward early adopters and active community members. This boosts initial engagement and loyalty</div>
          </div>
        </div>
        
        {/* Team price */}
        <div className="px-6 justify-end pt-6 bg-slate-700/20 rounded-2xl mb-12">
          <div className="grow pb-4 mb-4 border-b border-slate-800">
            <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">Dev & Team</div>
            <div className="mb-1">
              <span className="text-lg font-medium text-slate-500">%</span><span className="text-3xl font-bold text-slate-50"> 20</span>
            </div>
            <div className="text-slate-500">These tokens are locked for 12 months post-presale, with 50% released annually to protect the community and price.</div>
          </div>
        </div>

        
        
        
      </div>
    </div>
  )
}
