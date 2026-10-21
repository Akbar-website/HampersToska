# Design System & UI Specification — Hampers Toska
**Versi:** 1.0  
**Tanggal:** 20 Oktober 2026  
**Status:** Design handoff untuk implementasi HTML + Bootstrap + CSS murni

> Nama “Hampers Toska” adalah placeholder. Ganti dengan brand resmi sebelum publikasi. Gunakan foto produk dan klaim bisnis yang autentik; jangan mengisi katalog dengan harga, testimoni, logo klien, atau sertifikasi fiktif.

## 1. Arah desain

**Konsep:** premium, hangat, modern, elegan, dan ramah. Tampilan menggabungkan hijau toska yang khas dengan warna ivory, putih hangat, dan aksen emas lembut. Hindari tampilan terlalu ramai, gradien mencolok, bayangan berat, atau dekorasi Islami berlebihan.

**Karakter visual**
- Premium: whitespace luas, foto produk besar, grid rapi.
- Hangat: copywriting ramah dan natural.
- Terpercaya: harga/isi/kebijakan mudah ditemukan.
- Berorientasi konversi: CTA WhatsApp konsisten tanpa mengganggu.
- Mobile-first: kartu produk satu kolom di ponsel dan grid adaptif di layar besar.

## 2. Token warna

```css
:root {
  /* Brand */
  --color-primary: #167D73;
  --color-primary-hover: #11665E;
  --color-primary-dark: #104D48;
  --color-primary-soft: #E6F3F0;

  /* Accent */
  --color-gold: #C6A56B;
  --color-gold-soft: #F4EBDD;

  /* Surfaces */
  --color-page: #FAF8F3;
  --color-surface: #FFFFFF;
  --color-surface-muted: #F2F0E9;

  /* Text */
  --color-text: #24332F;
  --color-text-muted: #64736E;
  --color-border: #DDE5E0;

  /* Semantic */
  --color-success: #24734D;
  --color-warning: #8A5A10;
  --color-danger: #B42318;

  /* WhatsApp */
  --color-whatsapp: #167D73;

  /* Shape & elevation */
  --radius-sm: 0.5rem;
  --radius-md: 0.875rem;
  --radius-lg: 1.25rem;
  --radius-pill: 999px;
  --shadow-card: 0 10px 30px rgba(16, 77, 72, 0.08);
  --shadow-nav: 0 4px 18px rgba(16, 77, 72, 0.06);

  /* Layout */
  --container-max: 1200px;
  --section-space: clamp(3.5rem, 7vw, 6.5rem);
}
```

**Penggunaan**
- Primary `#167D73`: CTA utama, link penting, elemen brand.
- Primary dark `#104D48`: heading di area brand gelap dan hover.
- Ivory `#FAF8F3`: latar halaman untuk kesan hangat.
- Putih: kartu dan panel konten.
- Gold `#C6A56B`: aksen tipis seperti garis, ikon kecil, label premium; bukan warna teks kecil di atas putih kecuali kontrasnya telah diuji.
- Teks utama `#24332F`, teks sekunder `#64736E`.
- Selalu uji rasio kontras, terutama teks di tombol dan latar berwarna.

## 3. Tipografi

Rekomendasi:
- Heading: `Playfair Display` atau serif lokal sejenis.
- Body/UI: `Inter`, `system-ui`, sans-serif.
- Untuk performa, pertimbangkan system font stack atau self-host font yang sudah disubset.

```css
:root {
  --font-heading: "Playfair Display", Georgia, serif;
  --font-body: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --heading-xl: clamp(2.4rem, 5vw, 4.5rem);
  --heading-lg: clamp(2rem, 3.5vw, 3rem);
  --heading-md: clamp(1.5rem, 2.5vw, 2rem);
}
body {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-page);
  line-height: 1.7;
}
h1, h2, h3, h4 {
  font-family: var(--font-heading);
  line-height: 1.15;
  letter-spacing: -0.02em;
}
```

Jaga ukuran body setidaknya sekitar 16px pada perangkat mobile. Heading besar boleh responsif menggunakan `clamp()`.

## 4. Layout dan grid

