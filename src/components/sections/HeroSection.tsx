import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/fernando-hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fernando Machado" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-gold font-mono border border-gold/30 px-6 py-2 rounded-full">
            PROGRAMA EXECUTIVO DE COMUNICAÇÃO
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]"
        >
          <span className="gradient-text">
            SUA COMUNICAÇÃO<br />
            PODE SER SUA MAIOR ARMA<br />
            OU SUA MAIOR FRAQUEZA
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
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
          className="mb-12"
        >
          <Button 
            size="lg" 
            className="text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            QUERO DOMINAR A COMUNICAÇÃO
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span>
            <span>13 Anos SBT</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span>
            <span>R$ 30M Gerados</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span>
            <span>1000+ Marcas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span>
            <span>Zero Teoria</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-gold" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
