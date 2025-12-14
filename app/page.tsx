import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhatIsSection } from "@/components/what-is-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { DisadvantagesSection } from "@/components/disadvantages-section"
import { FutureSection } from "@/components/future-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhatIsSection />
      <HowItWorksSection />
      <AdvantagesSection />
      <DisadvantagesSection />
      <FutureSection />
      <Footer />
    </main>
  )
}
