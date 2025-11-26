import { Mic, Ghost, TrendingUp, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Mic,
    title: "O Travado",
    description: "Você tem conhecimento profundo mas TRAVA na hora de apresentar para o board ou investidores"
  },
  {
    icon: Ghost,
    title: "O Invisível",
    description: "Pessoas menos qualificadas que você conseguem promoções porque sabem SE VENDER melhor"
  },
  {
    icon: TrendingUp,
    title: "O Técnico",
    description: "Sua equipe não entende sua visão e você precisa REPETIR instruções 10 vezes"
  },
  {
    icon: Eye,
    title: "O Inseguro",
    description: "Antes de cada apresentação importante, você perde noites de sono por MEDO de errar"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16 md:mb-20">
          VOCÊ RECONHECE ALGUM<br />DESSES CENÁRIOS?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-16 md:mb-24">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="bg-card border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-6 md:p-8">
                <problem.icon className="w-12 h-12 md:w-16 md:h-16 text-gold mb-4" />
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-gold">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-quote text-2xl md:text-4xl italic mb-6 leading-relaxed">
            <span className="text-foreground">
              "O medo de falar em público é o MAIOR medo da humanidade.
              Maior que o medo da morte.
              As pessoas preferem estar dentro do caixão 
              do que fazendo o discurso no velório."
            </span>
          </blockquote>
          <p className="text-gold font-bold text-lg md:text-xl">— Fernando Machado</p>
          
          <p className="text-muted-foreground text-lg md:text-xl mt-8 leading-relaxed">
            E o pior: esse medo foi <span className="text-foreground font-semibold">COLOCADO</span> em você. 
            Lá na infância, quando o papai e a mamãe mandavam ficar quieto na frente das pessoas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
