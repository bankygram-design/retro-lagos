import { brand } from '@/lib/content'
import { Phone } from 'lucide-react'
import { CtaLink } from './cta-link'
import { Reveal } from './reveal'

export function ReservationCTA() {
  return (
    <section id="reserve" className="grain relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/reserve.png"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-background/78"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/40 to-background"
        aria-hidden
      />

      <div className="relative z-[2] mx-auto flex max-w-[1400px] flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal>
          <span className="kicker text-gold">Reservations</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-6 text-balance text-6xl font-semibold leading-[0.9] sm:text-8xl lg:text-[9rem]">
            Your table
            <br />
            is waiting.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Weekend tables are limited and reserved on request. Secure yours and
            let the night take care of the rest.
          </p>
        </Reveal>
        <Reveal delay={220} className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <CtaLink href={brand.reserveHref} variant="solid" className="w-full sm:w-auto">
            Reserve a Table
          </CtaLink>
          <CtaLink href={brand.phoneHref} variant="outline" className="w-full sm:w-auto">
            <Phone className="size-4" aria-hidden />
            Call Now
          </CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
