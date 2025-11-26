import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import carbonTexture from "@/assets/carbon-texture-1.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  // Mouse tracking for glow effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Carbon Texture Background with Aurora */}
      <div className="absolute inset-0 z-0">
        <img 
          src={carbonTexture}
          alt=""
          className="w-full h-full object-cover opacity-[0.015]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background"></div>
        
        {/* Aurora gradient effect */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, hsl(var(--gold-primary) / 0.05), transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsl(var(--gold-accent) / 0.05), transparent 50%)',
              'radial-gradient(circle at 20% 50%, hsl(var(--gold-primary) / 0.05), transparent 50%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content - Editorial Layout */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 lg:mb-20"
          >
            <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold-subtle font-light">
              Programa Executivo
            </span>
          </motion.div>

          {/* Single Column Layout */}
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Headline and Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="space-y-6 text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.15] tracking-tight">
                <span className="text-reveal" style={{ '--reveal-delay': '0s' } as React.CSSProperties}>
                  Sua <span className="relative inline-block">
                    comunicação
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent"></span>
                  </span> define sua
                </span>
                <span className="block mt-2 gradient-text font-impact font-bold tracking-tight text-reveal" style={{ '--reveal-delay': '0.2s' } as React.CSSProperties}>
                  trajetória profissional
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                O único programa que une 13 anos de TV ao vivo 
                com a experiência de um CEO que gerou R$ 30 milhões 
                através da palavra.
              </p>
            </motion.div>

            {/* VSL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <div className="relative aspect-video rounded-sm overflow-hidden group cursor-pointer border border-white/5 shadow-elegant mouse-glow border-trace">
                <div className="absolute inset-0 bg-navy-deep"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 bg-gold/5 blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative w-16 h-16 rounded-full border border-gold-whisper/40 flex items-center justify-center group-hover:border-gold/60 group-hover:scale-110 transition-all duration-500">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-gold border-b-[8px] border-b-transparent ml-1 group-hover:border-l-gold-accent transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
                    Assista à Apresentação
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <Button 
                size="lg" 
                className="text-sm px-8 py-6 rounded-sm font-normal tracking-wide micro-interaction mouse-glow group relative overflow-hidden"
                asChild
              >
                <a href="https://pay.hotmart.com/M103064438P?bid=1764138358390" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Iniciar Jornada</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 shimmer"></div>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
