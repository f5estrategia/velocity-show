import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const modules = [
  {
    number: "01",
    title: "FUNDAÇÃO: CONTEÚDO REINA",
    duration: "13 minutos",
    description: "Técnicas de oratória são inúteis sem conteúdo relevante. Aprenda a transformar suas experiências únicas em conteúdo que faz você ser ouvido.",
    lessons: [
      "Boas-vindas e apresentação (3min)",
      "Conteúdo - A Base de Tudo (4min)",
      "Nivelar por Baixo (3min)",
      "Não Seja Intelectual (3min)"
    ]
  },
  {
    number: "02",
    title: "PREPARAÇÃO: CHECKLIST ESTRATÉGICO",
    duration: "17 minutos",
    description: "Descubra o framework jornalístico que uso há 20 anos para estruturar qualquer apresentação em minutos.",
    lessons: [
      "5W1H e Pirâmide Invertida (4min)",
      "Monte Seu Roteiro (4min)",
      "Priorize Informação (5min)",
      "Storytelling na Prática (4min)"
    ]
  },
  {
    number: "03",
    title: "APRESENTAÇÃO: DESAFIANDO O MEDO",
    duration: "20 minutos",
    description: "Técnicas de TV ao vivo para você dominar a ansiedade e entrar no palco como dono do espaço.",
    lessons: [
      "O Medo de Falar (4min)",
      "Preparação da Voz (4min)",
      "Linguagem Corporal (5min)",
      "Palavras Difíceis (3min)",
      "Abertura e Fechamento (4min)"
    ]
  },
  {
    number: "04",
    title: "DOMINANDO O IMPROVISO",
    duration: "16 minutos",
    description: "O que fazer quando dá tudo errado ao vivo. Segredos de quem improvisou milhares de vezes na TV.",
    lessons: [
      "O Famoso Branco (3min)",
      "Técnicas de Respiração (3min)",
      "Pare de Pedir Desculpas (3min)",
      "A Arte do Improviso (4min)",
      "Lidando com Interrupções (3min)"
    ]
  },
  {
    number: "05",
    title: "ENGAJAMENTO DE LIDERANÇA",
    duration: "24 minutos",
    description: "Como conquistar uma sala em 30 segundos. Técnicas de conexão que funcionam no palco e no Zoom.",
    lessons: [
      "Criando Rapport (3min)",
      "Lidando com Objeções (4min)",
      "Posicionamento de Líder (4min)",
      "Autenticidade é Estratégia (3min)",
      "Engajando Plateia (4min)",
      "Inspire para Liderar (3min)",
      "Comunicação Digital (3min)"
    ]
  },
  {
    number: "06",
    title: "COMUNICAÇÃO DIGITAL",
    duration: "7 minutos",
    description: "Adapte sua comunicação para o mundo digital sem perder a essência.",
    lessons: [
      "Câmera e Gravação (4min)",
      "Plataformas e Formatos (3min)"
    ]
  }
];

const ModulesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            O QUE VOCÊ VAI <span className="gradient-text">APRENDER</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            6 Módulos + Bônus | 125 minutos de conteúdo prático | Acesso vitalício
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem 
                key={index} 
                value={`module-${index}`}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-gold/50 transition-colors"
              >
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline">
                  <div className="flex items-start gap-4 text-left w-full">
                    <span className="text-gold font-display text-3xl md:text-4xl font-bold">
                      {module.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg md:text-xl font-bold mb-1">
                        {module.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{module.duration}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-6">
                  <p className="text-muted-foreground italic mb-4 pl-16">
                    {module.description}
                  </p>
                  <ul className="space-y-2 pl-16">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-gold mt-1">▸</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bonus */}
          <div className="mt-6 bg-gradient-to-r from-gold/10 to-navy/10 border border-gold/30 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="text-gold font-display text-3xl md:text-4xl font-bold">🎁</span>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                  BÔNUS - SÍNTESE FINAL
                </h3>
                <p className="text-muted-foreground mb-2">Mensagem Final e Próximos Passos (12min)</p>
                <p className="text-muted-foreground italic">
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
