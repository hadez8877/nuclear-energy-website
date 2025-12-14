"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { siteContent } from "@/lib/content"
import { AlertTriangle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function DisadvantagesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dis-title", {
        scrollTrigger: {
          trigger: ".dis-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".dis-card", {
        scrollTrigger: {
          trigger: ".dis-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="desventajas" className="py-24 md:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <AlertTriangle className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">{siteContent.disadvantages.badge}</span>
          </div>

          <h2 className="dis-title text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            <span className="text-foreground">{siteContent.disadvantages.title}</span>{" "}
            <span className="text-accent">{siteContent.disadvantages.titleHighlight}</span>
          </h2>
        </div>

        <div className="dis-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {siteContent.disadvantages.items.map((item, index) => (
            <article key={index} className="dis-card p-6 rounded-2xl border border-border bg-card/30">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
