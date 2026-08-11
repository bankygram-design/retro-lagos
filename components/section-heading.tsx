import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  kicker?: string
  /** small editorial marker, e.g. "(02)" */
  index?: string
  title: ReactNode
  className?: string
  align?: 'left' | 'center'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizes: Record<NonNullable<SectionHeadingProps['size']>, string> = {
  sm: 'text-3xl sm:text-4xl',
  md: 'text-4xl sm:text-5xl md:text-6xl',
  lg: 'text-5xl sm:text-6xl md:text-7xl',
  xl: 'text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]',
}

export function SectionHeading({
  kicker,
  index,
  title,
  className,
  align = 'left',
  size = 'lg',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {(kicker || index) && (
        <Reveal>
          <span
            className={cn(
              'kicker inline-flex items-center gap-3 text-gold',
              align === 'center' && 'justify-center',
            )}
          >
            <span className="h-px w-8 bg-gold/60" aria-hidden />
            {kicker}
            {index && <span className="text-muted-foreground">{index}</span>}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className={cn('display text-balance font-semibold', sizes[size])}>{title}</h2>
      </Reveal>
    </div>
  )
}
