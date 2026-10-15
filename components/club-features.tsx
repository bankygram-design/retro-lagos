import { clubFeatures } from '@/lib/content'
import { Building2, Disc3, Music2, Wine } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const icons = [Music2, Disc3, Wine, Building2]

export function ClubFeatures() {
  return (
    <section id="club" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading kicker="Inside Retro" title="Made for the night" />

        <div className="mt-14 grid grid-cols-1 gap-px border border-border/60 bg-border/60 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {clubFeatures.map((feature, index) => {
            const Icon = icons[index]

            return (
              <Reveal key={feature.index}>
                <article className="group flex h-full min-h-64 flex-col bg-background p-7 transition-colors duration-500 hover:bg-surface sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="display text-2xl text-gold/70">{feature.index}</span>
                    <Icon className="size-5 text-gold" aria-hidden />
                  </div>
                  <h3 className="display mt-10 text-2xl font-medium transition-colors group-hover:text-gold sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {feature.copy}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
