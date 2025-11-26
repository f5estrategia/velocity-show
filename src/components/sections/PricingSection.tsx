import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "EXECUTIVO",
    price: "1.997",
    installments: "12x R$ 199,70",
    features: [
      "Programa completo (6 módulos)",
      "Kit Executivo PDFs",
      "Certificado Profissional",
      "Acesso vitalício",
      "Grupo networking"
    ],
    highlighted: false
  },
  {
    name: "LÍDER PRO",
    price: "3.997",
    installments: "12x R$ 399,70",
    badge: "MAIS VENDIDO",
    features: [
      "Tudo do Executivo +",
      "Módulo bônus exclusivo",
      "1 Análise de Vídeo (Fernando)",
      "Workbook Impresso enviado",
      "Certificado Premium",
      "Acesso prioritário eventos"
    ],
    highlighted: true
  },
  {
    name: "CEO ELITE",
    price: "7.997",
    installments: "12x R$ 799,70",
    features: [
      "Tudo do Líder Pro +",
      "Mentoria 90min com Fernando",
      "Análise de 3 vídeos seus",
      "Workshop Presencial (1x/ano)",
      "1h de Consultoria exclusiva",
      "Certificado VIP assinado"
    ],
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          ESCOLHA SEU NÍVEL DE <span className="gradient-text">TRANSFORMAÇÃO</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Investimento que retorna em uma única apresentação bem-sucedida
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative ${
                tier.highlighted 
                  ? 'bg-card border-2 border-accent-primary shadow-2xl scale-105 z-10' 
                  : 'bg-card border border-border'
              } transition-all duration-300 hover:scale-105`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-accent-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {tier.badge}
                  </span>
                </div>
              )}

              <CardHeader className="text-center pt-8">
                <CardTitle className="font-display text-2xl font-bold mb-4">
                  {tier.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-display font-black text-accent-primary">
                    R$ {tier.price}
                  </span>
                  <span className="text-muted-foreground"> à vista</span>
                </div>
                <p className="text-sm text-muted-foreground">ou {tier.installments}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className={feature.includes('+') ? 'font-semibold text-accent-primary' : 'text-muted-foreground'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    tier.highlighted 
                      ? 'bg-accent-primary text-white hover:bg-accent-primary/90 shadow-lg' 
                      : 'bg-accent-primary/10 text-accent-primary hover:bg-accent-primary hover:text-white'
                  } font-bold py-6 transition-all duration-300`}
                  size="lg"
                >
                  QUERO O {tier.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm">
          Parcelamento em até 12x no cartão de crédito | Ambiente 100% seguro
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
