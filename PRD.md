# PRD — Website Hampers Lebaran
**Versi:** 1.0  
**Tanggal:** 20 Oktober 2026  
**Status:** Draft siap ditinjau  
**Nama brand sementara:** Hampers Lebaran  
**Bahasa utama:** Indonesia  
**Stack:** HTML5, Bootstrap 5, CSS murni untuk styling khusus, JavaScript vanilla seperlunya

> **Catatan ruang lingkup:** “Bootstrap murni CSS” ditafsirkan sebagai menggunakan Bootstrap untuk sistem grid, utilitas, komponen, dan responsive layout, dengan stylesheet CSS buatan sendiri untuk identitas visual. Tidak menggunakan Tailwind, React, Vue, jQuery, atau framework UI tambahan. JavaScript Bootstrap hanya digunakan bila komponen memerlukannya (misalnya dropdown/navbar mobile). Konfirmasi versi Bootstrap yang dipilih saat implementasi; jangan menganggap angka versi atau fitur 2027 sebagai final tanpa pemeriksaan dokumentasi terbaru.

---

## 1. Ringkasan produk

Website katalog dan pemasaran hampers Lebaran yang menampilkan pilihan paket, membantu calon pembeli memahami isi dan harga paket, membangun kepercayaan, serta mengarahkan pertanyaan dan pemesanan ke WhatsApp **6282131087971**.

Website harus terasa premium, hangat, terpercaya, ringan, mudah digunakan di ponsel, serta siap dikembangkan menjadi katalog dengan halaman produk dan artikel SEO. Tahap pertama berfokus pada katalog dan lead generation, bukan checkout atau pembayaran online.

### Tujuan bisnis
1. Menghasilkan pertanyaan dan prospek berkualitas melalui WhatsApp.
2. Menampilkan paket hampers dengan isi, harga, opsi kustomisasi, dan ketentuan yang jelas.
3. Menumbuhkan kepercayaan lewat portofolio nyata, proses pemesanan, FAQ, dan informasi bisnis.
4. Mendapatkan trafik organik dari pencarian terkait hampers Lebaran, hampers perusahaan, dan hampers custom.
5. Memudahkan tim memperbarui katalog, foto, harga, stok, dan artikel.

### Bukan tujuan tahap pertama
- Checkout, akun pelanggan, keranjang, pembayaran online, atau pelacakan pesanan otomatis.
- Klaim peringkat Google, kutipan AI, atau rich result pasti.
- Menampilkan alamat toko, sertifikasi, testimoni, angka penjualan, stok, atau harga yang belum diverifikasi.
- Mengumpulkan data sensitif pengunjung.

## 2. Target pengguna

### Persona A — Pembeli keluarga
- Mencari hadiah Lebaran yang rapi, berkesan, dan sesuai anggaran.
- Perlu melihat isi paket, harga, foto asli, dan opsi pengiriman.
- CTA utama: “Tanya paket via WhatsApp”.

### Persona B — HR/GA/Procurement perusahaan
- Membutuhkan hampers karyawan, klien, mitra, atau pimpinan.
- Memerlukan harga berdasarkan kuantitas, branding kartu/logo, invoice, tenggat produksi, dan pengiriman massal.
- CTA utama: “Konsultasi hampers perusahaan”.

### Persona C — Panitia/instansi/komunitas
- Membutuhkan paket seragam dengan jumlah dan deadline tertentu.
- Perlu alur permintaan penawaran yang sederhana.
- CTA utama: “Minta penawaran”.

## 3. Proposisi nilai dan pesan

**Pesan utama:** “Hampers Lebaran yang berkesan, dikemas dengan perhatian pada setiap detail.”

Pesan pendukung (gunakan hanya jika sesuai operasional sebenarnya):
- Pilihan paket untuk keluarga, relasi, dan kebutuhan perusahaan.
- Opsi personalisasi kartu ucapan dan identitas perusahaan.
- Bantuan memilih paket berdasarkan anggaran dan jumlah penerima.
- Informasi isi, harga, dan estimasi produksi yang transparan.

Hindari klaim “termurah”, “nomor 1”, “pasti sampai”, “halal bersertifikat”, “stok tersedia”, atau “pengiriman seluruh Indonesia” sebelum dapat dibuktikan.

