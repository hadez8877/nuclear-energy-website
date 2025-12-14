"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { siteContent } from "@/lib/content"
import { Rocket, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function FutureSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".future-title", {
        scrollTrigger: {
          trigger: ".future-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".future-desc", {
        scrollTrigger: {
          trigger: ".future-desc",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".future-innovation", {
        scrollTrigger: {
          trigger: ".future-innovations",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      })

      gsap.from(".future-stat", {
        scrollTrigger: {
          trigger: ".future-stats",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="futuro" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{siteContent.future.badge}</span>
          </div>

          <h2 className="future-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">{siteContent.future.title}</span>{" "}
            <span className="text-primary">{siteContent.future.titleHighlight}</span>
          </h2>

          <p className="future-desc text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {siteContent.future.description}
          </p>
        </div>

        <div className="future-innovations grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {siteContent.future.innovations.map((innovation, index) => (
            <article
              key={index}
              className="future-innovation p-8 rounded-2xl border border-border bg-card/30 hover:bg-card/50 transition-all duration-300 hover:border-primary/50 glow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{innovation.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{innovation.description}</p>
            </article>
          ))}
        </div>

        <div className="future-stats grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {siteContent.future.stats.map((stat, index) => (
            <div key={index} className="future-stat text-center p-6 rounded-xl border border-primary/20 bg-primary/5">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
