export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: "finansial" | "self-improvement" | "bundle";
  badge?: string;
  tiktokUrl: string;
}

export const products: Product[] = [
  // Buku Finansial
  {
    id: "fin-1",
    title: "Keuangan Cerdas di Usia 20an",
    description: "Panduan lengkap mengelola gaji pertama, menabung, dan mulai investasi untuk fresh graduate.",
    price: 89000,
    originalPrice: 120000,
    category: "finansial",
    badge: "Bestseller",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "fin-2",
    title: "Bebas Hutang dalam 1 Tahun",
    description: "Strategi praktis melunasi hutang dan membangun kebiasaan keuangan sehat.",
    price: 79000,
    category: "finansial",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "fin-3",
    title: "Investasi untuk Pemula",
    description: "Dari nol sampai paham: saham, reksadana, crypto, dan properti dalam bahasa yang mudah.",
    price: 99000,
    originalPrice: 130000,
    category: "finansial",
    badge: "Terbaru",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "fin-4",
    title: "Passive Income Blueprint",
    description: "10 cara membangun penghasilan pasif yang realistis untuk generasi milenial.",
    price: 85000,
    category: "finansial",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "fin-5",
    title: "Financial Freedom Roadmap",
    description: "Peta jalan lengkap menuju kebebasan finansial sebelum usia 35 tahun.",
    price: 95000,
    category: "finansial",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },

  // Buku Self-Improvement
  {
    id: "self-1",
    title: "Mindset Sukses Anak Muda",
    description: "Mengubah pola pikir dari consumer menjadi producer dan builder.",
    price: 75000,
    category: "self-improvement",
    badge: "Populer",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "self-2",
    title: "Produktivitas Tanpa Burnout",
    description: "Cara kerja efektif tanpa mengorbankan kesehatan mental dan work-life balance.",
    price: 79000,
    category: "self-improvement",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "self-3",
    title: "Public Speaking Mastery",
    description: "Dari takut berbicara menjadi speaker yang percaya diri dalam 30 hari.",
    price: 89000,
    originalPrice: 110000,
    category: "self-improvement",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "self-4",
    title: "Kebiasaan Atomic",
    description: "Membangun kebiasaan kecil yang menghasilkan perubahan besar dalam hidup.",
    price: 85000,
    category: "self-improvement",
    badge: "Rekomendasi",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "self-5",
    title: "Quarter Life Crisis Survival",
    description: "Panduan menghadapi kebingungan usia 20an dan menemukan purpose hidup.",
    price: 79000,
    category: "self-improvement",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },

  // Bundle
  {
    id: "bundle-1",
    title: "Starter Pack: Finansial",
    description: "3 buku finansial terbaik untuk memulai perjalanan keuangan sehatmu.",
    price: 199000,
    originalPrice: 267000,
    category: "bundle",
    badge: "Hemat 25%",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "bundle-2",
    title: "Self-Growth Collection",
    description: "4 buku self-improvement untuk upgrade diri secara menyeluruh.",
    price: 249000,
    originalPrice: 328000,
    category: "bundle",
    badge: "Hemat 24%",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "bundle-3",
    title: "Ultimate Combo Pack",
    description: "5 buku terlaris dari kategori finansial dan self-improvement.",
    price: 349000,
    originalPrice: 450000,
    category: "bundle",
    badge: "Best Value",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
  {
    id: "bundle-4",
    title: "Young Professional Kit",
    description: "Koleksi lengkap untuk profesional muda yang ingin sukses di karir dan keuangan.",
    price: 299000,
    originalPrice: 400000,
    category: "bundle",
    tiktokUrl: "https://www.tiktok.com/@dash",
  },
];

export const stats = [
  { value: 15000, label: "Buku Terjual", suffix: "+" },
  { value: 98, label: "Rating Kepuasan", suffix: "%" },
  { value: 5000, label: "Pembaca Aktif", suffix: "+" },
  { value: 4.9, label: "Rating Produk", suffix: "/5" },
];

export const faqs = [
  {
    question: "Format buku apa yang tersedia?",
    answer: "Semua buku kami tersedia dalam format fisik (softcover premium) dengan kertas berkualitas tinggi. Beberapa buku juga tersedia dalam format e-book PDF yang bisa langsung dibaca di device kamu.",
  },
  {
    question: "Bagaimana cara membeli buku Dash?",
    answer: "Kamu bisa membeli semua buku kami melalui TikTok Shop resmi Dash. Cukup klik tombol 'Beli di TikTok Shop' pada buku yang kamu inginkan, dan kamu akan langsung diarahkan ke halaman pembelian.",
  },
  {
    question: "Buku ini cocok untuk siapa?",
    answer: "Buku-buku Dash dirancang khusus untuk profesional muda usia 18-35 tahun yang ingin belajar mengelola keuangan dan mengembangkan diri. Cocok untuk fresh graduate, karyawan, freelancer, hingga entrepreneur pemula.",
  },
  {
    question: "Apakah ada garansi atau kebijakan pengembalian?",
    answer: "Ya! Kami memberikan garansi kepuasan 100%. Jika kamu tidak puas dengan bukunya dalam 7 hari setelah diterima, kami akan proses pengembalian dana penuh (syarat dan ketentuan berlaku).",
  },
  {
    question: "Berapa lama pengiriman buku?",
    answer: "Pengiriman buku dilakukan melalui ekspedisi yang bekerja sama dengan TikTok Shop. Estimasi pengiriman 2-5 hari kerja untuk Pulau Jawa dan 5-10 hari kerja untuk luar Pulau Jawa.",
  },
  {
    question: "Apakah bisa beli lebih dari satu buku sekaligus?",
    answer: "Tentu! Kamu bahkan bisa mendapat diskon lebih dengan membeli bundle. Cek kategori Bundle untuk penawaran terbaik dan hemat hingga 25%.",
  },
];
