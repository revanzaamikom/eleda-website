import { site } from '../data/site';

export type Lang = 'id' | 'en';

const id = {
  htmlLang: 'id',
  path: '/id/',
  otherPath: '/',
  meta: {
    title: 'Eleda | Desain Pakaian, Karakter, dan Logo',
    description:
      'Komisi desain pakaian, karakter, dan logo. Lihat karya, baca cara order, lalu chat WhatsApp.',
    ogAlt: 'Eleda, desain pakaian, karakter, dan logo.',
  },
  nav: {
    label: 'Navigasi utama',
    work: 'Karya',
    about: 'Tentang',
    process: 'Cara order',
    faq: 'Pertanyaan',
    whatsapp: 'WhatsApp',
    langLabel: 'Ganti bahasa',
    home: 'Eleda, kembali ke atas',
  },
  skip: 'Lewati ke konten',
  hero: {
    statusOpen: 'Terbuka untuk komisi',
    statusClosed: 'Slot penuh',
    title: 'Desain dari idemu.',
    sub: 'Ceritakan kebutuhanmu, Eleda siap memenuhi kebutuhan desainmu. Dari kaos dan karakter sampai logo, tiap ide dibaca dulu sebelum dikerjakan.',
    primary: 'Ceritakan kebutuhanmu',
    secondary: 'Lihat karya',
    alt: 'Dua mockup kaos dengan grafis hitam putih di atas latar gelap.',
  },
  statement:
    'Eleda mengerjakan desain pakaian, ilustrasi karakter, dan logo. Semua brief dan kesepakatan lewat WhatsApp.',
  categories: {
    clothing: {
      id: 'Desain pakaian',
      en: 'Clothing design',
      description: {
        id: 'Ceritakan kebutuhanmu, mau kaos, hoodie, atau seragam. Eleda bantu tentukan grafis, warna, dan penempatan supaya desainnya enak dilihat dan siap diproduksi.',
        en: 'Tell us what you need, whether it is a T-shirt, hoodie, or uniform. Eleda helps shape the graphic, color, and placement so the design works on fabric and is ready for production.',
      },
      waSuffix: {
        id: 'Saya tertarik dengan desain pakaian.',
        en: 'I am interested in clothing design.',
      },
    },
    character: {
      id: 'Karakter',
      en: 'Character drawing',
      description: {
        id: 'Ceritakan karakter yang kamu bayangkan, ekspresinya, pose, dan suasana yang kamu mau. Eleda bantu wujudkan dari sketsa pertama sampai warna terakhir.',
        en: 'Describe the character you have in mind, the expression, pose, and mood you want. Eleda brings it from the first sketch to the final color.',
      },
      waSuffix: {
        id: 'Saya tertarik dengan gambar karakter.',
        en: 'I am interested in character drawing.',
      },
    },
    logo: {
      id: 'Logo',
      en: 'Logo design',
      description: {
        id: 'Ceritakan usaha, komunitas, atau proyekmu. Eleda bantu temukan bentuk yang sederhana, mudah dikenali, dan sesuai dengan kebutuhan pemakaianmu.',
        en: 'Tell us about your business, community, or project. Eleda helps find a mark that stays simple, easy to recognize, and fit for how you will use it.',
      },
      waSuffix: {
        id: 'Saya tertarik dengan desain logo.',
        en: 'I am interested in logo design.',
      },
    },
  },
  work: {
    title: 'Karya',
    pending: 'Karya menyusul',
    slot: 'Slot',
    count: { id: 'karya', en: 'works' },
  },
  client: {
    title: 'Karya klien',
    sub: 'Komisi yang sudah selesai, ditampilkan dengan izin klien.',
    label: 'Commission',
  },
  process: {
    title: 'Cara order',
    sub: 'Tiga langkah, semuanya lewat WhatsApp.',
    steps: [
      {
        title: 'Kirim brief',
        body: 'Tulis jenis desain, jumlah item, deadline, dan referensi. Semua lewat WhatsApp.',
      },
      {
        title: 'Setujui penawaran',
        body: 'Eleda kirim harga, estimasi, dan jumlah revisi. DP mengunci slot.',
      },
      {
        title: 'Sketsa, lalu final',
        body: 'Sketsa disetujui dulu, lanjut ke warna, lalu file final dikirim.',
      },
    ],
  },
  faq: {
    title: 'Pertanyaan',
  },
  about: {
    title: 'Tentang Eleda',
    body: 'Eleda siap memenuhi kebutuhan desainmu, satu per satu. Ceritakan yang kamu butuhkan, lalu biarkan Eleda merangkai bentuk, warna, dan detailnya.',
  },
  artists: {
    title: 'Our Artist',
    sub: 'Ilustrator dan desainer di balik Eleda.',
    handles: [
      { label: '@wrmdewa', url: 'https://www.instagram.com/wrmdewa/' },
      { label: '@kytk._', url: 'https://www.instagram.com/kytk._/' },
      { label: '@suryawisesa_', url: 'https://www.instagram.com/suryawisesa_/' },
    ],
  },
  cta: {
    title: 'Punya ide untuk desain?',
    sub: 'Kirim brief lewat WhatsApp. Balasan berisi ketersediaan slot, harga, dan estimasi.',
    button: 'Ceritakan kebutuhanmu',
    alt: 'Dua mockup kaos dengan grafis hitam putih di atas latar gelap.',
  },
  footer: {
    line: 'Eleda. Komisi desain.',
    whatsapp: 'WhatsApp',
  },
  wa: {
    message:
      'Halo Eleda, saya mau tanya komisi.\nJenis desain:\nJumlah item:\nDeadline:\nReferensi:',
    openLabel: 'Buka WhatsApp',
  },
  notFound: {
    title: 'Halaman tidak ada.',
    body: 'Tautan yang kamu buka tidak tersedia. Kembali ke beranda untuk melihat karya dan cara order.',
    home: 'Kembali ke beranda',
    altTitle: 'This page does not exist.',
  },
};

