import { Shield, TrendingUp, Users, Network, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Carbon Texture Background */}
      <div className="absolute inset-0">
        <div className="noise-bg noise-bg-stronger" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 md:mb-16 tracking-tight">
          O que você vai <span className="gradient-text">conquistar</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
          {transformations.map((item, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-white/5 hover:border-gold/20 transition-all duration-300 text-center group"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="bg-gold/5 p-2 md:p-3 rounded-lg border border-gold/10 group-hover:border-gold/20 transition-colors">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xs md:text-sm font-semibold mb-1 md:mb-2 text-gold">
                  {item.title}
                </h3>
                <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Quote */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <blockquote className="text-base md:text-xl italic text-foreground/90 leading-relaxed px-4">
            "Todas as oportunidades serão pequenas para você 
            depois de aprender a <span className="text-gold">se comunicar.</span>"
          </blockquote>

          <Button 
            size="lg"
            className="text-sm px-8 py-6 rounded-sm font-normal tracking-wide"
            asChild
          >
            <a href="https://pay.hotmart.com/M103064438P?bid=1764138358390" target="_blank" rel="noopener noreferrer">
              Quero Transformar Minha Comunicação
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
