import { motion } from "framer-motion";

const milestones = [
  {
    year: "1998",
    age: "14 anos",
    title: "O Início",
    description: "Primeira experiência narrando rodeios crioulos"
  },
  {
    year: "1999",
    age: "15 anos",
    title: "Primeiro Programa de Rádio",
    description: "Rádio comunitária → Rádio Marconi (5 anos)"
  },
  {
    year: "2005",
    title: "Televisão",
    description: "Repórter na TV Criciúma • Estudante de Jornalismo SATC"
  },
  {
    year: "2008",
    title: "SBT Nacional",
    description: "Aprovado em teste para repórter • Transferido para Florianópolis"
  },
  {
    year: "2010",
    title: "Repórter de Rede",
    description: "Representante do SBT Nacional em Santa Catarina"
  },
  {
    year: "2015",
    title: "Prêmios Nacionais",
    description: "Prêmio Fatma de Jornalismo Ambiental • Superou Globo Repórter"
  },
  {
    year: "2016",
    title: "Correspondente Internacional",
    description: "Cobertura econômica em Nova York"
  },
  {
    year: "2017",
    title: "Âncora SBT",
    description: "Apresentador do Jornal • 1º lugar em audiência em SC"
  },
  {
    year: "2019",
    title: "Teleton & Rede Nacional",
    description: "Apresentou Teleton ao vivo em SP • Participações diárias na rede"
  },
  {
    year: "Hoje",
    title: "CEO & Palestrante",
    description: "F5 Estratégia • R$ 30M+ gerados • 1000+ marcas impactadas"
  }
];

const JourneySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold/60 font-light block mb-3">
              20+ Anos de Comunicação
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
              Uma Trajetória de{" "}
              <span className="gradient-text">Excelência</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              De narrações em rodeios aos maiores palcos da televisão brasileira
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent md:-translate-x-px" />

            {/* Milestones */}
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year marker - mobile */}
                  <div className="md:hidden flex-shrink-0 w-[54px] flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-background border-2 border-gold/40 z-10" />
                    <span className="text-[10px] text-gold/60 font-light mt-2 whitespace-nowrap">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Content - left side on desktop */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className={`${index % 2 === 0 ? "md:ml-auto" : ""} max-w-sm`}>
                      {/* Year - desktop only */}
                      <span className="hidden md:block text-xs text-gold/60 font-light mb-1">
                        {milestone.year} {milestone.age && `• ${milestone.age}`}
                      </span>
                      <h3 className="text-sm md:text-base font-medium text-foreground mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot - desktop only */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-background border-2 border-gold/40 z-10" />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold/40" />
                13 anos de TV ao vivo
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold/40" />
                Prêmios nacionais
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold/40" />
                Cobertura internacional
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
