import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import logoTreinamento from "@/assets/logo-treinamento.svg";
import fernandoHero from "@/assets/fernando-hero.jpeg";
import { ArrowRight, Play } from "lucide-react";

const VTURB_PLAYER_ID = "vid-693170b030e3e1f3170aac15";
const VTURB_SCRIPT_URL = "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/693170b030e3e1f3170aac15/v4/player.js";

const VSLPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const existingScript = document.querySelector(`script[src="${VTURB_SCRIPT_URL}"]`);
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = VTURB_SCRIPT_URL;
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  }, [shouldLoad]);

  useEffect(() => {
    if (scriptLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [scriptLoaded]);

  return (
    <div ref={containerRef} className="relative aspect-video rounded-lg overflow-hidden border border-white/10 shadow-elegant bg-graphite">
      {isLoading && (
        <div className="absolute inset-0 bg-graphite flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 animate-pulse" />
          <div className="relative flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
              <Play className="w-6 h-6 text-gold fill-gold" />
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Carregando...
            </p>
          </div>
        </div>
      )}
      
      {shouldLoad && (
        <vturb-smartplayer 
          id={VTURB_PLAYER_ID} 
          style={{ display: 'block', margin: '0 auto', width: '100%' }}
        />
      )}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="noise-bg opacity-[0.02]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-graphite/50" />
        
        {/* Subtle glow effect */}
        <div 
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12 md:py-20">
        {/* Mobile: Stacked layout / Desktop: Split layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Logo */}
            <div className="hero-fade-in" style={{ animationDelay: '0s' }}>
              <img 
                src={logoTreinamento} 
                alt="O Discurso do Líder" 
                fetchPriority="high"
                width={280}
                height={100}
                className="w-[180px] md:w-[240px] lg:w-[280px] h-auto mx-auto lg:mx-0"
              />
            </div>

            {/* Eyebrow */}
            <div className="hero-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-medium">
                Com Fernando Machado
              </span>
            </div>

            {/* Headline */}
            <div className="hero-fade-in space-y-3" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="block text-foreground">
                  MUDE SUA
                </span>
                <span className="block gradient-text">
                  COMUNICAÇÃO
                </span>
                <span className="block text-foreground">
                  MUDE SUA VIDA
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="hero-fade-in text-sm md:text-base lg:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0" style={{ animationDelay: '0.3s' }}>
              A comunicação é a única arma que você tem para jogar esse jogo. 
              Domine-a e transforme sua carreira.
            </p>

            {/* CTA Button */}
            <div className="hero-fade-in flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold-accent text-background font-semibold text-sm px-8 py-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-glow group"
                asChild
              >
                <a href="https://pay.hotmart.com/M103064438P?bid=1764138358390" target="_blank" rel="noopener noreferrer">
                  Iniciar Minha Jornada
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="hero-fade-in pt-4" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-6 justify-center lg:justify-start text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-gold font-semibold text-lg">13</span>
                  <span>Anos de<br/>TV ao Vivo</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className="text-gold font-semibold text-lg">1000+</span>
                  <span>Marcas<br/>Impactadas</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className="text-gold font-semibold text-lg">R$30M</span>
                  <span>Em Vendas<br/>Geradas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="order-1 lg:order-2 hero-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 md:-inset-4 border border-gold/20 rounded-xl pointer-events-none" />
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-gold rounded-tl-sm" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-gold rounded-tr-sm" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-gold rounded-bl-sm" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-gold rounded-br-sm" />
              
              <VSLPlayer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;