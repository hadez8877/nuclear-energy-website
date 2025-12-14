"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { siteContent } from "@/lib/content"

gsap.registerPlugin(ScrollTrigger)

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".how-title", {
        scrollTrigger: {
          trigger: ".how-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".how-step", {
        scrollTrigger: {
          trigger: ".how-steps",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })

      // Animate the connecting line
      gsap.from(".step-line", {
        scrollTrigger: {
          trigger: ".how-steps",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="como-funciona" className="py-24 md:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <span className="text-sm text-muted-foreground">{siteContent.howItWorks.badge}</span>
          </div>

          <h2 className="how-title text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            <span className="text-foreground">{siteContent.howItWorks.title}</span>{" "}
            <span className="text-primary">{siteContent.howItWorks.titleHighlight}</span>
          </h2>
        </div>

        <div className="how-steps relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="step-line absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {siteContent.howItWorks.steps.map((step, index) => (
              <article key={index} className="how-step relative flex gap-6 md:gap-8">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-10">
                  <span className="text-primary font-bold text-sm md:text-base">{step.number}</span>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
