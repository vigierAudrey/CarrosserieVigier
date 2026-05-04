export const site = {
  name: 'Carrosserie Carcanaise',
  shortName: 'Carrosserie Carcanaise',
  description:
    'Carrosserie familiale à Carcans. Réparations, peinture, vitrage et restauration soignée, avec un accompagnement transparent.',
  url: 'https://www.carrosserie-carcanaise.fr',
  locale: 'fr_FR',
  email: 'carrosserievigierfreres@gmail.com',
  phone: '05 17 36 14 51',
  mobile: '07 78 55 33 00',
  telHref: 'tel:+33517361451',
  mobileHref: 'tel:+33778553300',
  address: {
    streetAddress: '68 route de Bordeaux',
    postalCode: '33121',
    addressLocality: 'Carcans',
    addressCountry: 'FR',
  },
  mapsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=68+route+de+Bordeaux%2C+33121+Carcans%2C+France',
  areaServed: ['Carcans', 'Médoc Atlantique', 'Lacanau', 'Hourtin', 'Maubuisson'],
  openingHours: {
    label: 'Lundi au vendredi : 08:00-12:00 et 14:00-18:00. Samedi et dimanche : fermé.',
    specification: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '12:00',
      },
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '14:00',
        closes: '18:00',
      },
    ],
  },
  geo: {
    latitude: 45.083,
    longitude: -1.203,
  },
  socials: {
    facebook: '',
    instagram: '',
  },
};

export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/prestations', label: 'Prestations' },
  { href: '/assurance', label: 'Assurance' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions légales' },
];
