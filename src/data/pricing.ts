export const pricingTiers = [
  {
    title: 'Jedna přednáška',
    meta: '60–90 minut · jedna třída nebo celý ročník',
    price: '5 000 Kč',
    priceNote: '+ cestovné',
    footnote:
      'Cestovné se počítá z místa bydliště Kristýny (Vyškov). Za každých 50 km nad rámec 50 km je cestovné 500 Kč.',
  },
  {
    title: 'Dvě přednášky v jeden den',
    meta: 'Dvě třídy nebo ročníky · jedno cestování',
    price: '8 500 Kč',
    priceNote: '+ cestovné',
    footnote: 'Sleva 1 500 Kč pro školu, která objedná dvě přednášky najednou v jeden den.',
    featured: true,
  },
  {
    title: 'Workshop',
    meta: 'Delší blok · hlubší práce s tématem ve skupině nebo třídě',
    price: '15 000 Kč',
    priceNote: '+ cestovné',
    footnote:
      'Rozsah a délku domluvíme podle školy. Cestovné se počítá stejně jako u přednášek z Vyškova.',
  },
] as const
