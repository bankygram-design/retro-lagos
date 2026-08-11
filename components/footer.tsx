import { brand, navLinks, socials, visit } from '@/lib/content'
import { Reveal } from './reveal'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        {/* Final brand statement */}
        <Reveal>
          <p className="display max-w-4xl text-balance text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
            The night belongs to those who <span className="text-gold">show up.</span>
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-border/60 pt-14 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <a href="#top" className="display text-xl font-semibold tracking-[0.12em]">
              {brand.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {brand.heroMeta.location}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="kicker mb-1 text-muted-foreground">Explore</span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit font-sans text-sm text-foreground/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav aria-label="Social" className="flex flex-col gap-3">
            <span className="kicker mb-1 text-muted-foreground">Follow</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-fit font-sans text-sm text-foreground/80 transition-colors hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="kicker mb-1 text-muted-foreground">Contact</span>
            <a
              href={visit.phoneHref}
              className="w-fit font-sans text-sm text-foreground/80 transition-colors hover:text-gold"
            >
              {visit.phone}
            </a>
            <span className="font-sans text-sm text-muted-foreground">
              {visit.address[1]}
            </span>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © {year} {brand.name}
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Lagos · After Dark
          </p>
        </div>
      </div>
    </footer>
  )
}
