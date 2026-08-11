import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bodoni_Moda, Geist } from 'next/font/google'
import './globals.css'

const display = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const sans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RETRO LAGOS — Lagos After Dark',
  description:
    'RETRO LAGOS is a premium nightlife destination — luxury lounge, music, cocktails, food and unforgettable nights in the heart of Lagos.',
  generator: 'v0.app',
  openGraph: {
    title: 'RETRO LAGOS — Lagos After Dark',
    description:
      'A premium Lagos nightlife brand. Music, cocktails, food and unforgettable nights.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0a09',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
