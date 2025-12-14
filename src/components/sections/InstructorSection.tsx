import { Badge } from "@/components/ui/badge";
import fernandoImage from "@/assets/fernando-palco.png";

const InstructorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-lg blur-2xl"></div>
            <img 
              src={fernandoImage}
              alt="Fernando Machado"
              loading="lazy"
              width={634}
              height={868}
              className="relative rounded-lg shadow-2xl w-full grayscale border border-white/5"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 tracking-tight">
              Fernando Machado
            </h2>
            <p className="text-gold text-base md:text-lg font-medium mb-8">
              Ex-Âncora SBT • CEO F5 Estratégia
            </p>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
              <p className="text-foreground font-medium">
                Uma pessoa que falava "poblema" virou apresentador de televisão nacional.
              </p>

              <p>
                Por 13 anos, apresentou jornal ao vivo no SBT. 
                2 horas por dia. 5 dias por semana.
                Zero margem para erro.
              </p>

              <p>
                Começou narrando rodeios aos 15 anos.
                Trabalha desde os 11.
                Hoje é CEO da F5 Estratégia, uma das maiores 
                aceleradoras de marketing do Sul do Brasil.
              </p>

              <p>
                Mais de <span className="text-gold font-medium">R$ 30 milhões</span> em vendas geradas.
                Mais de <span className="text-gold font-medium">1.000 marcas</span> impactadas.
              </p>

              <p className="text-foreground font-medium">
                Agora, pela primeira vez, ele revela tudo 
                que aprendeu em 20 anos de comunicação profissional.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-gold/30 text-gold/80 px-3 py-1 text-xs font-normal">
                13 Anos de TV
              </Badge>
              <Badge variant="outline" className="border-gold/30 text-gold/80 px-3 py-1 text-xs font-normal">
                CEO Grupo Empresarial
              </Badge>
              <Badge variant="outline" className="border-gold/30 text-gold/80 px-3 py-1 text-xs font-normal">
                R$ 30M Gerados
              </Badge>
              <Badge variant="outline" className="border-gold/30 text-gold/80 px-3 py-1 text-xs font-normal">
                1000+ Marcas
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
