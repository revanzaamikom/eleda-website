# PRE-PRODUCTION: Eleda

**Dokumen:** Checklist kesiapan sebelum coding
**Tanggal:** 21 November 2026
**Status:** Siap build. Karya asli menyusul lewat Google Drive.

---

## 1. Status kesiapan

| Item | Status | Catatan |
| --- | --- | --- |
| Brand | Siap | Eleda. Tanpa nama pribadi, tanpa brand lama |
| Domain | Siap | `eleda.web.id` |
| WhatsApp | Siap | `62895321365998` |
| Bahasa | Inggris default di `/`, Indonesia di `/id/` |
| Scope | Siap | Satu landing page, katalog, karya klien, proses, FAQ, CTA WA |
| Form dan email | Dihapus | Tidak dipakai |
| Stack | Siap | Astro 7, Tailwind 4, static, Cloudflare Pages |
| PRD | Draft | `PRD.md` |
| Design system | Selesai | `DESIGN.md`, capture riff sudah diterapkan |
| Referensi visual | Selesai | `.riff/DNA.md` |
| Karya asli | Selesai | 31 gambar dikonversi ke WebP |
| Karya klien | Selesai | 14 gambar dalam 3 grup, tanpa nama atau handle |
| Sosial media | Tidak ada | Footer hanya WhatsApp |
| Jawaban FAQ | Selesai | 8 item, termasuk produksi dan file final |
| Harga | Tidak ditampilkan | Tidak ada angka karangan |
| Logo | Selesai | 5 aset asli FOCO LOCO dan LAMTHIUR di katalog logo |
| Tentang dan Our Artist | Selesai | Copy singkat dan 3 handle tanpa tautan |
| Tombol | Selesai | Outline hitam, tanpa hijau |
| Logo | Tidak wajib | Wordmark teks `Eleda` cukup |
| OG image | Selesai | `og-id.png` dan `og-en.png`, 1200x630 |
| Favicon | Selesai | `favicon.svg` dan `apple-touch-icon.png` |
| Meta Ads | Siap, nonaktif | Env kosong, pixel tidak dimuat |

---

## 2. Yang harus dikumpulkan sebelum build

### 2.1 Aset gambar

| Aset | Jumlah | Spesifikasi | Status |
| --- | --- | --- | --- |
| Hero | 1 | WebP 1600x1067, crop 3:2 | Selesai, `public/hero.webp` |
| Katalog clothing | 9 | WebP, sisi terpanjang 1600px | Selesai |
| Katalog character | 8 | WebP, sisi terpanjang 1600px | Selesai |
| Katalog logo | 5 | WebP, proyek FOCO LOCO dan LAMTHIUR | Selesai |
| Karya klien | 14 | WebP, 3 grup klien | Selesai |
| OG image | 2 | 1200x630, judul Eleda terbaca | Selesai, `og-id.png` dan `og-en.png` |
| Favicon | 1 | SVG atau PNG 512px | Selesai, `favicon.svg` |

Semua 31 gambar asli dikonversi ke WebP quality 80 dan disusun ulang sesuai isi gambar. Original arsip di `assets-source/`, di luar `public/` dan masuk `.gitignore`. Total WebP sekitar 1,76 MB, turun dari 29,1 MB sumber.

Struktur publik:

- `public/works/clothing/`, 9 file
- `public/works/character/`, 8 file
- `public/works/clients/jinx-archives/`, 9 file
- `public/works/clients/foco-locoo/`, 4 file
- `public/works/clients/lamthiur/`, 1 file

Lima aset FOCO LOCO dan LAMTHIUR dipakai sekaligus di katalog logo dan di grup klien. Nama file memakai slug dari isi gambar, bukan nomor. Judul dan caption memakai nama asli beserta keterangan singkat.

Handle `@` dipakai sebagai judul grup klien, ditampilkan sebagai teks tanpa tautan. Nama dan identitas Revanzart tetap dilarang.

Aturan:

