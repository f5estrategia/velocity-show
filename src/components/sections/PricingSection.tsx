import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import carbonTexture from "@/assets/carbon-texture-2.jpg";
import { useState, useEffect } from "react";

const features = [
  "Programa completo com 5 módulos práticos",
  "125 minutos de conteúdo estratégico",
  "Kit executivo com materiais complementares",
  "Certificado profissional de conclusão",
  "Acesso aos novos treinamentos futuros",
  "Comunicação, vendas e estratégias digitais",
  "Grupo exclusivo de networking",
  "Suporte direto via comunidade"
];

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = sessionStorage.getItem('countdown-end');
    if (saved) {
      const remaining = Math.max(0, Math.floor((parseInt(saved) - Date.now()) / 1000));
      return remaining;
    }
    const endTime = Date.now() + 15 * 60 * 1000;
    sessionStorage.setItem('countdown-end', endTime.toString());
    return 15 * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center gap-3 mb-6">
      <div className="flex items-center gap-2 text-gold/80">
        <Clock className="w-4 h-4" />
        <span className="text-[10px] tracking-[0.15em] uppercase font-light">
          Oferta válida por tempo limitado
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <div className="bg-background/50 border border-gold/20 rounded-md px-4 py-2 min-w-[60px]">
            <span className="text-2xl md:text-3xl font-light gradient-text tabular-nums">
              {String(minutes).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">min</span>
        </div>
        <span className="text-xl text-gold/50 font-light">:</span>
        <div className="flex flex-col items-center">
          <div className="bg-background/50 border border-gold/20 rounded-md px-4 py-2 min-w-[60px]">
            <span className="text-2xl md:text-3xl font-light gradient-text tabular-nums">
              {String(seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-wider text-muted-foreground mt-1">seg</span>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Carbon Texture Background */}
      <div className="absolute inset-0">
        <img 
          src={carbonTexture}
          alt=""
          className="w-full h-full object-cover opacity-[0.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
            Transforme Sua <span className="gradient-text">Comunicação</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto px-4">
            Investimento que retorna em uma única apresentação bem-sucedida
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="relative bg-card/50 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden mouse-glow border-trace">
            {/* Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            
            <CardContent className="p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-8 pb-8 border-b border-white/5">
                <CountdownTimer />
                
                <div className="inline-block mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/80 font-light">
                    Preço de Lançamento - Programa Completo
                  </span>
                </div>
                
                {/* Valor Original */}
                <div className="mb-3">
                  <span className="text-lg text-muted-foreground line-through">
                    De R$ 997
                  </span>
                </div>
                
                {/* Valor com Desconto - Destaque */}
                <div className="mb-4">
                  <div className="inline-block bg-gold/10 border border-gold/30 rounded-lg px-6 py-4">
                    <div className="text-sm text-gold/80 uppercase tracking-wider mb-1">Por apenas</div>
                    <span className="font-light tracking-tight whitespace-nowrap flex items-baseline justify-center gap-2">
                      <span className="text-xl md:text-2xl gradient-text">10x de</span>
                      <span className="text-4xl md:text-5xl gradient-text">R$&nbsp;57</span>
                    </span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  Ou R$&nbsp;475 à vista no cartão ou PIX
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-4 h-4 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                        <Check className="w-2.5 h-2.5 text-gold" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA - Mouse-aware */}
              <Button 
                className="w-full text-sm py-6 rounded-md font-medium shadow-lg hover:shadow-xl transition-all duration-300 mouse-glow relative overflow-hidden group"
                size="lg"
                asChild
              >
                <a href="https://pay.hotmart.com/M103064438P?bid=1764138358390" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Começar Agora</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 shimmer"></div>
                </a>
              </Button>

              {/* Footer Note */}
              <p className="text-center text-xs text-muted-foreground mt-6">
                Ambiente seguro • Parcelamento em até 12x
              </p>
            </CardContent>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          </Card>

          {/* Guarantee Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-1 h-1 rounded-full bg-gold/50"></div>
              <span>Garantia incondicional de 7 dias</span>
              <div className="w-1 h-1 rounded-full bg-gold/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
