/**
 * RETRO LAGOS content layer.
 * Presentation is kept separate from content so these values can later be
 * replaced by a CMS / database. All copy here is initial creative placeholder
 * content and NOT verified business data.
 */

export const brand = {
  name: 'RETRO LAGOS',
  short: 'RETRO',
  // Placeholder creative hero copy — safe to edit later.
  heroLines: ['THE NIGHT', 'BELONGS', 'TO LAGOS.'],
  heroMeta: {
    region: 'Lagos / Nigeria',
    tagline: 'Nightlife • Music • Culture',
    est: 'Est. 2026',
    location: "2nd Junction Governor's Road, Ikotun Lagos",
  },
  // Placeholder contact details — replace with real values later.
  phone: '+234 000 000 0000',
  phoneHref: 'tel:+2340000000000',
  reserveHref: '#reserve',
}

export const navLinks = [
  { label: 'Vibe', href: '#vibe' },
  { label: 'Club', href: '#club' },
  { label: 'Menu', href: '#menu' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
]

export type Experience = {
  index: string
  title: string
  copy: string
  image: string
}

export const experiences: Experience[] = [
  {
    index: '01',
    title: 'The Vibe',
    copy: 'A room that moves with you — velvet shadows, warm light and a crowd that knows how to dress for the night.',
    image: '/images/vibe.png',
  },
  {
    index: '02',
    title: 'The Sound',
    copy: 'Resident selectors and guest DJs curating afrobeats, amapiano and soul until the early hours.',
    image: '/images/sound.png',
  },
  {
    index: '03',
    title: 'The Taste',
    copy: 'A kitchen and bar built for the night — bold West African flavours and signature cocktails.',
    image: '/images/taste.png',
  },
  {
    index: '04',
    title: 'The Night',
    copy: 'Rooftop air, city lights and the kind of evenings people talk about for weeks.',
    image: '/images/night.png',
  },
]

export const clubFeatures = [
  {
    index: '01',
    title: 'DJs & Live Sets',
    copy: 'Resident selectors, guest DJs and live performances bring Afrobeats, amapiano and soul to the room.',
  },
  {
    index: '02',
    title: 'The Dancefloor',
    copy: 'A space to move, catch the rhythm and stay in the heart of the night.',
  },
  {
    index: '03',
    title: 'Bottle Service',
    copy: 'Make it a night to remember with premium bottle service and a table of your own.',
  },
  {
    index: '04',
    title: 'Rooftop Lounge',
    copy: 'Step above the city for rooftop air, Lagos lights and a slower moment between sets.',
  },
]

export type EventItem = {
  id: string
  day: string
  month: string
  weekday: string
  name: string
  performer: string
  category: string
  copy: string
  image: string
}

export const events: EventItem[] = [
  {
    id: 'e1',
    day: '14',
    month: 'MAR',
    weekday: 'Friday',
    name: 'Golden Hour Sessions',
    performer: 'DJ Layo · Live Percussion',
    category: 'Afrobeats · Amapiano',
    copy: 'An afrobeats and amapiano takeover with live drums under champagne light — our biggest night of the month.',
    image: '/images/event-1.png',
  },
  {
    id: 'e2',
    day: '22',
    month: 'MAR',
    weekday: 'Saturday',
    name: 'Bottle & Sparkle',
    performer: 'Resident Selectors',
    category: 'House · Open Format',
    copy: 'Our signature Saturday — premium bottle service, house anthems and full-room energy.',
    image: '/images/event-2.png',
  },
  {
    id: 'e3',
    day: '30',
    month: 'MAR',
    weekday: 'Sunday',
    name: 'Soul & Smoke',
    performer: 'Live Band · Guest Vocalist',
    category: 'Live Soul · Jazz',
    copy: 'A slower, sultry night of live soul, jazz and low light to close the week.',
    image: '/images/event-3.png',
  },
]

export type MenuItem = {
  name: string
  note: string
  tag: string
  image: string
}

export const menuItems: MenuItem[] = [
  {
    name: 'Smoked Suya Skewers',
    note: 'Placeholder item · replace later',
    tag: 'Small Plate',
    image: '/images/menu-dish.png',
  },
  {
    name: 'The Lagos Negroni',
    note: 'Placeholder item · replace later',
    tag: 'Signature Cocktail',
    image: '/images/menu-cocktail.png',
  },
  {
    name: 'Gold Leaf Chocolate',
    note: 'Placeholder item · replace later',
    tag: 'After Dark Dessert',
    image: '/images/menu-dessert.png',
  },
]

export type GalleryImage = {
  src: string
  alt: string
  span: string
}

export const galleryImages: GalleryImage[] = [
  { src: '/images/gallery-2.png', alt: 'Interior of the RETRO LAGOS lounge with velvet booths and brass detailing', span: 'col-span-2 row-span-2' },
  { src: '/images/gallery-1.png', alt: 'Guests laughing over drinks inside RETRO LAGOS', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-4.png', alt: 'A guest dancing on the RETRO LAGOS dancefloor', span: 'col-span-1 row-span-2' },
  { src: '/images/gallery-3.png', alt: 'A bartender preparing a cocktail behind the RETRO LAGOS bar', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-6.png', alt: 'Champagne glasses and sparklers at RETRO LAGOS', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-5.png', alt: 'The RETRO LAGOS rooftop lounge with the city skyline at night', span: 'col-span-2 row-span-1' },
]

export const visit = {
  address: ['RETRO LAGOS', "2nd Junction Governor's Road", 'Ikotun Lagos'],
  phone: brand.phone,
  phoneHref: brand.phoneHref,
  directionsHref:
    "https://maps.google.com/?q=2nd+Junction+Governor's+Road,+Ikotun+Lagos",
}

export const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Facebook', href: '#' },
]