- Hanya karya milik Eleda atau karya klien dengan izin tertulis.
- Jangan memakai file dari `D:\Websites\VPS\READY TO SUBMIT` (Adobe Stock, lisensi tidak jelas).
- Jangan memakai karya dari referensi.
- Jika aset belum ada, build memakai placeholder berlabel, bukan gambar karangan.

### 2.2 Data karya

Untuk setiap karya, siapkan:

```
judul
kategori: character | portrait | illustration | other
tahun
tipe: personal | client
file gambar
alt Indonesia
alt Inggris
featured: ya | tidak
izin klien: ya | tidak
```

### 2.3 FAQ

Delapan item sudah disetujui dan ditandai `confirmed: true` di `src/data/faqs.ts`:

1. Status slot.
2. Cara memesan.
3. Harga dan durasi.
4. Jumlah revisi.
5. Pemakaian produksi dan komersial.
6. Format file final.
7. Izin menampilkan karya.
8. Pembayaran dan pembatalan.

FAQ dirender dari data. Item dengan `confirmed: false` tidak akan muncul tanpa perlu mengubah komponen.

### 2.4 Kontak dan sosial

- Tidak ada sosial media. Footer hanya berisi WhatsApp.
- Tidak ada email publik.
- Nomor WhatsApp sudah publik, siapkan pesan otomatis jika spam meningkat.

---

## 3. Copy deck

Copy final ada di `COPY.md` dan sudah dipakai di `src/i18n/ui.ts`.

- [x] Headline Indonesia
- [x] Headline Inggris
- [x] Nada bahasa Inggris netral, tanpa kata ganti pemilik
- [x] Label status: `Terbuka untuk komisi` dan `Open for commissions`
- [x] Label CTA: `Mulai komisi`, `Lihat karya`, `Start a commission`, `See recent work`
- [x] Pesan awal WhatsApp untuk dua bahasa
- [x] Teks tiga langkah proses
- [x] Teks footer

Aturan copy:

- Tanpa em dash.
- Tanpa kata "seamless", "revolutionary", "terbaik", "nomor satu".
- Tanpa angka tanpa sumber.
- Indonesia dan Inggris setara makna.
- Tidak menyebut nama pribadi atau brand lain.

---

## 4. Skill dan tool

| Tool | Status | Fungsi |
| --- | --- | --- |
| `design-taste-frontend` | Terpasang | Arah layout dan anti default |
| `ui-ux-pro-max` | Terpasang | Basis design system, sudah dijalankan |
| `antislop` | Terpasang | Filter hard gate dan delivery gate |
| `cro` | Terpasang | Struktur landing dan CTA |
| `riff` | Terpasang | Capture referensi, DNA, cek orisinalitas |
| Astro 7 | Terpasang | Framework build |
| Tailwind 4 | Terpasang | Styling |
| Wrangler | Via npx | Deploy Cloudflare Pages |
| Node 24.16.0 | Terpasang | Runtime build |
| npm 11.13.0 | Terpasang | Package manager |

Catatan `ui-ux-pro-max`: hasil default menyarankan Brutalism dan palet hitam putih. Itu ditolak karena tidak cocok dengan referensi galeri dan akan membuat situs terasa seperti portofolio desainer, bukan studio ilustrasi. Yang diambil hanya dial dan struktur section. Saran motion stagger tidak dipakai karena probe referensi menemukan 0 scroll reveal.

---

## 5. Capture riff

Sudah dijalankan 21 November 2026. Hasil: `mode: browser (chrome.exe)`, 4 stylesheet, 7 section, 6 layar, 7 screenshot. DNA ada di `.riff/DNA.md`.

Langkah yang dipakai, untuk reproduksi:

1. Skill terpasang di `~/.config/opencode/skills/riff` dan sumber clone di `$env:TEMP\opencode\riff`.
2. `.riff/` sudah ada di `.gitignore` saat build dimulai.
3. Capture referensi.
   ```
   node "$env:TEMP\opencode\riff\skills\riff\scripts\extract.mjs" https://kateflorence.com --out .riff
   ```
