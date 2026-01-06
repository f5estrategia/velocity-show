import { Mic, Ghost, TrendingUp, Eye } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-graphite/50 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="noise-bg opacity-[0.02]" aria-hidden="true" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-medium mb-4">
            Reconhecimento
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Você reconhece algum desses cenários?
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 md:mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-background/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-gold/20 transition-all duration-300 hover:bg-background/70"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold/20 transition-colors">
                  <problem.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2 text-gold">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90">
            "O medo de falar em público é o maior medo da humanidade.
            <span className="text-gold"> Maior que o medo da morte.</span>"
          </blockquote>
          
          <div className="inline-block bg-background/60 backdrop-blur-sm border border-gold/10 px-6 py-4 rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              "Não adianta ficar reclamando. <span className="text-gold font-medium">O que elas têm? Coragem.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;