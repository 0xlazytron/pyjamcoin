export const metadata = {
  title: 'Pricing - PyjamaCoin | Our Whitepaper',
  description: 'Learn all about PyjamaCoin and the idea behind it in our whitepaper. Immerse yourself in the world of cryptocurrencies and discover how PyjamaCoin is revolutionizing the industry. ',
}

import PricingSection from './pricing-section'
import Cta from '@/components/cta'

export default function Pricing() {
  return (
    <>
      <PricingSection />
      <Cta />
    </>
  )
}
