"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { siteContent } from "@/lib/content"
import { Zap, Clock, Leaf } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  zap: Zap,
  clock: Clock,
  leaf: Leaf,
}

export function WhatIsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".what-title", {
        scrollTrigger: {
          trigger: ".what-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".what-desc", {
        scrollTrigger: {
          trigger: ".what-desc",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".what-feature", {
        scrollTrigger: {
          trigger: ".what-features",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="que-es" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <span className="text-sm text-muted-foreground">{siteContent.whatIs.badge}</span>
          </div>

          <h2 className="what-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">{siteContent.whatIs.title}</span>{" "}
            <span className="text-primary">{siteContent.whatIs.titleHighlight}</span>
          </h2>

          <p className="what-desc text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {siteContent.whatIs.description}
          </p>
        </div>

        <div className="what-features grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteContent.whatIs.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <article
                key={index}
                className="what-feature p-8 rounded-2xl border border-border bg-card/30 hover:bg-card/50 transition-all duration-300 hover:border-primary/50 glow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
