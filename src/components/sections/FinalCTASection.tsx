import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            O microfone está ligado.
            <span className="block mt-2 gradient-text">É hora de ir ao ar.</span>
          </h2>

          <div className="text-sm md:text-base text-muted-foreground space-y-2 max-w-xl mx-auto">
            <p>
              Quantas oportunidades você já perdeu por não saber se comunicar?
            </p>
            <p className="text-foreground/90">
              Quantas ainda vai perder?
            </p>
          </div>

          <Button 
            size="lg"
            className="text-sm px-10 py-6 rounded-md font-medium shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Começar Minha Transformação Agora
          </Button>

          <div className="inline-flex items-center gap-2 bg-gold/5 border border-gold/20 px-5 py-2.5 rounded-full">
            <span className="text-gold text-xs font-medium">
              Condição especial de lançamento - Vagas limitadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
