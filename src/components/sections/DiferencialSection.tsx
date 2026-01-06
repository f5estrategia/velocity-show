import { Target, Users, MessageCircle } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-graphite/50 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="noise-bg opacity-[0.02]" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-medium mb-4">
            O Que Nos Diferencia
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Isso <span className="gradient-text">não é</span> um curso de oratória
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Esqueça as técnicas de livro. Aqui é prática.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 md:mb-16">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="group bg-background/50 backdrop-blur-sm border border-white/5 rounded-xl p-8 text-center hover:border-gold/20 transition-all duration-300 hover:bg-background/70"
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gold">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl font-medium text-foreground/90 leading-relaxed">
            "Aqui não é teoria. Eu não estou aqui para jogar regras na sua cara. 
            <span className="text-gold"> Estou aqui para mostrar como ser de verdade.</span>"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default DiferencialSection;