const en: typeof id = {
  htmlLang: 'en',
  path: '/',
  otherPath: '/id/',
  meta: {
    title: 'Eleda | Clothing, Character, and Logo Design',
    description:
      'Clothing, character, and logo design commissions. See recent work, read how it works, then message on WhatsApp.',
    ogAlt: 'Eleda, clothing, character, and logo design.',
  },
  nav: {
    label: 'Main navigation',
    work: 'Work',
    about: 'About',
    process: 'How it works',
    faq: 'Questions',
    whatsapp: 'WhatsApp',
    langLabel: 'Change language',
    home: 'Eleda, back to top',
  },
  skip: 'Skip to content',
  hero: {
    statusOpen: 'Open for commissions',
    statusClosed: 'Slots full',
    title: 'Design from your idea.',
    sub: 'Describe what you need, and Eleda shapes the design around it. From clothing and characters to logos, every idea is read before work begins.',
    primary: 'Tell us your needs',
    secondary: 'See recent work',
    alt: 'Two T-shirt mockups with black and white graphics on a dark background.',
  },
  statement:
    'Eleda works on clothing design, character illustration, and logos. All briefs and agreements happen on WhatsApp.',
  categories: {
    clothing: {
      id: 'Desain pakaian',
      en: 'Clothing design',
      description: {
        id: 'Ceritakan kebutuhanmu, mau kaos, hoodie, atau seragam. Eleda bantu tentukan grafis, warna, dan penempatan supaya desainnya enak dilihat dan siap diproduksi.',
        en: 'Tell us what you need, whether it is a T-shirt, hoodie, or uniform. Eleda helps shape the graphic, color, and placement so the design works on fabric and is ready for production.',
      },
      waSuffix: {
        id: 'Saya tertarik dengan desain pakaian.',
        en: 'I am interested in clothing design.',
      },
    },
    character: {
      id: 'Karakter',
      en: 'Character drawing',
      description: {
        id: 'Ceritakan karakter yang kamu bayangkan, ekspresinya, pose, dan suasana yang kamu mau. Eleda bantu wujudkan dari sketsa pertama sampai warna terakhir.',
        en: 'Describe the character you have in mind, the expression, pose, and mood you want. Eleda brings it from the first sketch to the final color.',
      },
      waSuffix: {
        id: 'Saya tertarik dengan gambar karakter.',
        en: 'I am interested in character drawing.',
      },
    },
    logo: {
      id: 'Logo',
      en: 'Logo design',
      description: {
        id: 'Ceritakan usaha, komunitas, atau proyekmu. Eleda bantu temukan bentuk yang sederhana, mudah dikenali, dan sesuai dengan kebutuhan pemakaianmu.',
        en: 'Tell us about your business, community, or project. Eleda helps find a mark that stays simple, easy to recognize, and fit for how you will use it.',
      },
      waSuffix: {
        id: 'Saya tertarik dengan desain logo.',
        en: 'I am interested in logo design.',
      },
    },
  },
  work: {
    title: 'Work',
    pending: 'Artwork pending',
    slot: 'Slot',
    count: { id: 'karya', en: 'works' },
  },
  client: {
    title: 'Client work',
    sub: 'Finished commissions, shown with permission.',
    label: 'Commission',
  },
  process: {
    title: 'How it works',
    sub: 'Three steps, all through WhatsApp.',
    steps: [
      {
        title: 'Send a brief',
        body: 'Write the design type, item count, deadline, and references. All through WhatsApp.',
      },
      {
        title: 'Approve the quote',
        body: 'Eleda sends the price, timeline, and revision count. The deposit locks the slot.',
      },
      {
        title: 'Sketch, then final',
        body: 'Approve the sketch first, then color, then the final files are sent.',
      },
    ],
  },
  faq: {
    title: 'Questions',
  },
  about: {
    title: 'About Eleda',
    body: 'Eleda is ready to meet your design needs, one project at a time. Tell us what you need, then let Eleda shape the form, color, and details.',
  },
  artists: {
    title: 'Our Artist',
    sub: 'The illustrators and designers behind Eleda.',
    handles: [
      { label: '@wrmdewa', url: 'https://www.instagram.com/wrmdewa/' },
      { label: '@kytk._', url: 'https://www.instagram.com/kytk._/' },
      { label: '@suryawisesa_', url: 'https://www.instagram.com/suryawisesa_/' },
    ],
  },
  cta: {
    title: 'Have a design idea?',
    sub: 'Send a brief on WhatsApp. The reply covers availability, price, and timeline.',
    button: 'Tell us your needs',
    alt: 'Two T-shirt mockups with black and white graphics on a dark background.',
  },
  footer: {
    line: 'Eleda. Design commissions.',
    whatsapp: 'WhatsApp',
  },
  wa: {
    message:
      'Hi Eleda, I would like to ask about a commission.\nDesign type:\nItems:\nDeadline:\nReferences:',
    openLabel: 'Open WhatsApp',
  },
  notFound: {
    title: 'This page does not exist.',
    body: 'The link you opened is not available. Go back home to see the work and how ordering works.',
    home: 'Back to home',
    altTitle: 'Halaman tidak ada.',
  },
};

export const ui = { id, en };

export function waLink(lang: Lang, category?: keyof typeof ui.id.categories): string {
  const base = ui[lang].wa.message;
  const suffix = category ? `\n${ui[lang].categories[category].waSuffix[lang]}` : '';
  const text = base + suffix;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
