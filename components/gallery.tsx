import { galleryImages } from '@/lib/content'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import { CtaLink } from './cta-link'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Gallery() {
  return (
    <section id="gallery" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading kicker="The Archive" title="Inside Retro" />
          <Reveal delay={120} className="hidden md:block">
            <CtaLink href="#gallery" variant="ghost">
              View Gallery
              <ArrowUpRight className="size-4" aria-hidden />
            </CtaLink>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[42vw] grid-cols-2 gap-3 sm:auto-rows-[22vw] sm:gap-4 md:grid-cols-4 lg:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 90}
              className={cn('grain group relative overflow-hidden', img.span)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out will-change-transform group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-background/25 opacity-100 transition-opacity duration-700 group-hover:opacity-0"
                aria-hidden
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <CtaLink href="#gallery" variant="outline">
            View Gallery
            <ArrowUpRight className="size-4" aria-hidden />
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
