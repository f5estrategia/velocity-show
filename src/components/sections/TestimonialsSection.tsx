import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 md:mb-16 tracking-tight">
          Resultados <span className="gradient-text">comprovados</span>
        </h2>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border border-gold/10 text-center group hover:border-gold/30 transition-colors">
            <CardContent className="p-8">
              <div className="text-4xl font-light text-gold mb-2">R$ 30M</div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Em Vendas Geradas</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border border-gold/10 text-center group hover:border-gold/30 transition-colors">
            <CardContent className="p-8">
              <div className="text-4xl font-light text-gold mb-2">1000+</div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Marcas Impactadas</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border border-gold/10 text-center group hover:border-gold/30 transition-colors">
            <CardContent className="p-8">
              <div className="text-4xl font-light text-gold mb-2">13</div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Anos de TV ao Vivo</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
