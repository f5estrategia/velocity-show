import { Badge } from "@/components/ui/badge";
import fernandoImage from "@/assets/fernando-palco.png";

const InstructorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/20 rounded-xl pointer-events-none" />
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-gold rounded-tl-sm" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-gold rounded-tr-sm" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-gold rounded-bl-sm" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-gold rounded-br-sm" />
            
            <img 
              src={fernandoImage}
              alt="Fernando Machado"
              loading="lazy"
              width={634}
              height={868}
              className="relative rounded-lg w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-medium mb-4">
              Seu Mentor
            </span>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
              Fernando Machado
            </h2>
            <p className="text-gold text-base md:text-lg font-medium mb-8">
              Ex-Âncora SBT • CEO F5 Estratégia
            </p>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
              <p className="text-foreground font-medium text-base">
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
                Mais de <span className="text-gold font-semibold">R$ 30 milhões</span> em vendas geradas.
                Mais de <span className="text-gold font-semibold">1.000 marcas</span> impactadas.
              </p>

              <p className="text-foreground font-medium">
                Agora, pela primeira vez, ele revela tudo 
                que aprendeu em 20 anos de comunicação profissional.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-gold/30 bg-gold/5 text-gold px-4 py-1.5 text-xs font-medium rounded-full">
                13 Anos de TV
              </Badge>
              <Badge variant="outline" className="border-gold/30 bg-gold/5 text-gold px-4 py-1.5 text-xs font-medium rounded-full">
                CEO Grupo Empresarial
              </Badge>
              <Badge variant="outline" className="border-gold/30 bg-gold/5 text-gold px-4 py-1.5 text-xs font-medium rounded-full">
                R$ 30M Gerados
              </Badge>
              <Badge variant="outline" className="border-gold/30 bg-gold/5 text-gold px-4 py-1.5 text-xs font-medium rounded-full">
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