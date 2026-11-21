export const site = {
  name: 'Eleda',
  url: 'https://eleda.web.id',
  whatsapp: '62895321365998',
  whatsappDisplay: '+62 895-3213-65998',
  openForCommission: true,
  year: 2026,
  locales: {
    id: 'id_ID',
    en: 'en_US',
  },
} as const;

export type Site = typeof site;
