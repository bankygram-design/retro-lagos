import { visit } from '@/lib/content'
import { MapPin, Navigation, Phone } from 'lucide-react'
import { CtaLink } from './cta-link'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function VisitSection() {
  return (
    <section id="visit" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading kicker="Find Us" title="Visit Retro" />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <div className="flex flex-col divide-y divide-border/60">
            <Reveal className="flex items-start gap-5 pb-8">
              <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Address
                </h3>
                <address className="mt-3 not-italic">
                  {visit.address.map((line) => (
                    <span key={line} className="block text-lg leading-relaxed">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </Reveal>

            <Reveal className="flex items-start gap-5 py-8">
              <span className="mt-1 size-5 shrink-0 text-center text-gold" aria-hidden>
                ☾
              </span>
              <div className="w-full">
                <h3 className="font-sans text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Opening Hours
                </h3>
                <dl className="mt-3 flex flex-col gap-2">
                  {visit.hours.map((h) => (
                    <div key={h.day} className="flex items-baseline justify-between gap-4">
                      <dt className="text-lg">{h.day}</dt>
                      <span className="mx-3 h-px flex-1 translate-y-[-3px] bg-border/60" aria-hidden />
                      <dd className="font-sans text-sm text-muted-foreground">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal className="flex items-start gap-5 py-8">
              <Phone className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Phone
                </h3>
                <a
                  href={visit.phoneHref}
                  className="mt-3 block text-lg transition-colors hover:text-gold"
                >
                  {visit.phone}
                </a>
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-3 pt-8 sm:flex-row">
              <CtaLink href={visit.directionsHref} variant="solid" target="_blank" rel="noopener noreferrer">
                <Navigation className="size-4" aria-hidden />
                Get Directions
              </CtaLink>
              <CtaLink href={visit.phoneHref} variant="outline">
                <Phone className="size-4" aria-hidden />
                Call Now
              </CtaLink>
            </Reveal>
          </div>

          {/* Map placeholder */}
          <Reveal delay={120}>
            <div className="grain relative aspect-square overflow-hidden border border-border/60 lg:aspect-auto lg:h-full">
              <img
                src="/images/gallery-5.png"
                alt="The RETRO LAGOS rooftop overlooking the Lagos skyline"
                className="h-full w-full object-cover opacity-70"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/40" aria-hidden />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <MapPin className="size-8 text-gold" aria-hidden />
                <p className="font-sans text-xs uppercase tracking-[0.24em] text-foreground/90">
                  Google Maps placeholder
                </p>
                <p className="max-w-xs px-6 text-sm text-muted-foreground">
                  Embed the live map here once the venue location is confirmed.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
