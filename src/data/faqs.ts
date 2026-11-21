export type FaqItem = {
  id: string;
  question: { id: string; en: string };
  answer: { id: string; en: string };
  confirmed: boolean;
};

export const faqs: FaqItem[] = [
  {
    id: 'availability',
    question: {
      id: 'Apakah slot masih buka?',
      en: 'Are slots still open?',
    },
    answer: {
      id: 'Chat WhatsApp saat kamu butuh slot. Eleda balas dengan ketersediaan, harga, dan estimasi.',
      en: 'Message on WhatsApp when you need a slot. Eleda replies with availability, price, and timeline.',
    },
    confirmed: true,
  },
  {
    id: 'how-to-order',
    question: {
      id: 'Bagaimana cara memesan?',
      en: 'How do I order?',
    },
    answer: {
      id: 'Chat WhatsApp dengan jenis desain, jumlah item, deadline, dan referensi. Dari situ Eleda cek slot dan kirim penawaran.',
      en: 'Message on WhatsApp with the design type, item count, deadline, and references. Eleda checks the schedule and sends a quote.',
    },
    confirmed: true,
  },
  {
    id: 'price-and-time',
    question: {
      id: 'Berapa harga dan berapa lama?',
      en: 'How much does it cost and how long does it take?',
    },
    answer: {
      id: 'Dua-duanya tergantung jenis, tingkat detail, dan antrean. Harga dan estimasi dikirim setelah brief masuk.',
      en: 'Both depend on the type, level of detail, and the queue. The price and timeline come after the brief.',
    },
    confirmed: true,
  },
  {
    id: 'revisions',
    question: {
      id: 'Berapa kali revisi?',
      en: 'How many revisions are included?',
    },
    answer: {
      id: 'Revisi dibagi ke tahap sketsa dan tahap warna. Jumlahnya disepakati sebelum pengerjaan mulai, jadi tidak ada tambahan di tengah jalan.',
      en: 'Revisions are split between the sketch and the color stage. The count is agreed before work starts, so nothing is added halfway through.',
    },
    confirmed: true,
  },
  {
    id: 'commercial-use',
    question: {
      id: 'Apakah hasil bisa dipakai untuk produksi atau komersial?',
      en: 'Can the result be used for production or commercially?',
    },
    answer: {
      id: 'Untuk pakaian, file disiapkan sesuai kebutuhan produksi. Untuk karakter dan logo, pemakaian personal sudah termasuk. Pemakaian komersial disepakati sebelum mulai.',
      en: 'For clothing, files are prepared for production needs. For characters and logos, personal use is included. Commercial use is agreed before work starts.',
    },
    confirmed: true,
  },
  {
    id: 'files',
    question: {
      id: 'File apa yang dikirim?',
      en: 'Which files are delivered?',
    },
    answer: {
      id: 'File final disesuaikan dengan jenisnya. Karakter dan logo dikirim sebagai PNG resolusi tinggi. Desain pakaian dikirim sesuai kebutuhan produksi. File kerja tidak termasuk kecuali disepakati.',
      en: 'Final files depend on the type. Characters and logos are delivered as high resolution PNG files. Clothing design is delivered to match production needs. Working files are not included unless agreed.',
    },
    confirmed: true,
  },
  {
    id: 'privacy',
    question: {
      id: 'Apakah karya saya ditampilkan di sini?',
      en: 'Will my commission be shown here?',
    },
    answer: {
      id: 'Hanya dengan izinmu. Kalau ingin komisi tetap privat, bilang di awal.',
      en: 'Only with your permission. If you want the commission kept private, say so at the start.',
    },
    confirmed: true,
  },
  {
    id: 'payment',
    question: {
      id: 'Bagaimana pembayaran dan pembatalan?',
      en: 'How do payment and cancellation work?',
    },
    answer: {
      id: 'Slot dikunci setelah DP. Sisa pembayaran sebelum file final dikirim. Pembatalan dan refund mengikuti kesepakatan di awal.',
      en: 'The deposit locks the slot. The rest is paid before the final files are sent. Cancellation and refunds follow the agreement made at the start.',
    },
    confirmed: true,
  },
];

export const visibleFaqs = faqs.filter((item) => item.confirmed);
