"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { siteContent } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          titleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.4",
        )
        .from(
          descRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          ".hero-stat",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.4",
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 grid-bg">
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">{siteContent.hero.badge}</span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance"
        >
          <span className="text-foreground">{siteContent.hero.title}</span>
          <br />
          <span className="text-primary text-glow">{siteContent.hero.titleHighlight}</span>
        </h1>

        <p
          ref={descRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
        >
          {siteContent.hero.description}
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            {siteContent.hero.cta.primary}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary bg-transparent"
          >
            {siteContent.hero.cta.secondary}
          </Button>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {siteContent.hero.stats.map((stat, index) => (
            <div key={index} className="hero-stat text-center p-6 rounded-xl border border-border bg-card/30">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