4. DNA ditulis di `.riff/DNA.md` dan sudah diterapkan ke `DESIGN.md`.
5. Setelah build, jalankan:
   ```
   node "$env:TEMP\opencode\riff\skills\riff\scripts\extract.mjs" http://localhost:4321 --own-site --out .riff/build
   node "$env:TEMP\opencode\riff\skills\riff\scripts\feel.mjs" --ref .riff/reference.json --build .riff/build/reference.json
   node "$env:TEMP\opencode\riff\skills\riff\scripts\originality.mjs" --ref .riff/reference.json --project dist
   ```
   Syarat lulus: feel 75 atau lebih, originality exit 0.

   Originality dipindai dari `dist/`, bukan root proyek. Dokumen internal menyebut domain referensi sebagai larangan, dan itu bukan hotlink. Yang diperiksa adalah hasil build yang benar-benar dikirim.

Catatan legal: `kateflorence.com` mengizinkan crawl (`Allow: /`) dan tidak memasang opt-out `User-agent: riff`. Tetap dilarang memakai aset, copy, logo, atau font dari sana.

---

## 6. Struktur file yang direncanakan

```
package.json
astro.config.mjs
tsconfig.json
.env
.env.example
.gitignore
AGENTS.md
PRD.md
DESIGN.md
COPY.md
META-ADS.md
PRE-PRODUCTION.md
scripts/og/
  og-id.svg
  og-en.svg
  favicon-180.svg
assets-source/ (di-gitignore, original tidak dipublikasikan)
src/
  layouts/BaseLayout.astro
  pages/index.astro
  pages/id/index.astro
  pages/404.astro
  components/Nav.astro
  components/Hero.astro
  components/WorkGrid.astro
  components/ClientWork.astro
  components/Process.astro
  components/Faq.astro
  components/About.astro
  components/FinalCta.astro
  components/Footer.astro
  components/MetaPixel.astro
  config/meta.ts
  data/site.ts
  data/works.ts
  data/faqs.ts
  i18n/ui.ts
  styles/global.css
public/
  hero.webp
  works/clothing/
  works/character/
  works/clients/jinx-archives/
  works/clients/foco-locoo/
  works/clients/lamthiur/
  favicon.svg
  apple-touch-icon.png
  og-id.png
  og-en.png
  robots.txt
  licenses/
```

Tidak ada folder `src/content`. Data cukup berupa file TypeScript.

---

## 7. Rencana QA

### 7.1 Sebelum deploy

- [x] `npm run build` selesai tanpa error.
- [x] Pratinjau lokal dan cek semua section pada 375, 768, 1024, dan 1440px.
- [x] 375px, 768px, 1024px, 1440px tanpa scroll horizontal.
- [x] Rute default `/` berbahasa Inggris, `/id/` berbahasa Indonesia, `/404` berbahasa Inggris.
- [x] Toggle bahasa berpindah antara `/` dan `/id/` dan membawa hash section yang aktif.
- [x] 36 kartu karya tampil di 6 rail: 22 katalog, 14 karya klien. Lima aset logo muncul di dua tempat.
- [x] 3 blok katalog punya heading, jumlah, narasi, dan CTA WhatsApp.
- [x] Tentang dan Our Artist tampil dengan tautan Instagram `@wrmdewa`, `@kytk._`, `@suryawisesa_` yang terbuka di tab baru.
- [x] Floating CTA tampil di kanan bawah, outline hitam, dan memakai pesan sesuai bahasa.
- [x] Handle klien dipakai sebagai judul grup dan tautan Instagram langsung. Nama dan identitas Revanzart tidak muncul.
- [x] Semua tombol WhatsApp outline hitam, teks hitam. Tidak ada tombol hijau.
- [x] Teks status tetap ada tanpa titik atau ikon hijau.
- [x] Semua tombol WhatsApp membuka nomor benar dengan pesan sesuai bahasa dan kategori.
- [x] Semua anchor nav menuju section yang ada, termasuk `#about`.
- [x] Rail horizontal bisa digeser dengan keyboard, mouse wheel, dan memakai `aria-label`.
- [x] Mouse wheel di atas rail terkunci ke kartu berikutnya, lalu halaman lanjut scroll setelah kartu terakhir.
- [x] Accordion memakai `<details>` dan `<summary>`, bisa dioperasikan dengan keyboard.
- [x] `prefers-reduced-motion` mematikan fade hero dan hover transform.
- [x] Fokus terlihat di semua elemen interaktif lewat `:focus-visible` berwarna hitam.
- [x] Alt text ada di semua gambar karya dan menjelaskan isi gambar.
- [x] 31 gambar karya berformat WebP, tersusun per kategori dan grup klien.
- [x] `title` dan `description` menyebut tiga kategori dan sesuai bahasa.
- [x] Canonical, hreflang `id`, `en`, dan `x-default` benar.
- [x] `og:image` menunjuk `og-en.png` di `/` dan `og-id.png` di `/id/`.
- [x] `sitemap-index.xml` hanya berisi `/` dan `/id/`.
- [x] `robots.txt` dapat diakses dan menunjuk sitemap.
- [x] Dengan env kosong, tidak ada request ke `connect.facebook.net`.
- [x] `dataLayer` menerima `whatsapp_click` saat tombol WhatsApp diklik.
- [x] Grep identitas Revanzart, domain referensi, `TODO`, dan `Lorem` di `dist/` hasilnya kosong.
- [x] Lighthouse mobile: Performance 90+, Accessibility 95+.
- [x] 404 tampil dan tautan kembali bekerja.
- [x] `riff` feel 81/100 dan originality exit 0 pada `dist/`.

