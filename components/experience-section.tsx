import { experiences } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function ExperienceSection() {
  return (
    <section id="vibe" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          kicker="The Experience"
          title={
            <>
              Four ways
              <br />
              to feel the night
            </>
          }
        />
      </div>

      <div className="mt-16 flex flex-col sm:mt-24">
        {experiences.map((exp, i) => {
          const flip = i % 2 === 1
          return (
            <Reveal key={exp.index}>
              <article
                className={cn(
                  'group grid grid-cols-1 items-center gap-6 border-t border-border/60 py-8 md:grid-cols-2 md:gap-12 md:py-12',
                  'mx-auto max-w-[1400px] px-5 sm:px-8',
                )}
              >
                {/* Image */}
                <div className={cn('order-1', flip ? 'md:order-2' : 'md:order-1')}>
                  <div className="grain relative aspect-[4/3] overflow-hidden md:aspect-[16/11]">
                    <img
                      src={exp.image}
                      alt={`${exp.title} at RETRO LAGOS`}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out will-change-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-background/20 transition-opacity duration-700 group-hover:bg-background/0"
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={cn(
                    'order-2 flex flex-col',
                    flip ? 'md:order-1 md:pr-8' : 'md:order-2 md:pl-8',
                  )}
                >
                  <span className="display text-2xl text-gold/70">{exp.index}</span>
                  <h3 className="display mt-3 text-4xl font-medium transition-colors duration-500 group-hover:text-gold sm:text-5xl md:text-6xl">
                    {exp.title}
                  </h3>
                  <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    {exp.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