## 4. Sitemap dan navigasi

Navbar desktop:
1. **Beranda** → `/`
2. **Tentang** → `/tentang/`
3. **Paket** (dropdown)
   - Semua Paket → `/paket/`
   - Hampers Keluarga → `/paket/keluarga/`
   - Hampers Premium → `/paket/premium/`
   - Hampers Ekonomis → `/paket/ekonomis/`
   - Hampers Perusahaan → `/paket/perusahaan/`
   - Hampers Custom → `/paket/custom/`
4. **Portofolio** → `/portofolio/`
5. **Blog** → `/blog/`
6. CTA navbar: **Konsultasi WhatsApp**

Footer:
- Tentang kami
- Katalog paket
- Portofolio
- Blog
- FAQ
- Kebijakan Privasi
- Syarat & Ketentuan
- Kontak/WhatsApp
- Tautan media sosial resmi (hanya jika tersedia)

Halaman pendukung yang direkomendasikan:
- `/faq/`
- `/kontak/`
- `/kebijakan-privasi/`
- `/syarat-ketentuan/`
- `/cara-pesan/`
- `/paket/[slug]/` untuk setiap paket
- `/blog/[slug]/` untuk setiap artikel

## 5. Persyaratan konten per halaman

### 5.1 Beranda `/`
Urutan bagian:
1. **Hero**
   - H1 spesifik: “Hampers Lebaran untuk Keluarga, Klien, dan Karyawan”
   - Subheadline yang menjelaskan manfaat dan target pelanggan.
   - CTA primer: “Lihat Paket Hampers”
   - CTA sekunder: “Konsultasi via WhatsApp”
   - Foto hero berkualitas tinggi dari produk nyata.
2. **Trust strip**
   - Maksimal 3–4 poin faktual, misalnya opsi personalisasi, bantuan pemilihan paket, dan layanan pesanan jumlah banyak jika benar.
3. **Kategori paket**
   - Keluarga, premium, ekonomis, perusahaan, custom.
4. **Paket pilihan**
   - 3–6 kartu produk; foto, nama, ringkasan isi, harga atau “mulai dari” yang valid, CTA detail.
5. **Mengapa memilih kami**
   - Keunggulan yang dapat dibuktikan dan dijelaskan dengan contoh.
6. **Hampers perusahaan**
   - Informasi custom logo/kartu, kuantitas, timeline, permintaan penawaran.
7. **Portofolio pilihan**
   - Foto proyek nyata, jenis pesanan, kebutuhan klien (dengan izin).
8. **Cara pemesanan**
   - Pilih paket → konsultasi → konfirmasi isi/harga/jadwal → pembayaran sesuai ketentuan → produksi/pengiriman.
9. **Testimoni**
   - Hanya testimoni asli dengan izin; jangan membuat kutipan fiktif.
10. **FAQ ringkas**
    - 4–6 pertanyaan dengan tautan ke halaman FAQ lengkap.
11. **Artikel terbaru**
    - 3 artikel yang relevan.
12. **CTA penutup**
    - “Masih bingung memilih hampers? Ceritakan kebutuhan dan anggaran Anda.”
13. **Footer** lengkap.

### 5.2 Tentang `/tentang/`
- H1: “Tentang Hampers Lebaran”
- Cerita dan latar belakang brand (diisi dari fakta pemilik).
- Misi, prinsip kualitas, dan cara memilih produk.
- Foto tim/workspace/proses yang autentik jika tersedia.
- Siapa yang dilayani: keluarga, perusahaan, instansi, komunitas.
- Lokasi/area layanan hanya jika terverifikasi.
- CTA konsultasi.

### 5.3 Daftar paket `/paket/`
- H1 yang jelas.
- Intro singkat yang menjawab siapa yang cocok membeli.
- Filter kategori dan kisaran anggaran (jika katalog mendukung).
- Kartu paket dengan nama, gambar, harga/“mulai dari”, ringkasan isi, ketersediaan yang diperbarui, dan tautan detail.
- Catatan bahwa harga/isi dapat berubah hanya jika benar, serta tanggal pembaruan katalog.
- CTA konsultasi untuk pesanan custom.