- Gunakan container Bootstrap dengan batas lebar konten sekitar 1200px.
- Section vertikal memakai `padding-block: var(--section-space)`.
- Grid kartu paket: 1 kolom pada ponsel kecil, 2 kolom pada tablet, 3 kolom pada desktop; 4 kolom hanya jika kartu masih terbaca.
- Konten artikel: lebar baca sekitar 680–760px; jangan memenuhi seluruh layar dengan paragraf panjang.
- Radius kartu 14–20px; border tipis dan shadow ringan.
- Spacing berbasis kelipatan 4/8px; hindari margin acak.
- Hindari carousel otomatis. Jika carousel diperlukan, kontrol manual dan aksesibel.

## 5. Navbar

**Desktop**
- Tinggi sekitar 76–84px.
- Logo wordmark di kiri; menu di kanan/tengah.
- Urutan: Beranda, Tentang, Paket dropdown, Portofolio, Blog.
- CTA “Konsultasi WhatsApp” menonjol dengan warna primary.
- Navbar sticky boleh digunakan jika tidak mengurangi area konten atau mengganggu mobile.

**Mobile**
- Logo dan tombol menu yang mudah disentuh.
- Menu collapse dengan label teks jelas.
- Dropdown Paket bisa dibuka dengan tap, mendukung keyboard, dan tidak hanya bergantung pada hover.
- CTA WhatsApp tetap tersedia dalam menu; pertimbangkan sticky bottom CTA hanya jika tidak menutupi konten dan memenuhi safe area.

**State**
- Default, hover, focus-visible, active/current page, expanded dropdown, mobile menu open.
- `aria-current="page"` untuk link halaman aktif; `aria-expanded` pada kontrol dropdown/collapse.

## 6. Hero homepage

**Desktop layout:** dua kolom. Copy di kiri, foto hampers utama di kanan. Di mobile, copy di atas dan foto sesudahnya.

Contoh copy:
- Eyebrow: `HAMPERS LEBARAN 2027`
- H1: **“Berbagi Hangat, Mengirimkan Makna.”**
- Supporting text: “Temukan hampers Lebaran untuk keluarga, sahabat, karyawan, dan relasi bisnis. Pilih paket yang sesuai kebutuhan atau konsultasikan hampers custom bersama tim kami.”
- CTA primary: “Lihat Paket Hampers”
- CTA secondary: “Konsultasi via WhatsApp”
- Microcopy: “Isi paket, harga, dan jadwal dikonfirmasi sebelum pesanan diproses.” (gunakan hanya jika sesuai proses aktual)

**Visual**
- Foto produk nyata dengan pencahayaan lembut, detail kemasan terlihat, warna produk akurat.
- Latar ivory, dekorasi tipis seperti bentuk lengkung atau garis organik.
- Jangan meletakkan teks di atas area foto yang sibuk.
- Foto hero menjadi kandidat LCP; jangan lazy-load, tentukan dimensi dan gunakan format modern.

## 7. Kartu paket

Komponen kartu berisi:
1. Foto rasio 4:3 atau 1:1 yang konsisten.
2. Label kategori opsional: “Premium”, “Perusahaan”, dll. hanya bila benar.
3. Nama paket.
4. Ringkasan isi atau keunggulan spesifik.
5. Harga pasti atau “Mulai dari Rp…” dengan kondisi yang jelas.
6. Tautan “Lihat detail”.
7. CTA “Tanya via WhatsApp”.

Gaya:
- Background putih, border `--color-border`, radius `--radius-lg`.
- Shadow muncul halus saat hover, tetapi fokus keyboard harus tetap terlihat.
- Gambar tidak boleh meregang; gunakan `object-fit: cover` dengan focal point yang sesuai.
- Jangan menampilkan badge “Best Seller” atau “Stok terbatas” tanpa data yang mendukung.

