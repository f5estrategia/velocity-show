import { Target, Users, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const diferenciais = [
  {
    icon: Target,
    title: "Posicionamento",
    description: "É para você se POSICIONAR como autoridade no seu mercado"
  },
  {
    icon: Users,
    title: "Conexão",
    description: "É para você se CONECTAR com pessoas de verdade"
  },
  {
    icon: MessageCircle,
    title: "Convencimento",
    description: "É para você CONVENCER alguém de algo que importa"
  }
];

const DiferencialSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Carbon Texture Background */}
      <div className="absolute inset-0">
        <div className="noise-bg" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-subtle font-light mb-4 block">
            O Que Nos Diferencia
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            Isso <span className="gradient-text">não é</span> um curso de oratória
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Esqueça as técnicas de livro. Aqui é prática.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border border-white/5 hover:border-gold/20 transition-all duration-300 text-center group h-full">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-5">
                    <div className="bg-gold/5 p-4 rounded-full border border-gold/10 group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-300">
                      <item.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-lg md:text-xl italic text-foreground/90 leading-relaxed">
            "Aqui não é teoria. Eu não estou aqui para jogar regras na sua cara. 
            <span className="text-gold"> Estou aqui para mostrar como ser de verdade.</span>"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default DiferencialSection;