### 5.4 Halaman detail paket `/paket/[slug]/`
Wajib menampilkan:
- Nama paket dan ringkasan nilai.
- Galeri foto produk nyata; alt text deskriptif.
- Harga pasti atau harga mulai dari yang jelas syaratnya.
- Daftar isi paket secara spesifik, ukuran/varian jika relevan.
- Pilihan personalisasi: kartu ucapan, nama penerima, logo, warna, kemasan (hanya opsi nyata).
- Minimum order (jika ada), kapasitas, estimasi produksi, batas pemesanan, wilayah/opsi pengiriman.
- Keterangan produk makanan, komposisi, tanggal kedaluwarsa, informasi alergen, dan sertifikasi hanya sesuai data pemasok/produk yang valid.
- Cara pemesanan dan ketentuan pembayaran.
- FAQ spesifik produk.
- Paket terkait.
- CTA WhatsApp yang membawa nama paket ke pesan awal.
- Breadcrumb yang terlihat dan BreadcrumbList JSON-LD.
- Product/Offer structured data hanya bila sesuai fakta dan pedoman platform.

### 5.5 Kategori hampers perusahaan `/paket/perusahaan/`
- H1: “Hampers Lebaran Perusahaan untuk Karyawan dan Relasi Bisnis”
- Kebutuhan yang dilayani: karyawan, klien, vendor, mitra, pimpinan.
- Opsi personalisasi dan branding yang benar-benar tersedia.
- Form permintaan penawaran (opsional; jika ada, minimalkan data).
- Field: nama, perusahaan (opsional), jumlah paket, anggaran per paket, tanggal dibutuhkan, kota tujuan, kebutuhan branding, catatan, nomor kontak.
- Alternatif langsung ke WhatsApp.
- Jelaskan kapan harga final bisa diberikan dan faktor yang memengaruhi harga.

### 5.6 Portofolio `/portofolio/`
- Foto proyek asli dengan izin penggunaan.
- Setiap proyek: konteks pesanan, jenis paket, kuantitas jika diizinkan, opsi personalisasi, dan hasil.
- Jangan menampilkan nama/logo klien tanpa izin.
- Filter kategori opsional.
- Alt text deskriptif; kompres gambar dan gunakan dimensi eksplisit.
- CTA “Diskusikan konsep hampers Anda”.

### 5.7 Blog `/blog/`
- Kategori editorial: inspirasi hampers, panduan anggaran, hampers perusahaan, kemasan & personalisasi, panduan pemesanan.
- Search/filter opsional jika jumlah artikel sudah cukup.
- Setiap kartu memuat judul, ringkasan unik, gambar, tanggal terbit/ubah, dan penulis/editor yang nyata.
- Hindari artikel tipis, repetitif, atau dibuat hanya untuk mengejar kata kunci.

### 5.8 Template artikel `/blog/[slug]/`
- Judul yang menjawab intent pencarian.
- Penulis/editor dan bio singkat yang faktual.
- Tanggal terbit dan tanggal pembaruan jika ada perubahan substansial.
- Daftar isi untuk artikel panjang.
- Jawaban singkat langsung setelah pengantar.
- H2/H3 yang deskriptif, contoh nyata, tabel/checklist jika membantu.
- Foto asli atau visual berlisensi, caption, alt text.
- Referensi sumber eksternal untuk fakta yang perlu diverifikasi.
- Internal link menuju kategori dan paket relevan.
- CTA yang sesuai konteks, bukan mengganggu pembaca.
- Artikel terkait.
- Article/BlogPosting JSON-LD yang cocok dengan konten yang terlihat.

### 5.9 FAQ `/faq/`
Pertanyaan awal yang perlu dijawab:
- Bagaimana cara memesan hampers?
- Apakah isi paket bisa disesuaikan?
- Apakah tersedia kartu ucapan atau logo perusahaan?
- Apakah ada minimum order?
- Berapa lama waktu produksi?
- Apakah bisa memesan dalam jumlah besar?
- Bagaimana biaya dan jangkauan pengiriman?
- Metode pembayaran apa yang tersedia?
- Bagaimana jika ada produk yang kosong?
- Bagaimana kebijakan pembatalan/perubahan pesanan?
- Bagaimana penanganan produk makanan dan informasi alergen?

