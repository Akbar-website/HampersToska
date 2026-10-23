// Prefix path untuk halaman di subfolder (paket/, blog/)
const BASE_PATH = /\/(?:paket|blog)\/[^/]*$/.test(window.location.pathname) ? '../' : '';
/**
 * Souvenir Event — main.js
 * Vanilla JS: navbar scroll, fade-in observer, WA builder, mobile menu, filter
 */

(function () {
  'use strict';

  /* ============================================================
     WhatsApp URL builder
  ============================================================ */
  const WA_PHONE = '6282131087971';

  function buildWhatsAppUrl(message) {
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
  }

  window.buildWhatsAppUrl = buildWhatsAppUrl;

  /* Default messages */
  const WA_MSG_DEFAULT =
    'Halo Souvenir Event, saya ingin konsultasi Souvenir Event. Mohon informasi paket, harga, isi, dan estimasi pemesanan.';

  const WA_MSG_CORPORATE =
    'Halo Souvenir Event, saya ingin meminta penawaran Souvenir Event perusahaan. Mohon informasi harga, minimum order, dan opsi kustomisasi.';

  /* Set all WA links on page */
  function initWhatsAppLinks() {
    document.querySelectorAll('[data-wa-msg]').forEach(function (el) {
      const msgKey = el.getAttribute('data-wa-msg');
      let msg = WA_MSG_DEFAULT;
      if (msgKey === 'corporate') msg = WA_MSG_CORPORATE;
      else if (msgKey) msg = msgKey;
      el.href = buildWhatsAppUrl(msg);
      el.rel = 'noopener noreferrer';
      el.target = '_blank';
    });
  }

  /* ============================================================
     Navbar scroll effect (Optimized with rAF to prevent forced reflow)
  ============================================================ */
  function initNavbarScroll() {
    const navbar = document.querySelector('.site-navbar');
    if (!navbar) return;

    let ticking = false;
    let isScrolled = false;

    function updateNavbar() {
      const scrolled = window.scrollY > 40;
      if (scrolled !== isScrolled) {
        isScrolled = scrolled;
        if (isScrolled) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // Defer initial check to rAF so it never causes a forced reflow on DCL
    requestAnimationFrame(function () {
      if ((window.scrollY || window.pageYOffset || 0) > 0) updateNavbar();
    });
  }

  /* ============================================================
     Mark active nav link
  ============================================================ */
  function initActiveNav() {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
      const href = (link.getAttribute('href') || '').replace(/\/$/, '');
      if (href && href !== '' && currentPath.startsWith(href)) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else if (href === '/' && currentPath === '') {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ============================================================
     Intersection Observer — fade-up reveal
  ============================================================ */
  function initFadeUp() {
    const els = document.querySelectorAll('.fade-up');
    if (!els.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ============================================================
     Package filter (paket page)
  ============================================================ */
  function initPackageFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.package-card-wrapper');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const cat = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = '';
            card.setAttribute('aria-hidden', 'false');
          } else {
            card.style.display = 'none';
            card.setAttribute('aria-hidden', 'true');
          }
        });
      });
    });
  }

  /* ============================================================
     Corporate quote form → builds WA link
  ============================================================ */
  function initQuoteForm() {
    const form = document.getElementById('quoteForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      const name = (form.querySelector('#quoteName') || {}).value || '';
      const company = (form.querySelector('#quoteCompany') || {}).value || '';
      const qty = (form.querySelector('#quoteQty') || {}).value || '';
      const budget = (form.querySelector('#quoteBudget') || {}).value || '';
      const date = (form.querySelector('#quoteDate') || {}).value || '';
      const city = (form.querySelector('#quoteCity') || {}).value || '';
      const branding = (form.querySelector('#quoteBranding') || {}).value || '';
      const notes = (form.querySelector('#quoteNotes') || {}).value || '';
      const phone = (form.querySelector('#quotePhone') || {}).value || '';

      let msg = `Halo Souvenir Event, saya ingin meminta penawaran Souvenir Event perusahaan.\n\n`;
      msg += `Nama: ${name}\n`;
      if (company) msg += `Perusahaan: ${company}\n`;
      msg += `Jumlah paket: ${qty}\n`;
      if (budget) msg += `Anggaran per paket: ${budget}\n`;
      if (date) msg += `Tanggal dibutuhkan: ${date}\n`;
      if (city) msg += `Kota tujuan: ${city}\n`;
      if (branding) msg += `Kebutuhan branding: ${branding}\n`;
      if (notes) msg += `Catatan: ${notes}\n`;
      if (phone) msg += `Nomor kontak: ${phone}\n`;

      const url = buildWhatsAppUrl(msg);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  /* ============================================================
     Smooth anchor scroll
  ============================================================ */
  function initSmoothAnchor() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const navbar = document.querySelector('.site-navbar');
        const offset = navbar ? navbar.offsetHeight + 16 : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ============================================================
     Copyright year
  ============================================================ */
  function initCopyrightYear() {
    document.querySelectorAll('.js-year').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ============================================================
     Package Data Dictionary & Interactive Modal
  ============================================================ */
  const PACKAGES_DATA = {
    'silaturahmi': {
      id: 'silaturahmi',
      title: 'Paket Silaturahmi',
      category: 'Souvenir Keluarga',
      badgeIcon: '🏡',
      price: 'Rp 385.000 – Rp 450.000',
      priceNote: 'Harga final dikonfirmasi sesuai pilihan isi & jumlah pesanan saat konsultasi',
      image: BASE_PATH + 'assets/img/set-pouch-tumbler-dompet-640.webp',
      imageAlt: 'Gift set hardbox hitam berisi pouch organizer, tumbler mini, dan dompet kulit',
      desc: 'Gift set eksklusif untuk mempererat silaturahmi dengan keluarga besar dan sahabat tercinta. Berisi pouch organizer, tumbler mini tutup kayu, dan dompet kulit hitam yang tertata rapi dalam hardbox hitam premium.',
      items: [
        'Pouch Organizer Hitam (kain bertekstur, resleting, strip aksen)',
        'Tumbler Mini Hitam Tutup Kayu (finishing doff, dengan pegangan)',
        'Dompet Kulit Hitam (model lipat, plakat logam kecil)',
        'Hardbox Hitam Premium dengan busa insert dan tutup terpisah'
      ],
      specs: [
        { label: 'Kemasan', value: 'Rigid Hardbox Hitam dengan Busa Insert' },
        { label: 'Min. Order', value: '1 Paket (Bisa Satuan)' },
        { label: 'Waktu Produksi', value: '1–2 Hari Kerja' },
        { label: 'Isi Paket', value: '3 Item + Hardbox' }
      ],
      personalization: 'Gratis Kartu Ucapan Custom (Nama Pengirim & Penerima). Tanyakan juga opsi penambahan logo atau nama pada produk.',
      waText: 'Halo Souvenir Event, saya tertarik memesan Paket Silaturahmi. Mohon informasi ketersediaan, rincian isi, dan jadwal pengiriman.',
      detailUrl: BASE_PATH + 'paket/silaturahmi.html'
    },
    'prestige': {
      id: 'prestige',
      title: 'Paket Prestige',
      category: 'Souvenir Premium',
      badgeIcon: '✨',
      price: 'Rp 850.000 – Rp 1.250.000',
      priceNote: 'Pilihan tier luxury gift untuk relasi penting & VIP',
      image: BASE_PATH + 'assets/img/set-botol-jam-diffuser-640.webp',
      imageAlt: 'Premium gift set dalam hardbox hitam berisi botol minum, earbuds, diffuser kayu, dan jam digital',
      desc: 'Pengalaman gifting tingkat tinggi berkelas eksklusif. Dirancang khusus untuk memukau relasi bisnis penting, mitra strategis, serta keluarga terhormat dengan kombinasi botol minum, earbuds nirkabel, diffuser kayu, dan jam digital dalam hardbox hitam premium.',
      items: [
        'Botol Minum Hitam Doff dengan Tali Gantung (stainless, finishing matte)',
        'Earbuds Nirkabel dengan Charging Case (warna gelap, ringkas dan praktis)',
        'Aroma Diffuser Kayu Bentuk Tetesan (motif serat kayu, cocok untuk meja kerja)',
        'Jam Digital Meja dengan Tampilan Suhu, Kelembapan & Tanggal',
        'Hardbox Hitam Premium dengan Busa Insert dan Tutup bertuliskan "Premium Gift Set"'
      ],
      specs: [
        { label: 'Kemasan', value: 'Premium Hardbox Hitam dengan Busa Insert' },
        { label: 'Min. Order', value: '1 Paket' },
        { label: 'Waktu Produksi', value: '2–3 Hari Kerja' },
        { label: 'Isi Paket', value: '4 Item + Hardbox' }
      ],
      personalization: 'Kartu ucapan eksklusif dengan nama pengirim & penerima. Tanyakan opsi cetak atau grafir logo/nama pada produk dan tutup box.',
      waText: 'Halo Souvenir Event, saya ingin memesan Paket Prestige Premium. Mohon penawaran harga khusus dan opsi pengiriman eksklusif.',
      detailUrl: BASE_PATH + 'paket/prestige.html'
    },
    'sahabat': {
      id: 'sahabat',
      title: 'Paket Sahabat',
      category: 'Souvenir Ekonomis',
      badgeIcon: '💚',
      price: 'Rp 175.000 – Rp 225.000',
      priceNote: 'Sangat terjangkau untuk berbagi dalam jumlah banyak',
      image: BASE_PATH + 'assets/img/set-notebook-pen-earbuds-640.webp',
      imageAlt: 'Gift set hardbox hitam berisi notebook, pulpen, dan earbuds',
      desc: 'Berbagi apresiasi tidak harus mahal. Paket Sahabat berisi notebook, pulpen, dan earbuds nirkabel dalam hardbox hitam yang kokoh dan estetik. Praktis dipakai sehari-hari dan cocok dibagikan kepada banyak orang sekaligus.',
      items: [
        'Notebook Hitam Cover Tekstur dengan Tali Elastis Penutup',
        'Pulpen Hitam dengan Klip Logam (tinta lancar, nyaman digenggam)',
        'Earbuds Nirkabel Hitam dengan Charging Case',
        'Hardbox Hitam dengan Busa Insert dan Tutup Terpisah'
      ],
      specs: [
        { label: 'Kemasan', value: 'Rigid Hardbox Hitam dengan Busa Insert' },
        { label: 'Min. Order', value: '3 Paket' },
        { label: 'Waktu Produksi', value: '1–2 Hari Kerja' },
        { label: 'Isi Paket', value: '3 Item + Hardbox' }
      ],
      personalization: 'Kartu ucapan dengan nama pengirim/komunitas tercetak rapi. Tanyakan opsi cetak logo atau nama pada notebook dan pulpen.',
      waText: 'Halo Souvenir Event, saya ingin konsultasi Paket Sahabat Ekonomis. Mohon info harga grosir dan jadwal pengiriman.',
      detailUrl: BASE_PATH + 'paket/sahabat.html'
    },
    'korporat': {
      id: 'korporat',
      title: 'Paket Korporat',
      category: 'Souvenir Perusahaan',
      badgeIcon: '🏢',
      price: 'Mulai Rp 250.000 – Rp 1.500.000+',
      priceNote: 'Harga berjenjang sesuai tier anggaran & jumlah pesanan perusahaan',
      image: BASE_PATH + 'assets/img/set-powerbank-notebook-botol-640.webp',
      imageAlt: 'Premium gift set berisi tumbler, jam, notebook, dan powerbank dalam hardbox hitam',
      desc: 'Solusi lengkap bagi divisi HR, GA, dan Procurement perusahaan. Berisi tumbler, jam tangan, notebook, dan powerbank dalam hardbox hitam premium. Tersedia custom branding logo perusahaan pada box, kartu ucapan, dan produk, serta sistem pengiriman multi-alamat.',
      items: [
        'Tumbler Hitam-Abu Doff (cocok untuk grafir atau sablon logo perusahaan)',
        'Jam Tangan Hitam dengan Strap (tampilan minimalis dan elegan)',
        'Notebook Hitam Cover Tekstur dengan Tali Elastis Penutup',
        'Powerbank dengan Layar Digital Indikator Baterai',
        'Hardbox Hitam Premium dengan Busa Insert dan Tutup Terpisah',
        'Dokumen Invoice Resmi Perusahaan (Faktur Pajak & Kwitansi)'
      ],
      specs: [
        { label: 'Kemasan', value: 'Hardbox Hitam Custom Logo dengan Busa Insert' },
        { label: 'Min. Order', value: '10 Paket' },
        { label: 'Waktu Produksi', value: '5–10 Hari Kerja' },
        { label: 'Pengiriman', value: 'Multi-Alamat (Kantor & Rumah Karyawan)' }
      ],
      personalization: 'Full Branding: logo perusahaan pada tutup box dan produk (sablon/grafir), kartu ucapan pesan direksi.',
      waText: 'Halo Souvenir Event, saya dari perusahaan ingin meminta penawaran resmi untuk Paket Souvenir Korporat.',
      detailUrl: BASE_PATH + 'paket/perusahaan.html'
    },
    'barokah': {
      id: 'barokah',
      title: 'Paket Barokah',
      category: 'Souvenir Keluarga Spesial',
      badgeIcon: '🏡',
      price: 'Rp 520.000 – Rp 620.000',
      priceNote: 'Paket komplit untuk momen kumpul hari raya keluarga besar',
      image: BASE_PATH + 'assets/img/set-jam-tumbler-pen-640.webp',
      imageAlt: 'Premium gift set berisi jam digital, jam tangan, pulpen, dan tumbler dalam hardbox hitam',
      desc: 'Paket keluarga dengan isi yang lebih lengkap dan berkelas. Berisi jam digital meja, jam tangan, pulpen, dan tumbler dalam hardbox hitam premium. Cocok untuk orang tua, mertua, maupun keluarga besar yang dihormati.',
      items: [
        'Jam Digital Meja dengan Tampilan Waktu, Tanggal, Kelembapan & Suhu',
        'Jam Tangan Hitam dengan Strap (tampilan minimalis dan elegan)',
        'Pulpen Hitam dengan Klip Logam (nyaman digenggam)',
        'Tumbler Hitam Doff dengan Tutup dan Rim Stainless',
        'Hardbox Hitam Premium dengan Busa Insert dan Tutup Terpisah'
      ],
      specs: [
        { label: 'Kemasan', value: 'Rigid Hardbox Hitam dengan Busa Insert' },
        { label: 'Min. Order', value: '1 Paket' },
        { label: 'Waktu Produksi', value: '2–3 Hari Kerja' },
        { label: 'Isi Paket', value: '4 Item + Hardbox' }
      ],
      personalization: 'Kartu Ucapan Eksklusif dengan Nama Keluarga/Pengirim. Tanyakan opsi grafir atau cetak nama pada tumbler dan pulpen.',
      waText: 'Halo Souvenir Event, saya tertarik memesan Paket Barokah Keluarga. Mohon konfirmasi jadwal dan biaya pengiriman.',
      detailUrl: BASE_PATH + 'paket/barokah.html'
    },
    'custom': {
      id: 'custom',
      title: 'Paket Custom',
      category: 'Souvenir Custom',
      badgeIcon: '🎨',
      price: 'Menyesuaikan Budget & Spesifikasi',
      priceNote: 'Konsultasi gratis tanpa biaya komitmen awal',
      image: BASE_PATH + 'assets/img/set-botol-notebook-kartu-640.webp',
      imageAlt: 'Gift set hardbox hitam berisi botol minum, pulpen, notebook, dan card holder',
      desc: 'Fleksibilitas tanpa batas! Kamu bebas menentukan setiap komponen souvenir: memilih jenis produk, jumlah item, branding logo atau nama, hingga dimensi dan warna box kemasan. Contoh kombinasi: botol minum, pulpen, notebook, dan card holder dalam hardbox hitam.',
      items: [
        'Pilihan Produk: Botol Minum / Tumbler, Notebook, Pulpen, Card Holder, Dompet, Pouch, Powerbank, Earbuds, Jam, Diffuser',
        'Pilihan Warna dan Finishing Produk Sesuai Selera atau Warna Brand',
        'Opsi Branding: Sablon, Grafir, atau Emboss Logo / Nama pada Produk dan Box',
        'Pilihan Kotak: Rigid Hardbox dengan Busa Insert, Box Magnetik, atau Ukuran Khusus',
        'Bebas Desain Tema Kartu Ucapan'
      ],
      specs: [
        { label: 'Kemasan', value: 'Custom Sesuai Selera (Hardbox, Busa Insert, Ukuran Khusus)' },
        { label: 'Min. Order', value: 'Fleksibel (Mulai dari 1 Paket)' },
        { label: 'Waktu Produksi', value: '3–7 Hari (Tergantung Kerumitan)' },
        { label: 'Konsultasi', value: 'Free Mockup & Rekomendasi Katalog' }
      ],
      personalization: '100% Kustomisasi sesuai keinginan Anda atau brand perusahaan.',
      waText: 'Halo Souvenir Event, saya ingin merancang Paket Souvenir Custom dengan anggaran dan isi tertentu. Mohon bantuannya.',
      detailUrl: BASE_PATH + 'paket/custom.html'
    }
  };

  window.PACKAGES_DATA = PACKAGES_DATA;

  function initPackageModal() {
    const modalEl = document.getElementById('packageDetailModal');
    if (!modalEl) return;

    function openModalForPackage(pkgKey) {
      const pkg = PACKAGES_DATA[pkgKey];
      if (!pkg) return;

      const titleEl = modalEl.querySelector('#modalPkgTitle');
      const badgeEl = modalEl.querySelector('#modalPkgBadge');
      const imgEl = modalEl.querySelector('#modalPkgImage');
      const priceEl = modalEl.querySelector('#modalPkgPrice');
      const descEl = modalEl.querySelector('#modalPkgDesc');
      const itemsEl = modalEl.querySelector('#modalPkgItems');
      const specsEl = modalEl.querySelector('#modalPkgSpecs');
      const persEl = modalEl.querySelector('#modalPkgPersonalization');
      const waBtn = modalEl.querySelector('#modalPkgWaBtn');
      const fullLnk = modalEl.querySelector('#modalPkgFullLink');

      if (titleEl) titleEl.textContent = pkg.title;
      if (badgeEl) badgeEl.innerHTML = `<span>${pkg.badgeIcon}</span> ${pkg.category}`;
      if (imgEl) {
        imgEl.src = pkg.image;
        imgEl.alt = pkg.imageAlt;
      }
      if (priceEl) {
        priceEl.innerHTML = `${pkg.price} <small>${pkg.priceNote}</small>`;
      }
      if (descEl) descEl.textContent = pkg.desc;

      if (itemsEl) {
        itemsEl.innerHTML = pkg.items.map(function (item) {
          return `<li><svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> <span>${item}</span></li>`;
        }).join('');
      }

      if (specsEl) {
        specsEl.innerHTML = pkg.specs.map(function (sp) {
          return `<div class="spec-item"><span class="spec-label">${sp.label}</span><span class="spec-value">${sp.value}</span></div>`;
        }).join('');
      }

      if (persEl) {
        persEl.textContent = pkg.personalization;
      }

      if (waBtn) {
        waBtn.href = buildWhatsAppUrl(pkg.waText);
      }

      if (fullLnk) {
        fullLnk.href = pkg.detailUrl;
      }

      if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
        modalInstance.show();
      }
    }

    // Attach click listeners to all detail buttons
    document.querySelectorAll('[data-package-detail]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const pkgKey = btn.getAttribute('data-package-detail');
        openModalForPackage(pkgKey);
      });
    });

    // Check URL hash on page load
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash && PACKAGES_DATA[hash]) {
      setTimeout(function () {
        openModalForPackage(hash);
      }, 350);
    }
  }

  /* ============================================================
     Track WA CTA clicks (console stub — replace with GA4 gtag)
  ============================================================ */
  function initCtaTracking() {
    document.querySelectorAll('[data-wa-msg], .btn-whatsapp, .float-wa').forEach(function (el) {
      el.addEventListener('click', function () {
        const label = el.getAttribute('data-track-label') || el.textContent.trim().slice(0, 40);
        // gtag('event', 'cta_whatsapp_click', { label: label });
        console.info('[CTA]', label);
      });
    });
  }

  /* ============================================================
     Back to top button
  ============================================================ */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    const SHOW_AFTER = 400;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let ticking = false;

    function update() {
      btn.classList.toggle('is-visible', window.scrollY > SHOW_AFTER);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      // Keep keyboard focus useful once the button hides again
      const brand = document.querySelector('.navbar-brand');
      if (brand) brand.focus({ preventScroll: true });
    });

    requestAnimationFrame(update);
  }

  /* ============================================================
     Init all
  ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    // Critical path: run immediately
    initWhatsAppLinks();
    initNavbarScroll();
    initActiveNav();
    initCopyrightYear();
    initSmoothAnchor();
    initBackToTop();

    // Non-critical: defer one frame so main thread is free for first paint
    requestAnimationFrame(function () {
      setTimeout(function () {
        initFadeUp();
        initPackageFilter();
        initPackageModal();
        initQuoteForm();
        initCtaTracking();
      }, 0);
    });
  });

})();
