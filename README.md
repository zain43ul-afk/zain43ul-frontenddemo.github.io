# Hafidz Frontend Portfolio

Portfolio frontend interaktif berisi 12 proyek terpisah, responsif untuk desktop dan smartphone, dibuat dengan Next.js, React, dan TypeScript.

Versi 1.1 menghadirkan fotografi nyata beresolusi tinggi, crop visual yang lebih premium, serta komposisi grid simetris dan konsisten di seluruh showcase.

Versi 1.2 mengubah galeri proyek menjadi swiper horizontal interaktif dengan drag mouse, swipe sentuh, tombol panah, navigasi keyboard, filter kategori, indikator posisi, dan scroll snap responsif.

Versi 1.3 menghadirkan slider center-stage bergaya 3D: kartu aktif tampil dominan di tengah, kartu sebelum dan sesudah menjadi pratinjau di sisi, serta panel presentasi hitam–krem–lime yang mengikuti identitas visual portofolio. Paket ini juga menyertakan `index.html` mandiri yang dapat dibuka langsung tanpa instalasi.

Versi 1.4 meningkatkan ketajaman fotografi dan tipografi, menghapus transformasi yang dapat membuat teks tampak buram, meningkatkan resolusi media, dan menyediakan panduan pemakaian versi HTML serta Next.js/React/TypeScript.

Versi 1.5 memperbaiki klik kartu dan swipe, membuat perpindahan kartu lebih halus, serta menambahkan deployment GitHub Actions agar seluruh 12 halaman demo dapat dibuka langsung dari GitHub Pages.

**Live website:** [hafidz-frontend-portfolio.zain43ul.chatgpt.site](https://hafidz-frontend-portfolio.zain43ul.chatgpt.site)

## Proyek

| No. | Proyek | Kategori | Interaksi utama |
| --- | --- | --- | --- |
| 01 | Atlas Studio | Website Frontend | Hero carousel dan navigasi responsif |
| 02 | Flowdesk | Web Application | Pencarian, penambahan, dan perpindahan tugas |
| 03 | Form Objects | E-commerce | Filter produk, keranjang, dan kuantitas |
| 04 | Nova Analytics | Dashboard | Filter periode, KPI, dan visualisasi SVG |
| 05 | Nusa Escape | Responsive Web | Pencarian penginapan dan kontrol tamu |
| 06 | Nadi Finance | Figma-to-Code | Dark mode, saldo, dan simulasi transfer |
| 07 | Lumen Archive | Interactive Frontend | Filter, lightbox, dan navigasi keyboard |
| 08 | Storypress | CMS Frontend | Buat, cari, simpan, dan publikasikan artikel |
| 09 | Climate Now | API Integration | Pencarian cuaca melalui Open-Meteo API |
| 10 | Focus PWA | Progressive Web App | Manifest, service worker, timer, dan tugas lokal |
| 11 | Bite Mobile | Mobile Frontend | Navigasi mobile dan pemesanan makanan |
| 12 | Clear Journal | Performance & Accessibility | Kontras tinggi, ukuran teks, dan reduced motion |

## Menjalankan secara lokal

Persyaratan: Node.js 20.9 atau versi lebih baru.

Untuk melihat versi HTML mandiri secara cepat, buka `index.html` langsung di browser. Untuk seluruh 12 demo interaktif, jalankan versi Next.js atau aktifkan GitHub Pages melalui workflow yang sudah disertakan.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` pada browser.

## Pemeriksaan produksi

```bash
npm run lint
npm run build
npm run start
```

## Mengunggah ke GitHub

1. Ekstrak berkas ZIP ini.
2. Buat repository baru di GitHub tanpa menambahkan README otomatis.
3. Jalankan perintah berikut dari folder proyek:

```bash
git init
git add .
git commit -m "Add interactive frontend portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORY.git
git push -u origin main
```

Ganti `USERNAME` dan `NAMA-REPOSITORY` sesuai akun GitHub Anda.

## Deployment GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` akan membangun dan menerbitkan halaman utama beserta seluruh 12 route showcase secara otomatis.

1. Unggah semua isi proyek ke branch `main`.
2. Buka **Settings → Pages**.
3. Pada **Source**, pilih **GitHub Actions**.
4. Buka tab **Actions** dan tunggu workflow `Deploy portfolio to GitHub Pages` selesai.

## Deployment lainnya

Repository dapat diimpor langsung ke Vercel sebagai proyek Next.js. Build command menggunakan `npm run build` dan tidak membutuhkan environment variable.

## Struktur utama

```text
app/                     Halaman utama, layout, dan route showcase
components/              Komponen untuk 12 demo interaktif
lib/projects.ts          Data dan metadata proyek
public/                  Favicon, manifest PWA, dan service worker
.github/workflows/       Deployment otomatis GitHub Pages
index.html               Versi HTML/CSS/JavaScript mandiri
VERSIONS.md              Panduan memilih versi proyek
```

## Sumber gambar dan data

- Fotografi menggunakan gambar nyata dari Unsplash, bukan gambar generatif AI.
- Data cuaca live menggunakan Open-Meteo API.
- Seluruh data produk, transaksi, dan dashboard lainnya adalah data demonstrasi.

## Kontak

Hafidz Zainul Mustofa  
[LinkedIn](https://www.linkedin.com/in/hafidz-zainul-77267a296) · [Email](mailto:zain43ul@gmail.com)
