import { cn } from '@/lib/utils'
import type { AnchorHTMLAttributes } from 'react'

type Variant = 'solid' | 'outline' | 'ghost'

type CtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
}

const base =
  'group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-sans text-xs uppercase tracking-[0.22em] font-medium transition-all duration-500 ease-out disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  solid:
    'bg-gold text-background px-8 py-4 hover:bg-foreground hover:tracking-[0.3em]',
  outline:
    'border border-border text-foreground px-8 py-4 hover:border-gold hover:text-gold hover:tracking-[0.3em]',
  ghost:
    'text-muted-foreground px-1 py-1 hover:text-gold',
}

export function CtaLink({ variant = 'solid', className, children, ...props }: CtaLinkProps) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  )
}
