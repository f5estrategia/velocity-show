import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/fernando-hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fernando Machado" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent-primary font-mono border border-accent-primary/30 px-6 py-2 rounded-full">
              PROGRAMA EXECUTIVO DE COMUNICAÇÃO
            </span>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-center lg:text-left">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]"
              >
                <span className="gradient-text">
                  SUA COMUNICAÇÃO<br />
                  PODE SER SUA<br />
                  MAIOR ARMA<br />
                  OU SUA MAIOR<br />
                  FRAQUEZA
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-10"
              >
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Transforme-a no ativo que gera R$ milhões.
                  <br />
                  <span className="text-foreground font-semibold">
                    O único programa que une 13 anos de TV ao vivo 
                    com a prática de um CEO que gerou R$ 30 milhões.
                  </span>
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-10"
              >
                <Button 
                  size="lg" 
                  className="text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  QUERO DOMINAR A COMUNICAÇÃO
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm md:text-base text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <span className="text-accent-primary">✓</span>
                  <span>13 Anos SBT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-primary">✓</span>
                  <span>R$ 30M Gerados</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-primary">✓</span>
                  <span>1000+ Marcas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-primary">✓</span>
                  <span>Zero Teoria</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - VSL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-[9/16] lg:aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-2xl max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-background/80 group-hover:from-navy/60 group-hover:to-background/60 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-accent-primary/20 backdrop-blur-sm p-6 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(255,107,53,0.6)]">
                    <Play className="w-16 h-16 text-accent-primary fill-accent-primary drop-shadow-[0_0_10px_rgba(255,107,53,0.8)]" />
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-accent-primary/40 group-hover:border-accent-primary/70 group-hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all duration-300 rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
