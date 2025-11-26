import { Shield, TrendingUp, Users, Network, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const transformations = [
  {
    icon: Shield,
    title: "CONFIANÇA INABALÁVEL",
    description: "Apresente para 5 ou 5.000 pessoas com a mesma segurança"
  },
  {
    icon: TrendingUp,
    title: "VENDAS MULTIPLICADAS",
    description: "Toda venda começa com uma comunicação convincente"
  },
  {
    icon: Users,
    title: "EQUIPE ENGAJADA",
    description: "Líderes que comunicam bem têm times 3x mais produtivos"
  },
  {
    icon: Network,
    title: "NETWORKING PODEROSO",
    description: "Abra portas apenas com uma conversa de 2 minutos"
  },
  {
    icon: Zap,
    title: "IMPROVISO DOMINADO",
    description: "Nunca mais fique sem palavras numa situação inesperada"
  },
  {
    icon: Award,
    title: "AUTORIDADE PERCEBIDA",
    description: "Seja reconhecido como líder antes mesmo de abrir a boca"
  }
];

const TransformationSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16 md:mb-20">
          O QUE VOCÊ VAI <span className="gradient-text">CONQUISTAR</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
          {transformations.map((item, index) => (
            <Card 
              key={index}
              className="bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-center"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-gold/10 p-4 rounded-full">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold mb-3 text-gold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-quote text-xl md:text-3xl italic text-foreground leading-relaxed">
            "Não adianta ficar reclamando e nem assistindo 
            outras pessoas que sabem MENOS que você 
            ter MAIS sucesso que você.
            O que elas têm é <span className="text-gold">CORAGEM.</span>"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
