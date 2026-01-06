import { Mic, Ghost, TrendingUp, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Mic,
    title: "O Travado",
    description: "Você tem conhecimento profundo mas trava na hora de apresentar para o board ou investidores"
  },
  {
    icon: Ghost,
    title: "O Invisível",
    description: "Pessoas menos qualificadas conseguem promoções porque sabem se vender melhor"
  },
  {
    icon: TrendingUp,
    title: "O Técnico",
    description: "Sua equipe não entende sua visão e você precisa repetir instruções"
  },
  {
    icon: Eye,
    title: "O Inseguro",
    description: "Antes de cada apresentação importante, você perde noites de sono por medo de errar"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 md:mb-16 tracking-tight">
          Você reconhece algum desses cenários?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-white/5 hover:border-gold/20 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center flex flex-col items-center">
                <problem.icon className="w-10 h-10 text-gold/60 mb-4 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <h3 className="text-base font-semibold mb-2 text-gold">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <blockquote className="text-lg md:text-xl italic mb-4 leading-relaxed text-foreground/90">
            "O medo de falar em público é o maior medo da humanidade.
            Maior que o medo da morte."
          </blockquote>
          
          <div className="bg-card/50 backdrop-blur-sm border border-gold/10 px-6 py-5 rounded-sm inline-block">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              "Não adianta ficar reclamando e nem mesmo ficar assistindo outras pessoas 
              que sabem menos que você ter mais sucesso que você. <span className="text-gold">O que elas têm? Coragem.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