Contoh markup Bootstrap:
```html
<article class="card package-card h-100">
  <a class="package-card__image-link" href="/paket/contoh/">
    <img
      class="package-card__image"
      src="/assets/images/paket-contoh.webp"
      width="800"
      height="600"
      loading="lazy"
      alt="Hampers Lebaran dalam kotak hijau dengan pilihan produk di dalamnya"
    >
  </a>
  <div class="card-body d-flex flex-column">
    <p class="package-card__eyebrow">Hampers Keluarga</p>
    <h3 class="h4 card-title">Paket Silaturahmi</h3>
    <p class="card-text">Deskripsi singkat isi paket berdasarkan katalog aktual.</p>
    <p class="package-card__price">Rp xxx.xxx</p>
    <a class="btn btn-outline-brand mt-auto" href="/paket/contoh/">Lihat detail</a>
  </div>
</article>
```
Ganti contoh nama, harga, dan alt text sesuai foto/katalog nyata.

## 8. Tombol dan link

```css
.btn-brand {
  --bs-btn-color: #fff;
  --bs-btn-bg: var(--color-primary);
  --bs-btn-border-color: var(--color-primary);
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: var(--color-primary-hover);
  --bs-btn-hover-border-color: var(--color-primary-hover);
  --bs-btn-focus-shadow-rgb: 22, 125, 115;
  --bs-btn-border-radius: var(--radius-pill);
  padding: 0.8rem 1.25rem;
  font-weight: 650;
}
.btn-outline-brand {
  color: var(--color-primary-dark);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-pill);
  padding: 0.75rem 1.15rem;
  font-weight: 600;
}
.btn-outline-brand:hover {
  color: #fff;
  background: var(--color-primary);
}
a {
  color: var(--color-primary-dark);
  text-underline-offset: 0.18em;
}
a:focus-visible, button:focus-visible, input:focus-visible,
select:focus-visible, textarea:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 3px;
}
```

CTA primer menggunakan kalimat tindakan. Jangan memakai “Klik di sini”. Pastikan state hover, focus, disabled, dan loading (bila ada) konsisten.

## 9. Komponen bagian halaman

### Trust strip
- 3 item maksimal pada mobile, 4 item pada desktop.
- Gunakan ikon sederhana plus teks.
- Isi hanya dengan fakta yang dapat dipenuhi, misalnya “Opsi kartu ucapan”, “Paket untuk kebutuhan perusahaan”, “Konsultasi pemilihan paket” bila tersedia.

### Kategori
- Kartu atau chip dengan label yang eksplisit.
- Setiap kategori menuju URL permanen yang relevan.

### Keunggulan
- 3 kolom desktop, satu kolom mobile.
- Satu heading, satu paragraf singkat, satu ikon dekoratif.
- Hindari klaim generik seperti “kualitas terbaik” tanpa bukti.

### Proses pemesanan
- 4–5 langkah bernomor.
- Jelaskan titik konfirmasi harga, isi, pembayaran, produksi, dan pengiriman.

### Portofolio
- Grid editorial; gambar konsisten, teks proyek ringkas.
- Pastikan izin foto, logo, dan nama klien.
- Gunakan `figure` dan `figcaption` bila caption menambah konteks.

### Testimoni
- Kutipan singkat asli, nama/inisial sesuai izin, dan konteks pembelian jika diizinkan.
- Jangan menggunakan foto/avatar buatan yang menyiratkan pelanggan nyata.
- Jika belum ada testimoni, ganti dengan bagian proses kerja atau detail kualitas.

### FAQ
- Accordion Bootstrap dengan heading/button semantik.
- Jawaban ringkas tetapi memadai.
- Pastikan dapat digunakan keyboard dan pembaca layar.
- Konten FAQ harus terlihat oleh pengguna; jangan menyembunyikan teks demi schema.

### Blog cards
- Gambar, kategori, judul, excerpt, tanggal.
- Jangan memotong judul sampai sulit dipahami.
- Card link dan CTA punya target yang jelas.

### Footer
- Latar `--color-primary-dark`, teks terang dengan kontras memadai.
- Kolom: brand/intro, navigasi, kategori, kontak.
- Nomor WhatsApp terlihat dan dapat diklik.
- Cantumkan copyright dinamis jika ada backend/build; jangan menghardcode tahun yang cepat kedaluwarsa.
- Sertakan privasi dan syarat.

## 10. Floating WhatsApp CTA

