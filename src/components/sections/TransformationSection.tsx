import { Shield, TrendingUp, Users, Network, Zap, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const transformations = [
  {
    icon: Shield,
    title: "Confiança Inabalável",
    description: "Apresente para 5 ou 5.000 pessoas com a mesma segurança"
  },
  {
    icon: TrendingUp,
    title: "Vendas Multiplicadas",
    description: "Toda venda começa com uma comunicação convincente"
  },
  {
    icon: Users,
    title: "Equipe Engajada",
    description: "Líderes que comunicam bem têm times 3x mais produtivos"
  },
  {
    icon: Network,
    title: "Networking Poderoso",
    description: "Abra portas apenas com uma conversa de 2 minutos"
  },
  {
    icon: Zap,
    title: "Improviso Dominado",
    description: "Nunca mais fique sem palavras numa situação inesperada"
  },
  {
    icon: Award,
    title: "Autoridade Percebida",
    description: "Seja reconhecido como líder antes mesmo de abrir a boca"
  }
];

const TransformationSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-graphite/50">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="noise-bg opacity-[0.02]" aria-hidden="true" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-medium mb-4">
            Transformação
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            O que você vai <span className="gradient-text">conquistar</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12 md:mb-16">
          {transformations.map((item, index) => (
            <div 
              key={index}
              className="group bg-background/50 backdrop-blur-sm border border-white/5 rounded-xl p-5 md:p-6 text-center hover:border-gold/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-sm md:text-base font-semibold mb-2 text-gold">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote + CTA */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <blockquote className="text-base md:text-xl font-medium text-foreground/90 leading-relaxed">
            "Todas as oportunidades serão pequenas para você 
            depois de aprender a <span className="text-gold">se comunicar.</span>"
          </blockquote>

          <Button 
            size="lg"
            className="bg-gold hover:bg-gold-accent text-background font-semibold text-sm px-8 py-6 rounded-lg transition-all duration-300 hover:scale-[1.02] group"
            asChild
          >
            <a href="https://pay.hotmart.com/M103064438P?bid=1764138358390" target="_blank" rel="noopener noreferrer">
              Quero Transformar Minha Comunicação
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;