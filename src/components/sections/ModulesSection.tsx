import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import carbonTexture from "@/assets/carbon-texture-2.jpg";

const modules = [
  {
    number: "01",
    title: "Fundação: Conteúdo Reina",
    duration: "13 min",
    description: "Técnicas de oratória são inúteis sem conteúdo relevante. Aprenda a transformar suas experiências únicas em conteúdo que faz você ser ouvido.",
    lessons: [
      "Boas-vindas e apresentação",
      "Conteúdo - A Base de Tudo",
      "Nivelar por Baixo",
      "Não Seja Intelectual"
    ]
  },
  {
    number: "02",
    title: "Preparação: Checklist Estratégico",
    duration: "17 min",
    description: "Descubra o framework jornalístico que uso há 20 anos para estruturar qualquer apresentação em minutos.",
    lessons: [
      "5W1H e Pirâmide Invertida",
      "Monte Seu Roteiro",
      "Priorize Informação",
      "Storytelling na Prática"
    ]
  },
  {
    number: "03",
    title: "Apresentação: Desafiando o Medo",
    duration: "20 min",
    description: "Técnicas de TV ao vivo para você dominar a ansiedade e entrar no palco como dono do espaço.",
    lessons: [
      "O Medo de Falar",
      "Preparação da Voz",
      "Linguagem Corporal",
      "Palavras Difíceis",
      "Abertura e Fechamento"
    ]
  },
  {
    number: "04",
    title: "Dominando o Improviso",
    duration: "16 min",
    description: "O que fazer quando dá tudo errado ao vivo. Segredos de quem improvisou milhares de vezes na TV.",
    lessons: [
      "O Famoso Branco",
      "Técnicas de Respiração",
      "Pare de Pedir Desculpas",
      "A Arte do Improviso",
      "Lidando com Interrupções"
    ]
  },
  {
    number: "05",
    title: "Engajamento de Liderança",
    duration: "24 min",
    description: "Como conquistar uma sala em 30 segundos. Técnicas de conexão que funcionam no palco e no Zoom.",
    lessons: [
      "Criando Rapport",
      "Lidando com Objeções",
      "Posicionamento de Líder",
      "Autenticidade é Estratégia",
      "Engajando Plateia",
      "Inspire para Liderar",
      "Comunicação Digital"
    ]
  },
  {
    number: "06",
    title: "Comunicação Digital",
    duration: "7 min",
    description: "Adapte sua comunicação para o mundo digital sem perder a essência.",
    lessons: [
      "Câmera e Gravação",
      "Plataformas e Formatos"
    ]
  }
];

const ModulesSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Carbon Texture Background */}
      <div className="absolute inset-0">
        <img 
          src={carbonTexture}
          alt=""
          className="w-full h-full object-cover opacity-[0.02]"
        />
        <div className="absolute inset-0 bg-secondary/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 tracking-tight">
            O que você vai <span className="gradient-text">aprender</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            6 Módulos • 125 minutos • Acesso vitalício
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem 
                key={index} 
                value={`module-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden hover:border-gold/20 transition-colors"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-start gap-4 text-left w-full">
                    <span className="text-gold font-light text-2xl md:text-3xl">
                      {module.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-sm md:text-base font-semibold mb-1">
                        {module.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{module.duration}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground italic mb-3 pl-12">
                    {module.description}
                  </p>
                  <ul className="space-y-2 pl-12">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-gold/60 mt-0.5">•</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bonus */}
          <div className="mt-6 bg-gradient-to-r from-gold/5 to-transparent border border-gold/20 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <span className="text-gold font-light text-2xl md:text-3xl">Bônus</span>
              <div>
                <h3 className="text-base font-semibold mb-1">
                  Síntese Final
                </h3>
                <p className="text-xs text-muted-foreground mb-2">Mensagem Final e Próximos Passos • 12 min</p>
                <p className="text-sm text-muted-foreground italic">
                  Uma síntese poderosa de tudo que você aprendeu, pronta para aplicar imediatamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