Jawaban harus sesuai kebijakan bisnis aktual. FAQ boleh menggunakan markup FAQPage yang valid secara Schema.org, tetapi jangan menjanjikan rich result Google; tampilan FAQ di Google sangat dibatasi dan markup harus sesuai konten yang terlihat.

### 5.10 Kontak `/kontak/`
- Nomor WhatsApp dan tombol chat.
- Email/alamat/jam layanan hanya jika benar.
- Form singkat opsional.
- Area layanan dan kanal resmi.
- Ekspektasi waktu respons hanya jika bisa dipenuhi.
- Peta hanya bila alamat fisik nyata dan ingin dipublikasikan.

### 5.11 Kebijakan privasi dan syarat
Jelaskan data yang dikumpulkan, tujuan, dasar/ketentuan pemrosesan yang berlaku, masa penyimpanan, pihak ketiga, hak pengguna, kontak privasi, cookies/analytics, serta cara meminta penghapusan/perbaikan. Tinjau kepatuhan terhadap peraturan Indonesia yang relevan sebelum publikasi. Syarat mencakup harga, pembayaran, produksi, pengiriman, perubahan, pembatalan, kerusakan, dan pengembalian dana.

## 6. Alur WhatsApp

Nomor tujuan: `6282131087971`  
Format URL: `https://wa.me/6282131087971?text={URL_ENCODED_MESSAGE}`

Pesan default beranda:
> Halo Hampers Lebaran, saya ingin konsultasi hampers Lebaran. Mohon informasi paket, harga, isi, dan estimasi pemesanan.

Pesan dari detail paket:
> Halo Hampers Lebaran, saya tertarik dengan paket [NAMA PAKET]. Mohon informasi harga, isi paket, minimum order, dan estimasi produksi.

Pesan perusahaan:
> Halo Hampers Lebaran, saya ingin meminta penawaran hampers Lebaran perusahaan. Perkiraan jumlah: [JUMLAH]. Anggaran per paket: [ANGGARAN]. Tanggal dibutuhkan: [TANGGAL]. Kota tujuan: [KOTA].

Persyaratan:
- Gunakan URL-encoding yang benar untuk isi pesan.
- Buka link secara aman jika menggunakan `target="_blank"` (`rel="noopener noreferrer"`).
- Teks CTA harus jelas; ikon WhatsApp tidak boleh menjadi satu-satunya label.
- Tombol floating tidak menutupi CTA, cookie notice, atau konten penting pada layar kecil.
- Tidak boleh mengirim pesan otomatis tanpa tindakan pengguna.
- Lacak klik CTA secara agregat jika analytics dipakai, dengan pemberitahuan privasi yang sesuai.

## 7. SEO, AEO, GEO, dan metadata

### 7.1 Fondasi SEO on-page
- Satu H1 utama yang deskriptif per halaman.
- Title unik, ringkas, mencerminkan intent dan brand.
- Meta description unik, informatif, tidak dijejali keyword.
- URL pendek, stabil, mudah dibaca, huruf kecil, tanda hubung.
- Canonical absolut untuk URL utama setiap halaman.
- Internal linking kontekstual antar kategori, paket, artikel, FAQ, dan cara pesan.
- Breadcrumb visual dan structured data.
- Konten utama tersedia dalam HTML yang dapat dirayapi; jangan hanya muncul setelah interaksi.
- Tidak ada keyword stuffing, doorway pages, atau halaman lokasi palsu.
- Set `lang="id"` dan ejaan Bahasa Indonesia yang konsisten.
- Buat halaman 404 berguna, redirect 301 untuk URL yang berubah, dan hindari rantai redirect.