- Posisi kanan bawah; gunakan safe-area inset pada perangkat yang mendukung.
- Lebar tombol cukup untuk ikon dan teks “Chat WhatsApp”.
- Pada layar sempit, boleh memakai ikon + label yang ringkas, tetapi aksesibilitas nama tetap harus ada.
- Tidak boleh menutupi tombol submit, footer, cookie notice, atau konten penting.
- Link selalu ke nomor `6282131087971` dan memakai pesan yang sesuai konteks.
- Buka tab baru hanya jika ada alasan UX; jika `target="_blank"`, tambahkan `rel="noopener noreferrer"`.

Contoh URL:
```text
https://wa.me/6282131087971?text=Halo%20Hampers%20Toska%2C%20saya%20ingin%20konsultasi%20hampers%20Lebaran.
```

Contoh helper JavaScript vanilla:
```js
function buildWhatsAppUrl(message) {
  const phone = "6282131087971";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```
Pastikan pesan dikodekan saat membangun URL. Jangan melakukan redirect otomatis saat halaman dibuka; pengguna harus menekan CTA.

## 11. Form permintaan penawaran

Field yang disarankan:
- Nama (wajib).
- Nomor WhatsApp (wajib jika tindak lanjut dilakukan lewat WhatsApp).
- Nama perusahaan (opsional).
- Jumlah hampers.
- Anggaran per paket (opsional, dropdown dengan rentang yang disetujui bisnis).
- Tanggal dibutuhkan.
- Kota tujuan.
- Kebutuhan personalisasi.
- Catatan tambahan (opsional).

Desain:
- Label selalu terlihat; placeholder hanya contoh.
- Tandai field wajib secara tekstual.
- Validasi inline dengan pesan yang menjelaskan cara memperbaiki.
- Jangan meminta data yang tidak dibutuhkan.
- Jika form hanya menyusun pesan WhatsApp, jelaskan bahwa tombol akan membuka WhatsApp dan pengguna perlu menekan kirim sendiri.
- Jika data dikirim ke server, gunakan HTTPS, validasi sisi server, kebijakan retensi, dan proteksi spam.

## 12. Spesifikasi halaman detail paket

Urutan yang disarankan:
1. Breadcrumb.
2. Galeri foto + nama paket + harga.
3. Ringkasan isi dan penerima yang cocok.
4. Daftar isi terperinci.
5. Opsi personalisasi.
6. Ketentuan kuantitas, waktu produksi, dan pengiriman.
7. CTA WhatsApp yang membawa nama paket.
8. FAQ produk.
9. Paket terkait.

Pada mobile, galeri tampil di atas informasi. CTA boleh sticky di bagian bawah hanya jika tidak menutupi konten dan memiliki ruang aman.

## 13. Spesifikasi halaman artikel

- Layout dua area pada desktop: konten utama dan daftar isi/related links opsional.
- Lebar baca dibatasi; line-height 1.7–1.85.
- Judul dan lead jelas; metadata author/tanggal terbaca.
- Tabel responsif dengan wrapper `table-responsive`.
- Link eksternal tepercaya, jelas, dan tidak dibuka di tab baru secara default kecuali diperlukan.
- CTA kontekstual di akhir artikel.
- Gambar diberi caption bila membantu; alt text tidak dijejali keyword.

## 14. Motion dan interaksi

- Transisi 150–250ms, halus dan tidak mengganggu.
- Hindari parallax, scroll hijacking, autoplay video, dan animasi yang menghalangi konten.
- Hormati reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
- Dropdown dan accordion harus dapat dipakai keyboard.
- Tidak ada hover-only functionality.

## 15. Responsive breakpoints

Gunakan breakpoint Bootstrap yang telah dipilih dalam proyek; contoh umum:
- xs: <576px
- sm: ≥576px
- md: ≥768px
- lg: ≥992px
- xl: ≥1200px
- xxl: ≥1400px

Perilaku:
- Mobile: satu kolom, hero bertumpuk, CTA lebar yang nyaman, menu collapse.
- Tablet: dua kolom pada katalog bila cukup lebar.
- Desktop: hero dua kolom, grid 3 kolom, whitespace lebih luas.
- Uji pada lebar 320px, 375px, 768px, 1024px, 1440px, serta zoom browser 200%.

