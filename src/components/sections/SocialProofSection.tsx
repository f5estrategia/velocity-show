import { Quote } from "lucide-react";
import depoimentoPatricia from "@/assets/depoimento-patricia.png";
import depoimentoThaii from "@/assets/depoimento-thaii.jpeg";

const testimonials = [
  {
    image: depoimentoPatricia,
    alt: "Depoimento de Patrícia Aparecida Silva elogiando a comunicação autêntica e criativa do apresentador",
  },
  {
    image: depoimentoThaii,
    alt: "Depoimento de thaii_magalhaes destacando Fernando Machado como pessoa decisiva para mudar para a comunicação",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <Quote className="w-4 h-4 text-gold/60" strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold/70 font-light">
              Prova Social
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            O que falam sobre o <span className="gradient-text">Fernando</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card/30 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden hover:border-gold/20 transition-all duration-500"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-4 md:p-5">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