### 7.2 Sesudah deploy

- [ ] `https://eleda.web.id` terbuka dengan HTTPS.
- [ ] `www` diarahkan ke domain utama.
- [ ] `robots.txt` dan `sitemap-index.xml` dapat diakses.
- [ ] OG image tampil di pratinjau WhatsApp, versi ID dan EN.
- [ ] Meta Pixel tidak memuat apa pun selama env kosong.
- [ ] Cek satu klik WhatsApp dari ponsel asli.

---

## 8. Rencana deploy Cloudflare Pages

1. Isi `.env` di mesin lokal:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_ZONE_ID`, opsional
   - `PUBLIC_META_PIXEL_ID` dan `PUBLIC_META_DOMAIN_VERIFICATION` dikosongkan
2. File `.env` masuk `.gitignore` dan tidak pernah di-commit.
3. `public/_headers` berisi header keamanan dan aturan cache.
4. `public/_redirects` mengarahkan `/id` ke `/id/`.
5. Cloudflare Pages:
   - build command `npm run build`
   - output directory `dist`
   - `NODE_VERSION = 24`
6. Deploy lewat GitHub connect, atau manual dengan `npm run deploy` yang menjalankan `wrangler deploy` memakai `wrangler.jsonc`.
7. Domain `eleda.web.id` ditambahkan di Cloudflare lewat dashboard atau API Workers. DNS diarahkan lewat Cloudflare.
8. Aktifkan HTTPS, lalu cek `www` diarahkan ke apex.

Preview lokal memakai dev server Astro atau `npx serve dist`.

---

## 9. Definition of ready

- [x] `PRD.md` disetujui.
- [x] `DESIGN.md` disetujui, termasuk grid 2 kolom yang tetap dipertahankan.
- [x] 31 karya asli sudah masuk dan dikonversi ke WebP.
- [x] 31 karya asli sudah masuk dan dikonversi ke WebP.
- [x] Karya klien disusun per grup dengan handle asli sebagai judul.
- [x] Tentang dan Our Artist sudah disetujui.
- [x] Jawaban FAQ di `COPY.md` disetujui.
- [x] Copy ID dan EN disetujui.
- [x] riff terpasang dan DNA sudah dibaca.

---

## 10. Status aset

1. Katalog memakai 22 gambar asli: 9 clothing, 8 character, 5 logo.
2. Karya klien memakai 14 gambar asli dalam 3 grup handle.
3. Lima aset logo dipakai sekaligus di katalog logo dan grup klien.
4. Tidak ada placeholder yang tersisa.
5. Original arsip ada di `assets-source/` dan tidak ikut ke build.
6. Tidak ada blocker struktur, copy, atau desain.
