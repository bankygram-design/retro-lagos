import { Reveal } from './reveal'

export function Intro() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Statement — spans and sits high */}
        <div className="lg:col-span-7 lg:pt-6">
          <Reveal>
            <span className="kicker text-gold">Est. Lagos</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 text-balance text-5xl font-semibold sm:text-7xl lg:text-[5.5rem]">
              More than
              <br />a night out.
            </h2>
          </Reveal>
        </div>

        {/* Copy — offset lower and to the right */}
        <div className="flex flex-col justify-end lg:col-span-5 lg:pb-4">
          <Reveal delay={160}>
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              RETRO LAGOS is where the city&apos;s nights are written. A luxury lounge
              built for music, movement and the people who make Lagos glow after
              dark — equal parts sound system, supper club and social ritual.
            </p>
          </Reveal>
        </div>

        {/* Full-bleed editorial image with strong whitespace above */}
        <div className="lg:col-span-12 lg:mt-10">
          <Reveal>
            <figure className="grain relative aspect-[16/10] w-full overflow-hidden sm:aspect-[21/9]">
              <img
                src="/images/intro.png"
                alt="A guest in elegant attire raising a champagne coupe inside RETRO LAGOS"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                aria-hidden
              />
              <figcaption className="absolute bottom-5 left-5 font-sans text-[0.7rem] uppercase tracking-[0.28em] text-foreground/90 sm:bottom-7 sm:left-7">
                The room, after midnight
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