### 7.2 SEO teknis
- `robots.txt` yang tidak memblokir CSS/JS penting dan tidak memblokir halaman yang perlu diindeks.
- `sitemap.xml` berisi URL canonical yang layak diindeks, dengan `lastmod` yang akurat.
- Google Search Console dan Bing Webmaster Tools.
- HTTPS, satu versi domain canonical, redirect konsisten www/non-www.
- Status HTTP benar (200, 301, 404); halaman staging memakai autentikasi atau `noindex` dan tidak masuk sitemap.
- Tidak menggunakan `noindex` pada halaman penting.
- Mobile-first responsive design.
- Gambar WebP/AVIF dengan fallback sesuai kebutuhan, `width`/`height`, `srcset`/`sizes`, lazy-load untuk gambar di bawah fold; jangan lazy-load hero/LCP image.
- Font lokal/subset jika memungkinkan, `font-display: swap`, minimalkan third-party scripts.
- Hindari layout shift, plugin berat, dan efek animasi berlebihan.
- Target Core Web Vitals yang direkomendasikan: LCP ≤ 2,5 detik, INP ≤ 200 ms, CLS ≤ 0,1 pada persentil ke-75, diukur dari data lapangan bila tersedia.
- Gunakan Lighthouse/PageSpeed Insights, Search Console, Rich Results Test, dan Schema Markup Validator sebagai alat pemeriksaan.

### 7.3 AEO — Answer Engine Optimization
Tujuan: membuat jawaban di halaman mudah dipahami pengguna dan sistem pencarian/answer engine, tanpa menjanjikan kutipan otomatis.
- Jawab pertanyaan utama dengan jelas dalam 1–3 kalimat di awal bagian.
- Gunakan H2/H3 berbentuk pertanyaan bila natural.
- Sertakan fakta konkret: isi paket, kisaran harga aktual, minimum order, waktu produksi, opsi personalisasi, wilayah pengiriman.
- Tabel perbandingan paket dan checklist praktis bila benar-benar membantu.
- Gunakan istilah konsisten dan definisikan istilah yang berpotensi ambigu.
- Tampilkan sumber dan tanggal pembaruan untuk informasi yang mudah berubah.
- Pastikan jawaban lengkap tetap tersedia dalam HTML, bukan hanya di gambar atau chat widget.
- FAQ harus berguna bagi manusia; jangan menambahkan pertanyaan repetitif hanya untuk markup.

### 7.4 GEO — Generative Engine Optimization
GEO bukan standar markup tunggal dan tidak menjamin disebut oleh AI. Praktik editorial:
- Publikasikan informasi bisnis yang konsisten, faktual, mudah diverifikasi, dan tersedia pada halaman About/Contact.
- Buat halaman paket dengan detail asli, foto autentik, harga/kondisi yang transparan, dan pembeda yang jelas.
- Tulis artikel berpengalaman/bermanfaat, bukan parafrasa massal dari artikel lain.
- Cantumkan penulis/editor yang nyata, tanggal publikasi dan pembaruan yang jujur, sumber, dan metodologi bila relevan.
- Gunakan entitas dan nama brand konsisten; tautkan profil resmi yang benar melalui `sameAs`.
- Dapatkan penyebutan/link dari mitra, media, atau direktori tepercaya secara wajar; hindari pembelian tautan spam.
- Jaga konten publik tetap dapat diakses crawler yang relevan sesuai kebijakan bisnis; tinjau kebijakan bot masing-masing platform.
- Jangan membuat halaman “untuk AI” yang menyembunyikan konten dari manusia atau membuat klaim tanpa bukti.