## 16. SEO design requirements

- Heading semantik: satu H1 utama; H2 untuk bagian utama; H3 untuk subbagian.
- Gambar produk menggunakan nama file deskriptif dan alt yang faktual.
- Breadcrumb visual pada halaman kategori, paket, dan artikel.
- Link internal berbentuk anchor HTML standar, bukan hanya event JavaScript.
- Set metadata per URL di template/server/build.
- JSON-LD dimasukkan sesuai halaman dan fakta yang tampil.
- Open Graph image absolut HTTPS.
- Jangan menggunakan gambar teks sebagai pengganti konten utama.
- Jangan menaruh informasi harga/isi hanya dalam gambar.
- Halaman penting harus memiliki konten unik dan cukup membantu.
- Hindari membuat banyak halaman kategori tipis yang berbeda hanya pada nama keyword.

## 17. Asset checklist

- Logo SVG dan versi raster fallback.
- Favicon SVG, PNG fallback, apple-touch-icon.
- Foto hero desktop/mobile bila diperlukan.
- Foto tiap paket dengan crop konsisten.
- Foto detail isi paket.
- Foto portofolio asli dengan izin.
- Foto proses/tim bila tersedia.
- OG image default dan template OG untuk artikel/paket.
- Ikon SVG yang ringan; hindari mengunduh banyak library ikon.
- Semua gambar dioptimasi, memiliki ukuran eksplisit, dan diuji di mobile.

## 18. Checklist quality assurance visual

- [ ] Warna konsisten dengan token.
- [ ] Kontras teks diuji untuk WCAG 2.2 AA.
- [ ] Focus ring terlihat.
- [ ] Navbar dan dropdown bisa dipakai keyboard dan touch.
- [ ] Tidak ada horizontal scroll yang tidak diinginkan.
- [ ] Semua tombol memiliki state hover/focus/active.
- [ ] Tombol WhatsApp tidak menutupi konten.
- [ ] Foto tidak pecah, terdistorsi, atau salah crop.
- [ ] Tidak ada klaim “best seller”, testimoni, logo, atau harga yang tidak terverifikasi.
- [ ] Reduced motion diuji.
- [ ] Layout diuji pada mobile dan desktop.
- [ ] Heading, alt text, canonical, OG, dan JSON-LD dicek per template.

## 19. Arahan implementasi

1. Gunakan HTML semantik dan Bootstrap untuk grid/utilitas/komponen.
2. Muat `bootstrap.min.css` lebih dulu, kemudian `style.css`.
3. Tambahkan Bootstrap JS bundle hanya untuk komponen interaktif Bootstrap yang dipakai.
4. Jangan menambahkan framework CSS lain.
5. Pisahkan CSS menjadi token, base, layout, components, utilities; hindari stylesheet besar tanpa struktur.
6. Gunakan komponen/template konsisten untuk kartu paket, breadcrumb, CTA, artikel, dan FAQ.
7. Pisahkan data katalog dari markup jika memungkinkan, walaupun situs tetap statis.
8. Buat metadata dan JSON-LD per halaman; jangan menyalin satu schema identik ke semua URL.
9. Uji performa dan aksesibilitas sebelum peluncuran.
10. Ganti seluruh placeholder dengan data bisnis yang telah diverifikasi.

## 20. Contoh struktur file

```text
/
├── index.html
├── tentang/
│   └── index.html
├── paket/
│   ├── index.html
│   ├── keluarga/index.html
│   ├── premium/index.html
│   ├── ekonomis/index.html
│   ├── perusahaan/index.html
│   └── custom/index.html
├── portofolio/index.html
├── blog/
│   ├── index.html
│   └── [slug]/index.html
├── faq/index.html
├── kontak/index.html
├── kebijakan-privasi/index.html
├── syarat-ketentuan/index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── images/
│   └── icons/
├── robots.txt
└── sitemap.xml
```

Untuk situs statis, pastikan konfigurasi hosting menangani URL berakhiran slash dan error 404 dengan benar. Jika struktur folder tidak cocok dengan hosting, sesuaikan rewrite rules tanpa mengubah URL canonical yang telah dipilih.
