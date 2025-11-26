import { Shield, TrendingUp, Users, Network, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import carbonTexture from "@/assets/carbon-texture-1.jpg";

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
        <img 
          src={carbonTexture}
          alt=""
          className="w-full h-full object-cover opacity-[0.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 md:mb-16 tracking-tight">
          O que você vai <span className="gradient-text">conquistar</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {transformations.map((item, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-white/5 hover:border-gold/20 transition-all duration-300 text-center group"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gold/5 p-3 rounded-lg border border-gold/10 group-hover:border-gold/20 transition-colors">
                    <item.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-sm font-semibold mb-2 text-gold">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl italic text-foreground/90 leading-relaxed">
            "Não adianta ficar reclamando. 
            O que as pessoas de sucesso têm é <span className="text-gold">coragem.</span>"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
