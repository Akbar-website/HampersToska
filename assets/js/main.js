/**
 * Hampers Lebaran — main.js
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
    'Halo Hampers Lebaran, saya ingin konsultasi hampers Lebaran. Mohon informasi paket, harga, isi, dan estimasi pemesanan.';

  const WA_MSG_CORPORATE =
    'Halo Hampers Lebaran, saya ingin meminta penawaran hampers Lebaran perusahaan. Mohon informasi harga, minimum order, dan opsi kustomisasi.';

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

      let msg = `Halo Hampers Lebaran, saya ingin meminta penawaran hampers Lebaran perusahaan.\n\n`;
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
      category: 'Hampers Keluarga',
      badgeIcon: '🏡',
      price: 'Rp 385.000 – Rp 450.000',
      priceNote: 'Harga final dikonfirmasi sesuai opsi toples & isi saat konsultasi',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80&auto=format',
      imageAlt: 'Paket Silaturahmi — hampers Lebaran keluarga dalam kotak Lebaran eksklusif',
      desc: 'Pilihan terfavorit untuk mempererat silaturahmi dengan keluarga besar dan sahabat tercinta. Kombinasi manis, gurih, dan segar dalam kemasan hardbox hijau Lebaran beraksen pita emas mewah.',
      items: [
        'Kurma Sukari Al-Qassim Premium (Toples Segi-6 Kedap Udara 250g)',
        'Kastengel Keju Edam Asli Wijsman (Toples Kaca Silinder 300g)',
        'Nastar Klasik Selai Nanas Segar Home-made (Toples Kaca Silinder 300g)',
        'Sparkling White Grape / Apel Halal Sparkling (Botol Kaca Mewah 750ml)',
        'Teh Melati Artisan Organik (Kemasan Kaleng Tin Can 50g)',
        'Bonus Tasbih Kayu Cendana & Pocket Sajadah Travel Praktis'
      ],
      specs: [
        { label: 'Kemasan', value: 'Exclusive Hardbox Lebaran Embossed Foil' },
        { label: 'Min. Order', value: '1 Paket (Bisa Satuan)' },
        { label: 'Waktu Produksi', value: '1–2 Hari Kerja' },
        { label: 'Ketahanan', value: '3–6 Bulan (100% Halal)' }
      ],
      personalization: 'Gratis Kartu Ucapan Lebaran Custom (Nama Pengirim & Penerima) + Pita Satin Lebaran/Emas.',
      waText: 'Halo Hampers Lebaran, saya tertarik memesan Paket Silaturahmi. Mohon informasi ketersediaan, rincian isi, dan jadwal pengiriman.',
      detailUrl: 'paket-silaturahmi.html'
    },
    'prestige': {
      id: 'prestige',
      title: 'Paket Prestige',
      category: 'Hampers Premium',
      badgeIcon: '✨',
      price: 'Rp 850.000 – Rp 1.250.000',
      priceNote: 'Pilihan tier luxury gift untuk relasi penting & VIP',
      image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&q=80&auto=format',
      imageAlt: 'Paket Prestige — hampers Lebaran premium mewah untuk relasi bisnis VIP',
      desc: 'Pengalaman gifting tingkat tinggi berkelas eksklusif. Dirancang khusus untuk memukau relasi bisnis penting, mitra strategis, serta keluarga terhormat dengan kurma Medjool jumbo pilihan dan kue kering premium berkeju tua Belanda.',
      items: [
        'Kurma Medjool California Jumbo Grade A (Jar Kaca Segel Kedap Udara 400g)',
        'Nastar Nanas Organik French Butter Premium (Jar Kaca 350g)',
        'Kastengel Aged Gouda Cheese Premium Belanda (Jar Kaca 350g)',
        'Putri Salju Mede Mentega Wijsman Lumer (Jar Kaca 350g)',
        'Madu Hutan Murni Raw Honey Organik + Wooden Dipper Sendok Madu (Jar 250ml)',
        'Set 2 Pcs Cangkir Keramik Stoneware Handmade & Saucer Kayu Jati Asli',
        'Artisan Tisane Floral Herbal Tea Blend (Tin Can Gold 60g)',
        'Sajadah Tenun Halus Sutra Turkey Motif Kaligrafi Eksklusif'
      ],
      specs: [
        { label: 'Kemasan', value: 'Luxury Two-Tier Hardbox Beludru Lebaran' },
        { label: 'Min. Order', value: '1 Paket' },
        { label: 'Waktu Produksi', value: '2–3 Hari Kerja' },
        { label: 'Ketahanan', value: '6 Bulan (Segel Kedap Udara)' }
      ],
      personalization: 'Seal Lilin Cap Lebaran (Wax Seal), Kartu Ucapan Tebal Letterpress, Grafir Nama/Logo Kayu.',
      waText: 'Halo Hampers Lebaran, saya ingin memesan Paket Prestige Premium. Mohon penawaran harga khusus dan opsi pengiriman eksklusif.',
      detailUrl: 'paket-prestige.html'
    },
    'sahabat': {
      id: 'sahabat',
      title: 'Paket Sahabat',
      category: 'Hampers Ekonomis',
      badgeIcon: '💚',
      price: 'Rp 175.000 – Rp 225.000',
      priceNote: 'Sangat terjangkau untuk berbagi dalam jumlah banyak',
      image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=800&q=80&auto=format',
      imageAlt: 'Paket Sahabat — hampers ekonomis Lebaran kemasan rapi dan berkah',
      desc: 'Berbagi kebahagiaan Hari Raya tidak harus mahal. Paket Sahabat dirancang dengan komposisi seimbang, kemasan kokoh estetik, dan rasa kue yang lezat untuk berbagi berkah Lebaran kepada banyak orang sekaligus.',
      items: [
        'Kurma Khalas Manis Lembut Al-Qassim (Box Cantik 250g)',
        'Sagu Keju Renyah Gurih Lumer di Lidah (Toples Tabung Segel 250g)',
        'Choco Almond Butter Cookies Manis Renyah (Toples Tabung Segel 250g)',
        'Sirup Jeruk Markisa Asli Segar Alami (Botol Kaca 350ml)',
        'Kartu Ucapan Lebaran Hangtag Eid Mubarak & Pita Satin Lebaran'
      ],
      specs: [
        { label: 'Kemasan', value: 'Corrugated Box Lebaran Tebal + Sablon Emas' },
        { label: 'Min. Order', value: '3 Paket' },
        { label: 'Waktu Produksi', value: '1–2 Hari Kerja' },
        { label: 'Ketahanan', value: '3–4 Bulan (100% Halal)' }
      ],
      personalization: 'Kartu Ucapan Lebaran dengan nama pengirim/komunitas tercetak rapi.',
      waText: 'Halo Hampers Lebaran, saya ingin konsultasi Paket Sahabat Ekonomis. Mohon info harga grosir dan jadwal pengiriman.',
      detailUrl: 'paket-sahabat.html'
    },
    'korporat': {
      id: 'korporat',
      title: 'Paket Korporat',
      category: 'Hampers Perusahaan',
      badgeIcon: '🏢',
      price: 'Mulai Rp 250.000 – Rp 1.500.000+',
      priceNote: 'Harga berjenjang sesuai tier anggaran & jumlah pesanan perusahaan',
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80&auto=format',
      imageAlt: 'Paket Korporat — hampers Lebaran perusahaan untuk karyawan dan relasi bisnis',
      desc: 'Solusi lengkap bagi divisi HR, GA, dan Procurement perusahaan. Dilengkapi fasilitas custom branding logo perusahaan pada pita, boks, kartu ucapan, dan merchandise pendukung, serta sistem pengiriman multi-alamat.',
      items: [
        'Pilihan Kombinasi Cookies Premium (Nastar, Kastengel, Putri Salju)',
        'Kurma Premium Import / Madu Organik Sehat',
        'Merchandise Branded: Tumbler Stainless Grafir Logo Perusahaan (Tahan Panas/Dingin 12 Jam)',
        'Buku Agenda Eksklusif & Pena Metal Elegan',
        'Sajadah Travel Waterproof dengan Sablon/Bordir Logo Perusahaan',
        'Dokumen Invoice Resmi Perusahaan (Faktur Pajak & Kwitansi)'
      ],
      specs: [
        { label: 'Kemasan', value: 'Hardbox Custom Logo & Warna Brand Perusahaan' },
        { label: 'Min. Order', value: '10 Paket' },
        { label: 'Waktu Produksi', value: '5–10 Hari Kerja' },
        { label: 'Pengiriman', value: 'Multi-Alamat Kantor & Rumah Karyawan' }
      ],
      personalization: 'Penuh (Full Branding): Sablon logo pada box, pita custom nama perusahaan, kartu ucapan pesan direksi.',
      waText: 'Halo Hampers Lebaran, saya dari perusahaan ingin meminta penawaran resmi untuk Paket Hampers Korporat.',
      detailUrl: 'paket-perusahaan.html'
    },
    'barokah': {
      id: 'barokah',
      title: 'Paket Barokah',
      category: 'Hampers Keluarga Spesial',
      badgeIcon: '🏡',
      price: 'Rp 520.000 – Rp 620.000',
      priceNote: 'Paket komplit untuk momen kumpul hari raya keluarga besar',
      image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80&auto=format',
      imageAlt: 'Paket Barokah — hampers keluarga spesial Lebaran kurma Ajwa dan kue aneka rasa',
      desc: 'Paket keluarga dengan keanekaragaman isi yang lebih melimpah. Menghadirkan kurma Ajwa Madinah pilihan nabi, aneka kue kering klasik kesukaan keluarga, kopi arabika drip, serta wewangian reed diffuser bernuansa Idul Fitri.',
      items: [
        'Kurma Ajwa Madinah Al-Munawwarah Asli (Box Akrilik Gold 250g)',
        'Nastar Nanas Butter Wijsman (Toples Kaca Silinder 300g)',
        'Kaasstengels Edam Cheese Renyah (Toples Kaca Silinder 300g)',
        'Lidah Kucing Special Crispy Vanilla (Toples Kaca 250g)',
        'Kopi Arabika Gayo Single Origin Drip Bag (Box isi 5 Sachet Praktis)',
        'Sirup Rosella Madu Herbal Alami Segar Sehat (Botol Kaca 500ml)',
        'Reed Diffuser Aroma Jasmine Ramadhan + 5 Stick Rotan (Botol Elegan 50ml)'
      ],
      specs: [
        { label: 'Kemasan', value: 'Rigid Hardbox Magnetik Lebaran + Pita Emas' },
        { label: 'Min. Order', value: '1 Paket' },
        { label: 'Waktu Produksi', value: '2–3 Hari Kerja' },
        { label: 'Ketahanan', value: '4–6 Bulan' }
      ],
      personalization: 'Kartu Ucapan Lipat Eksklusif + Hangtag Personalisasi Nama Keluarga.',
      waText: 'Halo Hampers Lebaran, saya tertarik memesan Paket Barokah Keluarga. Mohon konfirmasi jadwal dan biaya pengiriman.',
      detailUrl: 'paket-barokah.html'
    },
    'custom': {
      id: 'custom',
      title: 'Paket Custom',
      category: 'Hampers Custom',
      badgeIcon: '🎨',
      price: 'Menyesuaikan Budget & Spesifikasi',
      priceNote: 'Konsultasi gratis tanpa biaya komitmen awal',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80&auto=format',
      imageAlt: 'Paket Custom — hampers Lebaran rancangan bebas sesuai selera dan anggaran',
      desc: 'Fleksibilitas tanpa batas! Kamu bebas menentukan setiap komponen hampers: memilih isi kue kesukaan, ukuran toples, jenis kurma, botol minuman, merchandise keramik/tekstil, hingga dimensi dan warna boks kemasan.',
      items: [
        'Pilihan Bebas 20+ Macam Kue Kering Tradisional & Modern',
        'Pilihan Kurma (Sukari, Medjool, Ajwa, Khalas)',
        'Pilihan Minuman Herbal, Kopi Drip, Teh Artisan, atau Sparkling Jus',
        'Pilihan Souvenir: Reed Diffuser, Lilin Aromaterapi, Cangkir Keramik, Sajadah',
        'Pilihan Kotak: Hardbox Magnetik, Besek Anyaman Bambu Tradisional, Rattan Basket, atau Acrylic Box',
        'Bebas Desain Tema Kartu Ucapan & Warna Pita'
      ],
      specs: [
        { label: 'Kemasan', value: 'Custom Sesuai Selera (Hardbox, Akrilik, Rotan)' },
        { label: 'Min. Order', value: 'Fleksibel (Mulai dari 1 Paket)' },
        { label: 'Waktu Produksi', value: '3–7 Hari (Tergantung Kerumitan)' },
        { label: 'Konsultasi', value: 'Free Mockup & Rekomendasi Katalog' }
      ],
      personalization: '100% Kustomisasi sesuai keinginan Anda atau brand perusahaan.',
      waText: 'Halo Hampers Lebaran, saya ingin merancang Paket Hampers Custom dengan anggaran dan isi tertentu. Mohon bantuannya.',
      detailUrl: 'paket-custom.html'
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

    update();
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
