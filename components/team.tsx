import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Member01 from '@/public/images/team-01.jpg'
import Member02 from '@/public/images/team-02.jpg'
import Member03 from '@/public/images/team-03.jpg'
import Member04 from '@/public/images/team-04.jpg'
import Member05 from '@/public/images/team-05.jpg'
import Member06 from '@/public/images/team-06.jpg'
import Member07 from '@/public/images/team-07.jpg'
import Member08 from '@/public/images/team-08.jpg'

interface Item {
  img: StaticImageData
  name: string
  role: string
}

export default function Team() {

  const items: Item[] = [
    {
      img: Member01,
      name: 'Alex',
      role: 'Co-Founder & CEO',
    },
    {
      img: Member02,
      name: 'Chris',
      role: 'Co-Founder & CEO',
    },
    {
      img: Member03,
      name: 'Sarah',
      role: 'Head of Marketing',
    },
    {
      img: Member04,
      name: 'Marco',
      role: 'Lead Developer',
    },
    {
      img: Member05,
      name: 'Jens',
      role: 'Community Manager',
    },
    {
      img: Member06,
      name: 'Emma',
      role: 'UX/UI Designer',
    },
    {
      img: Member07,
      name: 'Michael',
      role: 'Financial Advisor',
    },
    {
      img: Member08,
      name: 'Victor',
      role: 'Blockchain Developer',
    },
  ]

  return (
    <section className="relative">
      {/* Radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-start md:text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">We are a happy, small team</h2>
            <p className="text-lg text-slate-400">Together, we are committed to creating a genuine, rewarding gaming experience that stands out in the crypto world. Join us on our journey to make Pyjama Coin a global success and a truly scam-free project that everyone can enjoy.</p>
          </div>
          {/* Team members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
            {items.map((item, index) => ( 
              <div key={index} className="relative flex items-center justify-between py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 focus-within:before:opacity-10 before:rounded-xl before:transition-opacity">
                <div className="flex items-center space-x-4">
                  <Image className="shrink-0 rounded-full	 " src={item.img} width="48" height="48" alt={item.name} />
                  <div className="grow">
                    <div className="font-bold text-slate-100 mb-0.5">{item.name}</div>
                    <div className="text-sm text-purple-500 font-medium">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}