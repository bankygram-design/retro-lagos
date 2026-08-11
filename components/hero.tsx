'use client'

import { brand } from '@/lib/content'
import { ArrowDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setMounted(true)
    if (reduced.current) return

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const p = Math.min(window.scrollY / window.innerHeight, 1)
        setProgress(p)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const imageScale = 1 + progress * 0.16
  const imageY = progress * 40
  const textY = progress * -60
  const textOpacity = 1 - progress * 1.25

  return (
    <section
      id="top"
      className="grain relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden"
      aria-label="RETRO LAGOS introduction"
    >
      {/* Cinematic full-bleed image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translate3d(0, ${imageY}px, 0) scale(${imageScale})`,
          transition: reduced.current ? undefined : 'transform 120ms linear',
        }}
      >
        <img
          src="/images/hero.png"
          alt="The RETRO LAGOS lounge glowing in champagne light after dark"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>

      {/* Cinematic gradient */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/55 to-background/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-background/70 to-transparent"
        aria-hidden
      />

      {/* Content */}
      <div
        className="relative z-[3] mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 sm:pb-20"
        style={{
          opacity: mounted ? Math.max(textOpacity, 0) : 1,
        }}
      >
        <div style={{ transform: `translateY(${textY}px)` }}>
          <p
            className={`kicker mb-6 text-gold transition-all duration-1000 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Lagos · Luxury Nightlife
          </p>

          <h1 className="display font-semibold text-foreground">
            {brand.heroLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className="block text-[15vw] leading-[0.86] sm:text-[13vw] lg:text-[11rem]"
                  style={{
                    transitionProperty: 'transform, opacity',
                    transitionDuration: '1100ms',
                    transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: `${200 + i * 140}ms`,
                    transform: mounted ? 'translateY(0)' : 'translateY(105%)',
                    opacity: mounted ? 1 : 0,
                    color: i === brand.heroLines.length - 1 ? 'var(--gold)' : undefined,
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div
            className={`mt-10 flex flex-col gap-6 border-t border-border/70 pt-6 transition-all duration-1000 ease-out sm:flex-row sm:items-center sm:justify-between ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="flex flex-wrap gap-x-8 gap-y-2 font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span>{brand.heroMeta.location}</span>
              <span className="hidden sm:inline" aria-hidden>
                /
              </span>
              <span>{brand.heroMeta.hours}</span>
            </div>
            <a
              href="#vibe"
              className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.22em] text-foreground"
            >
              <span>Scroll to enter</span>
              <ArrowDown className="size-4 text-gold transition-transform duration-500 group-hover:translate-y-1 motion-safe:animate-bounce" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