### 7.5 Metadata HTML per halaman
Setiap halaman harus punya:
- `<title>`
- `<meta name="description">`
- `<meta name="robots">` sesuai status indeks
- `<link rel="canonical">`
- `<html lang="id">`
- Open Graph: `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`, `og:image:alt`, `og:locale` (`id_ID`)
- Twitter/X: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`
- favicon, SVG icon, apple-touch-icon, web manifest opsional
- theme-color
- hreflang hanya jika ada versi bahasa/negara alternatif yang benar-benar berbeda.

Rekomendasi gambar sosial: gambar unik per paket/artikel bila layak, gambar absolut HTTPS, representatif, resolusi memadai (contoh 1200×630), dan tidak berisi teks kecil yang sulit dibaca.

### 7.6 Schema.org JSON-LD
Gunakan JSON-LD, valid, dan sinkron dengan konten yang terlihat:
- Homepage: `Organization` atau subtype paling sesuai; pertimbangkan `OnlineStore` jika model bisnis dan definisinya cocok.
- Breadcrumb halaman dalam: `BreadcrumbList`.
- Detail paket: `Product` + `Offer` hanya jika produk/harga/ketersediaan benar dan halaman memenuhi pedoman; katalog lead-generation mungkin perlu penyesuaian.
- Artikel: `Article` atau `BlogPosting`, `Person`/`Organization` sebagai author/publisher yang benar, `datePublished`, `dateModified`, `image`, `headline`, `mainEntityOfPage`.
- Website: `WebSite` dengan `name`, `url`, `publisher`; jangan menambahkan `SearchAction` jika fitur pencarian situs tidak ada atau implementasinya tidak sesuai.
- `LocalBusiness` hanya jika ada bisnis/lokasi fisik nyata dengan informasi yang benar; jangan mengarang alamat atau koordinat.
- `FAQPage` hanya bila sesuai; jangan mengharapkan FAQ rich result.
- `Review`/`AggregateRating` hanya untuk review asli yang dapat diverifikasi dan memenuhi kebijakan; jangan membuat rating palsu.
- Jangan menandai konten tersembunyi, harga tidak akurat, atau ulasan yang tidak terlihat.
- Hubungkan entitas antar markup menggunakan `@id` yang stabil.
- Validasi dengan Schema.org Validator dan Google Rich Results Test; Google tidak mendukung semua tipe Schema.org untuk tampilan khusus.

### 7.7 Open Graph dan social sharing
- Set `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:image:alt`, `og:site_name`, `og:locale`.
- Artikel: `og:type=article`, plus metadata artikel jika relevan.
- Halaman paket: gunakan `website` atau `product` sesuai implementasi dan platform; Open Graph bukan pengganti Product JSON-LD.
- Twitter/X card: `summary_large_image`.
- Hindari URL gambar relatif, gambar yang diblokir, dan gambar yang tidak merepresentasikan konten.
- Uji preview pada debugger/validator platform saat publikasi.

### 7.8 Keyword & rencana konten
Keyword adalah hipotesis awal, bukan janji volume pencarian:
- hampers Lebaran
- hampers Lebaran premium
- hampers Lebaran perusahaan
- hampers untuk karyawan
- hampers untuk klien
- hampers Lebaran custom
- paket hampers Lebaran
- hampers Lebaran sesuai budget
- ide hampers untuk relasi bisnis
- cara memilih hampers Lebaran perusahaan

Pemetaan:
- Beranda: hampers Lebaran + brand/value proposition.
- Kategori perusahaan: hampers Lebaran perusahaan, hampers karyawan/klien.
- Kategori premium/ekonomis: intent sesuai kategori dan harga aktual.
- Detail paket: nama paket + karakteristik yang benar.
- Blog: pertanyaan informasional dan panduan pembelian; hindari menargetkan keyword sama secara identik pada banyak halaman.

## 8. Aksesibilitas dan UX
- Kontras teks memenuhi WCAG 2.2 AA sebagai target.
- Semua fungsi bisa dipakai dengan keyboard; focus state terlihat.
- Navbar dropdown mendukung keyboard, tap, dan layar sentuh.
- Gunakan label form yang terlihat, pesan error yang jelas, dan instruksi format.
- Alt text menjelaskan foto produk; gambar dekoratif memakai alt kosong.
- Jangan memakai warna saja untuk menyampaikan status.
- Tombol dan link memiliki label yang bermakna; area sentuh nyaman.
- Hormati `prefers-reduced-motion`.
- Modal/accordion/dropdown harus berfungsi dengan benar pada mobile dan keyboard.
- Jangan membuat teks terlalu kecil atau tombol WhatsApp menutupi konten.

## 9. Performa dan keamanan
- Gunakan Bootstrap versi stabil yang telah diverifikasi saat implementasi.
- Muat CSS custom setelah Bootstrap.
- Hindari `!important` berlebihan dan CSS duplikat.
- Gunakan dependensi minimum, pin versi, dan perbarui secara terencana.
- Sanitasi input form bila dikirim ke backend; jangan menyimpan rahasia API di frontend.
- Form harus memiliki proteksi spam yang proporsional.
- Terapkan HTTPS, security headers di server bila tersedia, dan Content Security Policy secara bertahap setelah menguji semua asset.
- Tidak mengumpulkan data yang tidak diperlukan.
- Jika analytics/cookies digunakan, dokumentasikan sesuai aturan yang berlaku dan preferensi pengguna.
- Backup source dan data konten; gunakan staging untuk perubahan besar.

## 10. Analitik dan KPI
KPI awal (tetapkan baseline setelah peluncuran):
- Klik WhatsApp total dan per halaman.
- Klik CTA paket, kategori, dan konsultasi perusahaan.
- Form penawaran dimulai/terkirim (jika ada).
- Organic impressions, clicks, CTR, dan posisi dari Search Console.
- Landing pages organik dan engagement berkualitas.
- Core Web Vitals dan error 404.
- Rasio prospek yang memenuhi kriteria bisnis, bila tim mencatatnya secara sah.

Jangan menjadikan posisi ranking tunggal sebagai ukuran keberhasilan. Gunakan event agregat, minimalkan data pribadi, dan beri pemberitahuan yang sesuai.

## 11. Acceptance criteria

### Visual & responsif
- [ ] Navbar sesuai urutan dan dropdown Paket berfungsi.
- [ ] Layout nyaman pada lebar 320 px, ponsel, tablet, laptop, dan desktop.
- [ ] Tidak ada horizontal overflow pada viewport normal.
- [ ] Foto produk tidak gepeng/terpotong tanpa sengaja.
- [ ] Warna dan komponen mengikuti `design.md`.

### Konversi
- [ ] Semua CTA WhatsApp mengarah ke `https://wa.me/6282131087971`.
- [ ] Pesan awal di-encode dengan benar dan sesuai konteks halaman.
- [ ] CTA dapat digunakan dengan keyboard dan layar sentuh.
- [ ] Tidak ada klaim produk/harga/ketersediaan palsu.

