import { Badge } from "@/components/ui/badge";
import fernandoImage from "@/assets/fernando-hero.jpeg";

const InstructorSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-navy/20 rounded-2xl blur-3xl"></div>
            <img 
              src={fernandoImage}
              alt="Fernando Machado"
              className="relative rounded-2xl shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              FERNANDO MACHADO
            </h2>
            <p className="text-accent-primary text-xl md:text-2xl font-semibold mb-8">
              Ex-Âncora SBT | CEO F5 Estratégia
            </p>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p className="text-foreground font-semibold">
                Uma pessoa que falava "poblema" virou apresentador 
                de televisão nacional.
              </p>

              <p>
                Por <span className="text-accent-primary font-bold">13 anos</span>, apresentou jornal AO VIVO no SBT.
                2 horas por dia. 5 dias por semana.
                Zero margem para erro. Zero "vou gravar de novo".
              </p>

              <p>
                Começou narrando rodeios aos 15 anos.
                Trabalha desde os 11.
                Hoje é CEO da F5 Estratégia, uma das maiores 
                aceleradoras de marketing do Sul do Brasil.
              </p>

              <p>
                Mais de <span className="text-accent-primary font-bold">R$ 30 milhões</span> em vendas geradas.
                Mais de <span className="text-accent-primary font-bold">1.000 marcas</span> impactadas.
              </p>

              <p className="text-foreground font-semibold">
                Agora, pela primeira vez, ele revela TUDO 
                que aprendeu em 20 anos de comunicação profissional.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-accent-primary text-accent-primary px-4 py-2 text-sm">
                13 Anos de TV ao Vivo
              </Badge>
              <Badge variant="outline" className="border-accent-primary text-accent-primary px-4 py-2 text-sm">
                CEO de Grupo Empresarial
              </Badge>
              <Badge variant="outline" className="border-accent-primary text-accent-primary px-4 py-2 text-sm">
                R$ 30 Milhões Gerados
              </Badge>
              <Badge variant="outline" className="border-accent-primary text-accent-primary px-4 py-2 text-sm">
                1000+ Marcas Atendidas
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
