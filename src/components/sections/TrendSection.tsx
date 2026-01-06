import { TrendingUp } from "lucide-react";

const TrendSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-5 py-2.5 rounded-full">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">
              Comunicação = Vantagem Competitiva
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Você já percebeu <span className="gradient-text">o movimento?</span>
          </h2>

          {/* Content */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-base md:text-lg">
              Grandes empresários estão se tornando <span className="text-foreground font-medium">a cara dos seus negócios</span>. 
              Pessoas se conectam com pessoas. Histórias convencem.
            </p>
            
            <p className="text-base md:text-lg">
              Quem comunica melhor, <span className="text-gold font-semibold">vende mais</span>. 
              Lidera melhor. Conquista mais.
            </p>
          </div>

          {/* CTA Question */}
          <div className="pt-6">
            <p className="text-xl md:text-2xl font-bold text-foreground/90">
              A pergunta é: <span className="text-gold">você vai ficar só assistindo?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendSection;