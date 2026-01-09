import { Target, Heart, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Fokus pada Hasil",
    description: "Buku yang ditulis berdasarkan pengalaman nyata dan strategi yang terbukti berhasil.",
  },
  {
    icon: Heart,
    title: "Untuk Gen-Z",
    description: "Konten yang relevan dengan tantangan dan gaya hidup profesional muda masa kini.",
  },
  {
    icon: Lightbulb,
    title: "Mudah Dipahami",
    description: "Bahasa santai dan contoh praktis yang bisa langsung kamu terapkan.",
  },
  {
    icon: TrendingUp,
    title: "Berbasis Data",
    description: "Tips dan strategi yang didukung riset dan data terkini tentang finansial.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Story */}
          <div className="animate-fade-in-left opacity-0 [animation-delay:100ms]">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Tentang Dash
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Membantu Profesional Muda{" "}
              <span className="gradient-text">Meraih Kebebasan Finansial</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dash hadir karena kami percaya setiap anak muda berhak punya pengetahuan 
                finansial yang baik. Sayangnya, di sekolah dan kampus, kita jarang diajarkan 
                cara mengelola uang dengan benar.
              </p>
              <p>
                Kami memulai Dash dengan satu misi sederhana: membuat literasi keuangan 
                menjadi mudah, menyenangkan, dan accessible untuk semua profesional muda 
                Indonesia berusia 18-35 tahun.
              </p>
              <p>
                Setiap buku yang kami tulis adalah hasil riset mendalam, pengalaman nyata, 
                dan feedback dari ribuan pembaca. Bukan teori kosong, tapi panduan praktis 
                yang bisa langsung kamu terapkan.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl glass-card">
                <h3 className="font-semibold text-lg mb-2">Visi Kami</h3>
                <p className="text-muted-foreground text-sm">
                  Menjadi brand edukasi finansial #1 yang dipercaya oleh 1 juta profesional 
                  muda Indonesia.
                </p>
              </div>
              <div className="p-6 rounded-xl glass-card">
                <h3 className="font-semibold text-lg mb-2">Misi Kami</h3>
                <p className="text-muted-foreground text-sm">
                  Menyediakan konten finansial berkualitas tinggi dalam format yang mudah 
                  dipahami dan actionable.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-right opacity-0 [animation-delay:200ms]">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl glass-card hover-glow group transition-all duration-300"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
