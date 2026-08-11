import { menuItems } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'
import { CtaLink } from './cta-link'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function MenuPreview() {
  return (
    <section id="menu" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading kicker="Kitchen & Bar" title="After dark, served." align="center" />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {menuItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <figure className="group flex flex-col">
                <div className="grain relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} — ${item.tag} at RETRO LAGOS`}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-40"
                    aria-hidden
                  />
                  <span className="absolute left-4 top-4 font-sans text-[0.65rem] uppercase tracking-[0.24em] text-gold">
                    {item.tag}
                  </span>
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-border/60 pt-4">
                  <h3 className="display text-2xl font-medium">{item.name}</h3>
                </figcaption>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {item.note}
                </p>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <CtaLink href="#menu" variant="outline">
            View Full Menu
            <ArrowUpRight className="size-4" aria-hidden />
          </CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
