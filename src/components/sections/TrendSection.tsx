import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const TrendSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gold/5 border border-gold/20 px-5 py-2.5 rounded-full mb-4"
          >
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-gold text-xs font-medium uppercase tracking-wider">
              Comunicação = Vantagem Competitiva
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              Você já percebeu <span className="gradient-text">o movimento?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-base md:text-lg">
              Grandes empresários estão se tornando <span className="text-foreground">a cara dos seus negócios</span>. 
              Pessoas se conectam com pessoas. Histórias convencem.
            </p>
            
            <p className="text-base md:text-lg">
              Quem comunica melhor, <span className="text-gold">vende mais</span>. 
              Lidera melhor. Conquista mais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6"
          >
            <p className="text-xl md:text-2xl font-display font-semibold text-foreground/90">
              A pergunta é: <span className="text-gold">você vai ficar só assistindo?</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrendSection;
