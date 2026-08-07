# Pilihan Versi Portfolio

Paket ini menyediakan dua versi yang dapat digunakan sesuai kebutuhan.

## 1. Versi HTML/CSS/JavaScript

File: `index.html`

- Dapat dibuka langsung dengan klik dua kali tanpa instalasi.
- Slider, tombol, pagination, keyboard, drag mouse, dan swipe sentuh berfungsi langsung.
- Slider, kartu samping, dan tombol navigasi bekerja tanpa menggambar ulang seluruh elemen.
- Cocok sebagai halaman katalog statis atau halaman awal GitHub Pages.

## 2. Versi Next.js/React/TypeScript

Folder utama: `app/`, `components/`, `lib/`, dan `public/`

- Memuat 12 halaman proyek yang benar-benar terpisah melalui route `/showcase/[slug]`.
- Setiap halaman memiliki desain dan interaksi berbeda.
- Cocok untuk pengembangan lokal, GitHub Pages, Vercel, atau portofolio berbasis React.
- Workflow GitHub Actions menerbitkan seluruh halaman sebagai static export.

Jalankan versi lengkap:

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Pemeriksaan

```bash
npm run lint
npm run build
```

Build menghasilkan halaman utama dan seluruh 12 route showcase. Fotografi menggunakan gambar nyata dari Unsplash dan bukan gambar generatif AI.
