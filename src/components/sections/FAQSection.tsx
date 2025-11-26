import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Para quem é esse programa?",
    answer: "Para executivos, empresários, líderes e profissionais que querem usar a comunicação como ferramenta de resultados. Não é curso para 'falar bonito' - é para GERAR RESULTADOS."
  },
  {
    question: "Preciso ter experiência com oratória?",
    answer: "Não. O programa foi desenhado para quem nunca fez curso de comunicação e também para quem já fez vários e não viu resultado. Começamos do zero e vamos até técnicas avançadas."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "Acesso vitalício. Uma vez aluno, sempre aluno. Você pode reassistir quantas vezes quiser, no seu ritmo."
  },
  {
    question: "Serve para comunicação digital também?",
    answer: "Sim. O Módulo 6 é dedicado a comunicação em câmera, lives, reuniões virtuais e gravação de conteúdo."
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Se não for para você, devolvemos 100% do valor. Sem perguntas."
  },
  {
    question: "Emite certificado?",
    answer: "Sim. Todos os tiers recebem certificado. O CEO Elite recebe certificado VIP assinado pessoalmente pelo Fernando."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
          PERGUNTAS <span className="gradient-text">FREQUENTES</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent-primary/50 transition-colors"
              >
                <AccordionTrigger className="px-6 md:px-8 py-6 text-left hover:no-underline">
                  <span className="font-display text-lg md:text-xl font-semibold pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
