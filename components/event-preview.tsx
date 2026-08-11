import { events } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function EventPreview() {
  return (
    <section id="events" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading kicker="What's On" title="Upcoming nights" />
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-right">
              A rotating programme of DJs, live sets and signature nights. Tables
              go quickly — reserve ahead.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col sm:mt-20">
          {events.map((event) => (
            <Reveal key={event.id}>
              <a
                href="#reserve"
                className="group grid grid-cols-1 gap-5 border-t border-border/60 py-7 transition-colors duration-500 hover:border-gold/50 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-10 md:py-9"
              >
                {/* Date */}
                <div className="flex items-end gap-3 md:w-32 md:flex-col md:items-start md:gap-1">
                  <span className="display text-5xl font-medium leading-none text-foreground transition-colors duration-500 group-hover:text-gold md:text-6xl">
                    {event.day}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    {event.month} · {event.weekday}
                  </span>
                </div>

                {/* Detail + image */}
                <div className="flex items-center gap-5">
                  <div className="grain relative hidden aspect-square w-24 shrink-0 overflow-hidden sm:block lg:w-28">
                    <img
                      src={event.image}
                      alt={`${event.name} at RETRO LAGOS`}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="display text-2xl font-medium sm:text-3xl">
                      {event.name}
                    </h3>
                    <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-gold/90">
                      {event.performer}
                    </p>
                    <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                      {event.copy}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-500 group-hover:text-gold">
                  Reserve
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
