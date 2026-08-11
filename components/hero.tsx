'use client'

import { brand } from '@/lib/content'
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

  // Restrained, cinematic parallax — no cheesy zoom
  const imageScale = 1 + progress * 0.08
  const imageY = progress * 70
  const textY = progress * -36
  const textOpacity = 1 - progress * 1.15

  return (
    <section
      id="top"
      className="grain vignette relative flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden"
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

      {/* Cinematic dark treatment for legibility */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/50 to-background/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-background/75 via-transparent to-transparent"
        aria-hidden
      />

      {/* Top editorial metadata rail */}
      <div
        className={`relative z-[3] mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 pt-24 transition-all duration-1000 ease-out sm:px-8 sm:pt-28 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
        }`}
        style={{ transitionDelay: '500ms' }}
      >
        <span className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-foreground/70">
          {brand.heroMeta.region}
        </span>
        <span className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-foreground/70">
          {brand.heroMeta.est}
        </span>
      </div>

      {/* Right-edge vertical label */}
      <div
        className={`pointer-events-none absolute right-3 top-1/2 z-[3] hidden -translate-y-1/2 transition-all duration-1000 ease-out md:block ${
          mounted ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <span className="vertical-rl font-sans text-[0.68rem] uppercase tracking-[0.42em] text-foreground/55">
          {brand.heroMeta.tagline}
        </span>
      </div>

      {/* Headline anchored to the baseline */}
      <div
        className="relative z-[3] mx-auto mt-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8 sm:pb-16"
        style={{ opacity: mounted ? Math.max(textOpacity, 0) : 1 }}
      >
        <div style={{ transform: `translateY(${textY}px)` }}>
          <div
            className={`mb-6 flex items-center gap-4 transition-all duration-1000 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="h-px w-12 bg-gold" aria-hidden />
            <p className="kicker text-gold">Lagos After Dark</p>
          </div>

          <h1 className="display font-semibold text-foreground">
            {brand.heroLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className="block text-[16vw] leading-[0.84] sm:text-[13vw] lg:text-[11.5rem]"
                  style={{
                    transitionProperty: 'transform, opacity',
                    transitionDuration: '1100ms',
                    transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: `${300 + i * 130}ms`,
                    transform: mounted ? 'translateY(0)' : 'translateY(108%)',
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
            className={`mt-9 flex flex-col gap-5 border-t border-border/70 pt-6 transition-all duration-1000 ease-out sm:flex-row sm:items-center sm:justify-between ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '760ms' }}
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
              className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-foreground"
            >
              <span>Scroll to enter</span>
              <span className="relative flex h-8 w-px overflow-hidden bg-border" aria-hidden>
                <span className="absolute inset-x-0 top-0 h-3 bg-gold transition-transform duration-700 ease-out group-hover:translate-y-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
