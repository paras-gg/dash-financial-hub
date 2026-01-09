import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg mb-8 animate-float">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Siap Memulai Perjalanan{" "}
            <span className="gradient-text">Finansialmu?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Jangan tunda lagi! Ribuan profesional muda sudah memulai perjalanan 
            mereka menuju kebebasan finansial bersama Dash. Sekarang giliranmu.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="gradient-bg hover-glow text-primary-foreground px-10 py-7 text-lg group"
            onClick={() => window.open("https://www.tiktok.com/@dash", "_blank")}
          >
            Beli Buku di TikTok Shop
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust Badge */}
          <p className="mt-8 text-sm text-muted-foreground">
            ✓ Pengiriman cepat &nbsp; ✓ Garansi kepuasan 100% &nbsp; ✓ Pembayaran aman
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
