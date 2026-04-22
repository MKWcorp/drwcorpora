export type Lang = 'id' | 'en'

export const translations = {
  // ===== NAVBAR =====
  navbar: {
    about:    { id: 'Tentang',  en: 'About' },
    services: { id: 'Layanan',  en: 'Services' },
    gallery:  { id: 'Galeri',   en: 'Gallery' },
    contact:  { id: 'Kontak',   en: 'Contact' },
  },

  // ===== DOCTOR =====
  doctor: {
    title:    { id: 'Direktur Utama',   en: 'President Director' },
    bio:      {
      id: 'Dr. Wahyu Triasmara adalah seorang dokter dan pengusaha visioner yang mengubah keahliannya menjadi bisnis yang sukses. Dimulai dari satu klinik pada tahun 2015, ia mendirikan PT DRW Corpora Indonesia dan membangun merek DRW Skincare, mengembangkannya menjadi jaringan beauty center dan klinik yang berkembang pesat.',
      en: 'Dr. Wahyu Triasmara is a doctor and visionary entrepreneur who transformed his expertise into a successful business. Starting with a single clinic in 2015, he founded PT DRW Corpora Indonesia and built the DRW Skincare brand, expanding it into a thriving network of beauty centers and clinics.',
    },
    achievements: { id: 'Pencapaian Utama', en: 'Key Achievements' },
    ach1: {
      id: 'Mengubah satu klinik menjadi merek skincare nasional.',
      en: 'Transformed a single clinic into a nationwide skincare brand.',
    },
    ach2: {
      id: 'Berhasil mendirikan dan memimpin PT DRW Corpora Indonesia.',
      en: 'Successfully founded and leads PT DRW Corpora Indonesia.',
    },
    ach3: {
      id: 'Mendirikan banyak cabang Beauty Center DRW Skincare dan Klinik Pratama DRW Estetika.',
      en: 'Established numerous Beauty Center DRW Skincare branches and the Klinik Pratama DRW Estetika.',
    },
    ach4: {
      id: 'Memanfaatkan media sosial untuk membangun kehadiran merek yang kuat dan mengedukasi masyarakat tentang perawatan kulit.',
      en: 'Utilizes social media to build a strong brand presence and educate the public on skincare.',
    },
  },

  // ===== ABOUT =====
  about: {
    title: { id: 'Tentang Kami', en: 'About Us' },
    desc:  {
      id: 'DRW Corpora adalah perusahaan holding terkemuka yang didirikan oleh Dr. Wahyu Triasmara pada Januari 2021. Kami berfokus pada diversifikasi bisnis, mulai dari perawatan kecantikan (Skincare) hingga layanan perhotelan (Hospitality), dengan komitmen untuk memberikan produk dan layanan terbaik di setiap sektor.',
      en: 'DRW Corporation is a leading holding company founded by Dr. Wahyu Triasmara in January 2021. We focus on business diversification, from beauty care (Skincare) to hospitality services (Hospitality), with a commitment to providing the best products and services in every sector.',
    },
  },

  // ===== VISION & MISSION =====
  vision: {
    title: { id: 'Visi',   en: 'Vision' },
    desc:  {
      id: 'Menjadi perusahaan holding yang terpercaya dan andal dengan karakter perusahaan yang kuat untuk memenuhi tanggung jawab sosial kepada rakyat, masyarakat, dan negara.',
      en: 'Becoming a trusted and reliable holding company with a strong corporate character to fulfill social responsibilities to the people, society, and the country.',
    },
  },
  mission: {
    title: { id: 'Misi',    en: 'Mission' },
    desc:  {
      id: 'Membangun ekosistem bisnis yang berkelanjutan dan berdampak positif bagi masyarakat melalui inovasi, integritas, dan kolaborasi lintas sektor.',
      en: 'Building a sustainable business ecosystem with a positive impact on society through innovation, integrity, and cross-sector collaboration.',
    },
  },

  // ===== AWARDS =====
  awards: {
    label: { id: 'Penghargaan', en: 'Awards' },
  },

  // ===== SERVICES =====
  services: {
    title:      { id: 'LAYANAN KAMI', en: 'OUR SERVICES' },
    categories: {
      all:        { id: 'Semua',            en: 'All' },
      aesthetic:  { id: 'Estetika & Skincare', en: 'Aesthetic & Skincare' },
      wellness:   { id: 'Wellness',         en: 'Wellness' },
      food:       { id: 'Makanan & Minuman', en: 'Food & Beverages' },
      hospitality:{ id: 'Perhotelan',       en: 'Hospitality' },
      csr:        { id: 'CSR',              en: 'CSR' },
    },
  },

  // ===== GALLERY =====
  gallery: {
    title: { id: 'Galeri', en: 'Gallery' },
    items: {
      muri:     { id: 'Penganugerahan Rekor MURI',  en: 'MURI Record Award Ceremony' },
      produksi: { id: 'Fasilitas Produksi',          en: 'Production Facility' },
      lab:      { id: 'Laboratorium R&D',            en: 'R&D Laboratory' },
    },
  },

  // ===== FOOTER =====
  footer: {
    navLinks: {
      about:    { id: 'Tentang Kami',      en: 'About us' },
      vision:   { id: 'Visi & Misi',       en: 'Vision & Mission' },
      awards:   { id: 'Penghargaan',       en: 'Awards' },
      services: { id: 'Layanan Kami',      en: 'Our Services' },
      gallery:  { id: 'Galeri',            en: 'Gallery' },
    },
    contact:  { id: 'Hubungi Kami', en: 'Contact US' },
    address:  {
      id: 'Karang Jambe, Banguntapan, Kecamatan Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta',
      en: 'Karang Jambe, Banguntapan, Banguntapan District, Bantul Regency, Special Region of Yogyakarta',
    },
    copyright: { id: 'Hak Cipta © 2026', en: 'Copyright © 2026' },
  },
} as const

export function t(key: { id: string; en: string }, lang: Lang): string {
  return key[lang]
}
