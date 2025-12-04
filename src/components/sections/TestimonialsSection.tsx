import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 md:mb-16 tracking-tight">
          Resultados <span className="gradient-text">comprovados</span>
        </h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-10 md:mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border border-gold/10 text-center group hover:border-gold/30 transition-colors">
            <CardContent className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-light text-gold mb-2">R$ 30M</div>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wide">Em Vendas Geradas</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border border-gold/10 text-center group hover:border-gold/30 transition-colors">
            <CardContent className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-light text-gold mb-2">1000+</div>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wide">Marcas Impactadas</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border border-gold/10 text-center group hover:border-gold/30 transition-colors">
            <CardContent className="p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-light text-gold mb-2">13</div>
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wide">Anos de TV ao Vivo</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="text-sm px-8 py-6 rounded-sm font-normal tracking-wide border-gold/30 hover:border-gold/60 hover:bg-gold/5"
            asChild
          >
            <a href="https://pay.hotmart.com/M103064438P?bid=1764138358390" target="_blank" rel="noopener noreferrer">
              Quero Esses Resultados
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
