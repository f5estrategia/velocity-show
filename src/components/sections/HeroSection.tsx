import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import carbonTexture from "@/assets/carbon-texture-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carbon Texture Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={carbonTexture}
          alt=""
          className="w-full h-full object-cover opacity-[0.015]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background"></div>
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

          {/* Two Column Editorial Layout */}
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Left Column - Manifesto */}
            <div className="lg:col-span-5 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] tracking-tight">
                  Sua comunicação define sua 
                  <span className="block mt-1 gradient-text">trajetória profissional</span>
                </h1>

                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  O único programa que une 13 anos de TV ao vivo 
                  com a experiência de um CEO que gerou R$ 30 milhões 
                  através da palavra.
                </p>
              </motion.div>

              {/* Metrics - Editorial Style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="flex gap-8 pt-6 border-t border-white/5"
              >
                <div>
                  <div className="text-lg font-light text-gold mb-0.5">13</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Anos SBT</div>
                </div>
                <div>
                  <div className="text-lg font-light text-gold mb-0.5">R$ 30M</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Gerados</div>
                </div>
                <div>
                  <div className="text-lg font-light text-gold mb-0.5">1000+</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Marcas</div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-4"
              >
                <Button 
                  size="lg" 
                  className="text-xs px-6 py-5 rounded-sm font-normal tracking-wide micro-interaction"
                >
                  Iniciar Jornada
                </Button>
              </motion.div>
            </div>

            {/* Right Column - VSL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="relative aspect-video rounded-sm overflow-hidden group cursor-pointer border border-white/5 shadow-elegant">
                <div className="absolute inset-0 bg-navy-deep"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/5 blur-3xl"></div>
                    <div className="relative w-16 h-16 rounded-full border border-gold-whisper/40 flex items-center justify-center group-hover:border-gold/60 transition-all duration-500">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-gold border-b-[8px] border-b-transparent ml-1"></div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
