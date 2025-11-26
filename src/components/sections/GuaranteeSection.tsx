import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gold/5 p-4 rounded-lg border border-gold/20">
              <Shield className="w-12 h-12 text-gold" strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
            Garantia incondicional de <span className="text-gold">7 dias</span>
          </h2>

          <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-4 max-w-2xl mx-auto">
            <p>
              Se em até 7 dias você sentir que o programa não é para você, 
              basta enviar um e-mail e devolvemos 100% do seu investimento.
            </p>
            
            <p className="text-foreground/90">
              Sem perguntas. Sem burocracia. Simples assim.
            </p>
          </div>

          <div className="mt-8 inline-block border border-gold/30 rounded-lg px-6 py-3">
            <p className="text-gold text-xs font-medium uppercase tracking-wide">
              7 dias • 100% garantido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
