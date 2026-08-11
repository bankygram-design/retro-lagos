import { EventPreview } from '@/components/event-preview'
import { ExperienceSection } from '@/components/experience-section'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { MenuPreview } from '@/components/menu-preview'
import { Navbar } from '@/components/navbar'
import { ReservationCTA } from '@/components/reservation-cta'
import { VisitSection } from '@/components/visit-section'

export default function Page() {
  return (
    <>
      <a
        href="#vibe"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:uppercase focus:tracking-widest focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <ExperienceSection />
        <EventPreview />
        <MenuPreview />
        <Gallery />
        <ReservationCTA />
        <VisitSection />
      </main>
      <Footer />
    </>
  )
}
