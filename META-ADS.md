# META ADS: Eleda

**Dokumen:** Persiapan pelacakan dan peluncuran iklan Meta
**Status:** Slot terpasang di kode, nonaktif sampai env diisi
**Tanggal:** 21 November 2026

---

## 1. Prinsip

- Pelacakan mati secara default. Tidak ada script Meta yang dimuat dan tidak ada cookie sampai `PUBLIC_META_PIXEL_ID` diisi.
- Tidak ada klaim di iklan yang tidak ada di halaman.
- Tidak ada harga, diskon, atau urgensi karangan.
- Halaman tujuan tetap satu: `/` untuk Inggris, `/id/` untuk Indonesia.

---

## 2. Yang sudah disiapkan di kode

| Bagian | File | Fungsi |
| --- | --- | --- |
| Pixel loader | `src/components/MetaPixel.astro` | Memuat pixel hanya jika ID valid |
| Env | `.env.example` | `PUBLIC_META_PIXEL_ID`, `PUBLIC_META_DOMAIN_VERIFICATION` |
| Verifikasi domain | `src/layouts/BaseLayout.astro` | Meta tag `facebook-domain-verification` |
| Klik WhatsApp | `src/layouts/BaseLayout.astro` | Event `Contact` dan `dataLayer` |
| OG Indonesia | `public/og-id.png` | Pratinjau tautan 1200x630 |
| OG Inggris | `public/og-en.png` | Pratinjau tautan 1200x630 |
| Metadata | `src/layouts/BaseLayout.astro` | Canonical, hreflang, OG, Twitter card |
| Anchor kategori | `WorkGrid.astro`, `ClientWork.astro` | `#clothing`, `#character`, `#logo`, `#clients` sebagai tujuan iklan |
| Sitemap | `astro.config.mjs` | `/sitemap-index.xml` |

---

## 3. Event yang dikirim

| Event | Kapan | Parameter |
| --- | --- | --- |
| `PageView` | Setiap halaman dimuat | otomatis |
| `Contact` | Klik tautan WhatsApp | `content_name`: nav, hero, catalog-clothing, catalog-character, catalog-logo, final, footer, floating. `content_category`: id atau en |
| `whatsapp_click` | Klik tautan WhatsApp | dataLayer untuk GTM, bukan event Meta |

Tidak ada CTA WhatsApp di dalam kartu karya. Tiap blok katalog punya CTA dengan pesan awal sesuai kategori. Tujuan iklan memakai anchor, bukan event tambahan.

`Contact` dipakai karena aksi utamanya percakapan, bukan pembelian. Custom conversion dibuat dari event ini.

---

## 4. Cara mengaktifkan

1. Buat pixel di Meta Events Manager.
2. Salin numeric pixel ID.
3. Di Cloudflare Pages: Settings > Environment variables.
   - `PUBLIC_META_PIXEL_ID` = ID pixel
   - `PUBLIC_META_DOMAIN_VERIFICATION` = token dari Business Manager, jika ada
4. Deploy ulang. Env dibaca saat build.
5. Buka halaman, cek Meta Pixel Helper: `PageView` muncul satu kali.
6. Klik tombol WhatsApp. `Contact` harus muncul dengan `content_name` yang benar.
7. Di Events Manager, buat custom conversion dari event `Contact`.
8. Setelah domain terverifikasi, pasang iklan.

---

## 5. Checklist iklan

- [ ] Pixel ID diisi di Cloudflare Pages atau `.env` lokal, bukan di file yang di-commit.
- [ ] Domain terverifikasi di Business Manager.
- [ ] `Contact` terdeteksi di Test Events.
- [ ] Custom conversion `WhatsApp Contact` dibuat.
- [ ] Iklan memakai `/` untuk audiens Inggris dan `/id/` untuk audiens Indonesia.
- [ ] Anchor kategori tersedia: `/#clothing`, `/#character`, `/#logo`, `/#clients`.
- [ ] Teks iklan tidak menjanjikan harga, durasi, atau slot yang tidak ada di halaman.
- [ ] Pratinjau tautan memakai `og-id.png` atau `og-en.png`.
- [ ] UTM boleh ditambahkan, tidak mengubah halaman.
- [ ] Keputusan consent diambil sebelum pixel dinyalakan.

---

## 6. Consent dan privasi

Pixel Meta menulis cookie pihak ketiga. Sebelum menyalakan pixel:

- Tentukan apakah perlu banner consent.
- Jika perlu, pixel hanya dimuat setelah izin.
- Catat dasar pemrosesan data di halaman kebijakan, jika nanti diminta.

Situs ini belum punya halaman kebijakan dan tidak menambahkan banner. Jangan nyalakan pixel sebelum keputusan ini diambil.

---

## 7. Yang tidak boleh dilakukan

- Memasang pixel langsung di HTML tanpa env.
- Mengirim event pembelian palsu.
- Memakai nama atau testimoni karangan di iklan.
- Mengklaim slot terbatas jika status di halaman tidak mendukung.
- Menambah rute khusus iklan di luar `/` dan `/id/`.

---

## 8. Uji tanpa pixel

Dengan env kosong:

- Tidak ada request ke `connect.facebook.net`.
- Tidak ada cookie `_fbp`.
- Tidak ada elemen `noscript` pixel.
- Tombol WhatsApp tetap bekerja.
- `dataLayer` tetap menerima `whatsapp_click`, aman untuk GTM nanti.

Cara cek: buka DevTools > Network, filter `facebook`. Hasilnya harus kosong.