### SEO
- [ ] Title, description, canonical, H1, OG, dan Twitter metadata unik per halaman.
- [ ] `robots.txt` dan sitemap valid; URL canonical konsisten.
- [ ] JSON-LD valid dan sesuai konten terlihat.
- [ ] Semua gambar penting memiliki alt text, dimensi, dan format/performa yang layak.
- [ ] Tidak ada halaman staging yang terindeks.
- [ ] GSC/Bing Webmaster Tools dikonfigurasi setelah domain tersedia.

### Kualitas
- [ ] HTML semantik dan tidak ada error console penting.
- [ ] Keyboard, focus, form, dropdown, dan reduced-motion diuji.
- [ ] PageSpeed/Lighthouse diuji pada halaman utama, kategori, detail paket, dan artikel.
- [ ] Privasi dan syarat ditinjau sebelum publikasi.
- [ ] Semua konten bisnis yang belum diketahui ditandai untuk dilengkapi, bukan diisi dengan fakta rekaan.

## 12. Risiko dan asumsi
- Harga, isi paket, stok, minimum order, wilayah layanan, alamat, email, kebijakan pengiriman, serta identitas legal belum diberikan.
- Nama “Hampers Lebaran” hanya placeholder dan harus diganti jika brand resmi berbeda.
- Target 2026–2027 berarti praktik perlu ditinjau lagi saat peluncuran. Tidak ada teknik yang menjamin ranking, rich results, atau jawaban AI.
- Jika kemudian diperlukan CMS, checkout, inventori, atau multi-bahasa, evaluasi sebagai fase terpisah.

## 13. Sumber resmi untuk validasi saat implementasi
Dokumentasi dapat berubah; periksa kembali saat development/release:
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Google LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google ecommerce structured data: https://developers.google.com/search/docs/specialty/ecommerce/include-structured-data-relevant-to-ecommerce
- Schema.org: https://schema.org/
- Schema.org Product: https://schema.org/Product
- Schema.org Offer: https://schema.org/Offer
- Schema.org BreadcrumbList: https://schema.org/BreadcrumbList
- Bootstrap documentation: https://getbootstrap.com/docs/
- Web.dev Core Web Vitals: https://web.dev/articles/vitals
