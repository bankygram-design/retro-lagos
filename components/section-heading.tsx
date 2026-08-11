import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  kicker?: string
  title: ReactNode
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ kicker, title, className, align = 'left' }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {kicker && (
        <Reveal>
          <span className="kicker inline-flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold/60" aria-hidden />
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="display text-balance text-5xl font-semibold sm:text-6xl md:text-7xl">
          {title}
        </h2>
      </Reveal>
    </div>
  )
}
