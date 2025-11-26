import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-navy/20 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-primary/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="gradient-text">
              O MICROFONE ESTÁ LIGADO.<br />
              É HORA DE IR AO AR.
            </span>
          </h2>

          <div className="text-xl md:text-2xl text-muted-foreground mb-12 space-y-4">
            <p>
              Quantas oportunidades você já perdeu 
              por não saber se comunicar?
            </p>
            <p className="text-foreground font-semibold">
              Quantas ainda vai perder?
            </p>
          </div>

          <Button 
            size="lg"
            className="text-lg md:text-xl px-12 md:px-16 py-7 md:py-8 rounded-lg font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 mb-8"
          >
            COMEÇAR MINHA TRANSFORMAÇÃO AGORA
          </Button>

          <div className="inline-flex items-center gap-2 bg-accent-primary/20 border border-accent-primary px-6 py-3 rounded-full">
            <span className="text-accent-primary font-semibold">
              Condição especial de lançamento - Vagas limitadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
