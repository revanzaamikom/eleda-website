# AGENTS.md: Eleda

Aturan untuk agent yang mengerjakan proyek ini.

---

## Urutan baca

1. `PRD.md` untuk ruang lingkup dan kriteria terima.
2. `DESIGN.md` untuk arah visual dan token.
3. `PRE-PRODUCTION.md` untuk kesiapan aset, copy, dan deploy.
4. `META-ADS.md` untuk pelacakan dan persiapan iklan.

Jika dokumen bertentangan, urutan menang: instruksi pengguna, `PRD.md`, `DESIGN.md`, `PRE-PRODUCTION.md`, asumsi agent.

---

## Batas keras

- Brand hanya `Eleda`. Dilarang menulis nama atau identitas Revanzart di kode, komentar, metadata, commit, atau dokumen publik.
- Nama klien dan handle grup klien dipakai sebagai teks. Tiga handle Our Artist memakai tautan Instagram langsung. Nama dan identitas Revanzart tetap dilarang.
- Dilarang memakai nama, logo, gambar, copy, atau font dari `kateflorence.com`.
- Dilarang memakai aset dari `D:\Websites\VPS\READY TO SUBMIT`.
- Dilarang membuat statistik, testimoni, harga, klaim komersial, atau nama klien.
- Dilarang menambah form, email, backend, database, atau pembayaran.
- Dilarang menambah dark mode tanpa instruksi baru.
- Dilarang memakai em dash di teks apa pun.
- Dilarang menambah rute di luar `/`, `/id/`, dan `/404`.

---

## Stack

- Astro 7, static output.
- Tailwind 4 lewat plugin Vite.
- TypeScript strict.
- Tanpa framework UI tambahan.
- Tombol outline hitam. Dilarang tombol hijau.
- Tanpa library animasi. Motion memakai CSS saja.
- Font di-self-host: Archivo dan Newsreader.
- Meta Pixel nonaktif secara default. Hanya dimuat jika `PUBLIC_META_PIXEL_ID` diisi.

---

## Skill yang dipakai

Muat hanya saat relevan:

- `design-taste-frontend` untuk layout dan anti default.
- `ui-ux-pro-max` untuk pencarian aturan UI.
- `antislop` sebagai filter wajib sebelum menyerahkan UI.
- `cro` untuk struktur landing dan CTA.
- `riff` untuk capture referensi dan cek orisinalitas.
- `copywriting` untuk copy ID dan EN.
- `antislop-copywriting` dan `humanize-text` untuk membersihkan tulisan dari pola AI.
- `seo-audit` setelah halaman jadi, jika diminta.

Jangan memuat seluruh 146 skill dari proyek lain. Skill noise memperburuk hasil.

---

## Data

- Konten dari `src/data/*.ts`. Tidak ada CMS.
- Handle `@` pada folder sumber hanya penanda internal. Nama klien dan handle dilarang di URL, caption, alt, metadata, dan teks publik.
- File publik memakai nama netral. Original arsip di `assets-source/` dan di-gitignore.
- Karya dengan `permissionConfirmed: false` tidak dirender.
- FAQ dengan `confirmed: false` tidak dirender.
- Judul karya tidak diterjemahkan.
- Alt text wajib dua bahasa.

---

## Perintah

```powershell
npm run dev
npm run build
npx serve dist
npx wrangler pages deploy dist --project-name eleda-website
```

---

## Selesai berarti

- `npm run build` lulus.
- Semua item di `PRE-PRODUCTION.md` bagian 7.1 dicentang.
- `antislop` delivery gate lulus.
- `riff` feel 75 atau lebih dan originality exit 0 (`--project dist`).
- Grep nama terlarang di `dist/` kosong.
- Dengan env kosong, `dist/` tidak memuat `connect.facebook.net`.
