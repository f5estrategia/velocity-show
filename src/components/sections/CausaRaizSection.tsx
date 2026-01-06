import { motion } from "framer-motion";

const CausaRaizSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-subtle font-light mb-4 block">
              A Verdade Que Ninguém Te Contou
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              Esse medo <span className="gradient-text">não é seu</span>
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
              O medo de falar em público foi <span className="text-foreground">colocado em você</span>. 
              Lá na infância, quando papai e mamãe mandavam você ficar quieto na frente das pessoas.
            </p>
            
            <p className="text-base md:text-lg">
              Você cresceu com isso. E agora, toda vez que precisa apresentar para o board, 
              fechar uma venda ou liderar uma reunião, <span className="text-foreground">esse medo volta</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <div className="inline-block bg-card/50 backdrop-blur-sm border border-gold/10 px-8 py-6 rounded-sm">
              <blockquote className="text-lg md:text-xl italic text-foreground/90">
                "Não se culpe. <span className="text-gold">O que foi aprendido pode ser desaprendido.</span>"
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CausaRaizSection;
