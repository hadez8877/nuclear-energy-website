"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { siteContent } from "@/lib/content"

gsap.registerPlugin(ScrollTrigger)

export function AdvantagesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".adv-title", {
        scrollTrigger: {
          trigger: ".adv-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".adv-card", {
        scrollTrigger: {
          trigger: ".adv-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })

      // Animate stats counter effect
      gsap.from(".adv-stat", {
        scrollTrigger: {
          trigger: ".adv-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="ventajas" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <span className="text-sm text-muted-foreground">{siteContent.advantages.badge}</span>
          </div>

          <h2 className="adv-title text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            <span className="text-foreground">{siteContent.advantages.title}</span>{" "}
            <span className="text-primary">{siteContent.advantages.titleHighlight}</span>
          </h2>
        </div>

        <div className="adv-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteContent.advantages.items.map((item, index) => (
            <article
              key={index}
              className="adv-card p-8 rounded-2xl border border-border bg-card/30 hover:bg-card/50 transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <div className="adv-stat text-right flex-shrink-0">
                  <div className="text-3xl font-bold text-primary">{item.stat}</div>
                  <div className="text-xs text-muted-foreground">{item.statLabel}</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
