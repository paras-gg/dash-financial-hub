import { useEffect, useState, useRef } from "react";
import { stats } from "@/data/products";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl glass-card hover-glow transition-all duration-500 ${
                isVisible ? "animate-counter-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {isVisible ? (
                  <CountUpNumber
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                    delay={index * 100}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpProps {
  end: number;
  suffix: string;
  duration: number;
  delay: number;
}

const CountUpNumber = ({ end, suffix, duration, delay }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = Date.now();
      const isDecimal = end % 1 !== 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const current = isDecimal
          ? Math.round(end * easeOut * 10) / 10
          : Math.floor(end * easeOut);
        
        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, duration, delay]);

  return (
    <span>
      {count.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
};

export default StatsSection;
