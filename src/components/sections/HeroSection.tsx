import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/fernando-hero.jpeg";
import carbonTexture from "@/assets/carbon-texture-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carbon Texture Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={carbonTexture}
          alt=""
          className="w-full h-full object-cover opacity-[0.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-light border border-gold/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
              Programa Executivo de Comunicação
            </span>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="text-center lg:text-left space-y-8">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight"
              >
                Sua comunicação pode ser sua
                <span className="block mt-2 gradient-text">maior arma ou sua maior fraqueza</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Transforme-a no ativo que gera resultados concretos. 
                O único programa que une 13 anos de TV ao vivo 
                com a prática de um CEO que gerou R$ 30 milhões.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="text-sm px-8 py-5 rounded-md font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Quero Dominar a Comunicação
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-muted-foreground pt-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold"></div>
                  <span>13 Anos SBT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold"></div>
                  <span>R$ 30M Gerados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold"></div>
                  <span>1000+ Marcas</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - VSL */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-[9/16] lg:aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-2xl max-w-md mx-auto lg:max-w-none border border-white/5">
                <img 
                  src={heroImage}
                  alt="Fernando Machado"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gold/10 backdrop-blur-md p-5 rounded-full border border-gold/20 group-hover:scale-110 group-hover:border-gold/40 transition-all duration-300">
                    <Play className="w-10 h-10 text-gold fill-gold" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
