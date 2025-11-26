import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
          O QUE DIZEM SOBRE <span className="text-accent-primary">FERNANDO</span>
        </h2>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card border border-accent-primary/30 text-center">
            <CardContent className="p-8">
              <div className="text-5xl font-display font-black text-accent-primary mb-2">R$ 30M</div>
              <p className="text-muted-foreground">Em Vendas Geradas</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-accent-primary/30 text-center">
            <CardContent className="p-8">
              <div className="text-5xl font-display font-black text-accent-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Marcas Impactadas</p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-accent-primary/30 text-center">
            <CardContent className="p-8">
              <div className="text-5xl font-display font-black text-accent-primary mb-2">13</div>
              <p className="text-muted-foreground">Anos de TV ao Vivo</p>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof Placeholder */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-accent-primary text-accent-primary" />
            ))}
          </div>
          <p className="text-muted-foreground">
            Depoimentos de clientes em breve
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
