'use client'

import { brand, navLinks } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Phone } from 'lucide-react'
import { useEffect } from 'react'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  activeId: string
}

export function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-40 flex flex-col bg-background lg:hidden',
        'transition-[opacity,visibility] duration-500 ease-out',
        open ? 'visible opacity-100' : 'invisible opacity-0',
      )}
    >
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
      <nav className="relative flex flex-1 flex-col justify-center gap-2 px-6 pt-24">
        {navLinks.map((link, i) => {
          const isActive = activeId === link.href.slice(1)
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              style={{
                transitionDelay: open ? `${120 + i * 60}ms` : '0ms',
              }}
              className={cn(
                'display block border-b border-border/60 py-4 text-5xl font-medium transition-all duration-700 ease-out sm:text-6xl',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                isActive ? 'text-gold' : 'text-foreground',
              )}
            >
              <span className="mr-3 align-super font-sans text-xs tracking-widest text-muted-foreground">
                0{i + 1}
              </span>
              {link.label}
            </a>
          )
        })}
      </nav>

      <div className="relative flex flex-col gap-3 px-6 pb-12">
        <a
          href={brand.reserveHref}
          onClick={onClose}
          className="flex items-center justify-center bg-gold px-8 py-5 font-sans text-sm uppercase tracking-[0.24em] text-background"
        >
          Reserve
        </a>
        <a
          href={brand.phoneHref}
          className="flex items-center justify-center gap-2 border border-border px-8 py-5 font-sans text-sm uppercase tracking-[0.24em] text-foreground"
        >
          <Phone className="size-4" aria-hidden />
          Call Now
        </a>
      </div>
    </div>
  )
}
