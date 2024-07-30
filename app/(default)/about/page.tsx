export const metadata = {
  title: 'About - PyjamaCoin | Learn more about our mission and values',
  description: 'Find out who we are and what drives us. Discover our history, values and commitment to PyjamaCoin.',
}

import Hero from '@/components/hero-about'
import Story from '@/components/story'
import Team from '@/components/team'
import Cta from '@/components/cta'

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <Team />
      <Cta />
    </>
  )
}
