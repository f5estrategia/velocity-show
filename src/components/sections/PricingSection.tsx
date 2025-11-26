import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import carbonTexture from "@/assets/carbon-texture-2.jpg";

const features = [
  "Programa completo com 6 módulos práticos",
  "125 minutos de conteúdo estratégico",
  "Kit executivo com materiais complementares",
  "Certificado profissional de conclusão",
  "Acesso vitalício à plataforma",
  "Grupo exclusivo de networking",
  "Suporte direto via comunidade",
  "Atualizações futuras inclusas"
];

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

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-tight">
            Transforme Sua <span className="gradient-text">Comunicação</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
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
                <div className="inline-block mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/80 font-light">
                    Programa Completo
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-5xl md:text-6xl font-light tracking-tight">
                    <span className="gradient-text">R$ 1.997</span>
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  ou 12x de R$ 199,70 no cartão
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
