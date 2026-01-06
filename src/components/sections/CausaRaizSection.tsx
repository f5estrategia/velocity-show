const CausaRaizSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Header */}
          <div>
            <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-medium mb-4">
              A Verdade Que Ninguém Te Contou
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Esse medo <span className="gradient-text">não é seu</span>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-base md:text-lg">
              O medo de falar em público foi <span className="text-foreground font-medium">colocado em você</span>. 
              Lá na infância, quando papai e mamãe mandavam você ficar quieto na frente das pessoas.
            </p>
            
            <p className="text-base md:text-lg">
              Você cresceu com isso. E agora, toda vez que precisa apresentar para o board, 
              fechar uma venda ou liderar uma reunião, <span className="text-foreground font-medium">esse medo volta</span>.
            </p>
          </div>

          {/* Quote card */}
          <div className="pt-4">
            <div className="inline-block bg-graphite/50 backdrop-blur-sm border border-gold/20 px-8 py-6 rounded-xl">
              <blockquote className="text-lg md:text-xl font-medium text-foreground/90">
                "Não se culpe. <span className="text-gold">O que foi aprendido pode ser desaprendido.</span>"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausaRaizSection;