'use client'

import { brand, navLinks } from '@/lib/content'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { MobileMenu } from './mobile-menu'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out',
          scrolled || open
            ? 'border-b border-border bg-background/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:h-20 sm:px-8">
          <a
            href="#top"
            className="display text-lg font-semibold tracking-[0.12em] text-foreground sm:text-xl"
            aria-label={`${brand.name} — home`}
          >
            {brand.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'group relative font-sans text-xs uppercase tracking-[0.22em] transition-colors duration-300',
                    isActive ? 'text-gold' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ease-out',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full',
                    )}
                    aria-hidden
                  />
                </a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href={brand.phoneHref}
              className="font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Call
            </a>
            <span className="h-4 w-px bg-border" aria-hidden />
            <a
              href={brand.reserveHref}
              className="group relative inline-flex items-center gap-2.5 font-sans text-xs uppercase tracking-[0.22em] text-foreground"
            >
              <span className="size-1.5 rounded-full bg-gold transition-transform duration-500 group-hover:scale-150" aria-hidden />
              Reserve
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative z-50 flex size-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={cn(
                'h-px w-6 bg-foreground transition-all duration-300',
                open && 'translate-y-[3.5px] rotate-45',
              )}
            />
            <span
              className={cn(
                'h-px w-6 bg-foreground transition-all duration-300',
                open && '-translate-y-[3.5px] -rotate-45',
              )}
            />
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} activeId={activeId} />
    </>
  )
}
