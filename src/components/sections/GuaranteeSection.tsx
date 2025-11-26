import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gold/10 p-6 rounded-full">
              <Shield className="w-16 h-16 text-gold" />
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
            GARANTIA INCONDICIONAL<br />DE <span className="text-gold">7 DIAS</span>
          </h2>

          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
            <p>
              Se em até 7 dias você sentir que o programa 
              não é para você, basta enviar um e-mail 
              e devolvemos <span className="text-foreground font-bold">100% do seu investimento.</span>
            </p>
            
            <p>
              Sem perguntas. Sem burocracia.
            </p>

            <p className="text-foreground font-semibold text-xl">
              Simples assim. Porque eu confio no poder 
              dessa transformação.
            </p>
          </div>

          <div className="mt-12 inline-block border-2 border-gold rounded-2xl px-8 py-4">
            <p className="text-gold font-bold text-lg">
              🛡️ 7 DIAS 100% GARANTIDO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
