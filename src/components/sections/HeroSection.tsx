import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import logoTreinamento from "@/assets/logo-treinamento.svg";

const VTURB_PLAYER_ID = "vid-693170b030e3e1f3170aac15";
const VTURB_SCRIPT_URL = "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/693170b030e3e1f3170aac15/v4/player.js";

const VSLPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer - load player when it enters viewport
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

    // Check if script already exists
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

    return () => {
      // Don't remove script on unmount to preserve player state
    };
  }, [shouldLoad]);

  useEffect(() => {
    if (scriptLoaded) {
      // Give player a moment to initialize
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [scriptLoaded]);

  return (
    <div ref={containerRef} className="relative aspect-video rounded-sm overflow-hidden border border-white/5 shadow-elegant">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-navy-deep flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 animate-pulse" />
          <div className="relative">
            <div 
              className="absolute inset-0 bg-gold/5 blur-3xl animate-pulse-glow"
            />
            <div className="relative w-16 h-16 rounded-full border border-gold-whisper/40 flex items-center justify-center">
              <div className="w-3 h-3 bg-gold/60 rounded-full animate-pulse" />
            </div>
          </div>
          <p className="absolute bottom-6 left-6 text-[11px] text-muted-foreground uppercase tracking-wider">
            Carregando apresentação...
          </p>
        </div>
      )}
      
      {/* VTurb Player - only render when should load */}
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  
  // Cache bounding rect to avoid forced reflows on every mouse move
  useEffect(() => {
    const updateRect = () => {
      if (sectionRef.current) {
        rectRef.current = sectionRef.current.getBoundingClientRect();
      }
    };
    
    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect);
    
    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
    };
  }, []);
  
  // Mouse tracking for glow effects - only on desktop, uses cached rect
  useEffect(() => {
    // Skip on mobile/touch devices for better performance
    if (window.matchMedia('(max-width: 768px)').matches) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (rectRef.current) {
        setMousePosition({
          x: e.clientX - rectRef.current.left,
          y: e.clientY - rectRef.current.top,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative md:min-h-screen md:flex md:items-center overflow-hidden"
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Carbon Texture Background with Aurora */}
      <div className="absolute inset-0 z-0">
        <div className="noise-bg" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background"></div>
        
        {/* Aurora gradient effect - CSS only for better performance */}
        <div 
          className="absolute inset-0 opacity-30 aurora-gradient"
          aria-hidden="true"
        />
      </div>

      {/* Content - Editorial Layout */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-6 pb-12 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="mb-4 md:mb-10 lg:mb-14 hero-fade-in" style={{ animationDelay: '0s' }}>
            <img 
              src={logoTreinamento} 
              alt="COMUNICAÇÃO: O Discurso do Líder - Fernando Machado" 
              fetchPriority="high"
              width={500}
              height={180}
              className="w-[180px] md:w-[400px] lg:w-[500px] h-auto mx-auto"
            />
          </div>

          {/* Single Column Layout */}
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-12">
            {/* Headline and Subheadline */}
            <div className="space-y-3 md:space-y-6 text-center hero-fade-in" style={{ animationDelay: '0.15s' }}>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.15] tracking-tight">
                <span className="text-reveal" style={{ '--reveal-delay': '0s' } as React.CSSProperties}>
                  A comunicação é a <span className="relative inline-block">
                    única arma
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent"></span>
                  </span>
                </span>
                <span className="block mt-1 md:mt-2 gradient-text font-impact font-bold tracking-tight text-reveal" style={{ '--reveal-delay': '0.2s' } as React.CSSProperties}>
                  que você tem para jogar esse jogo
                </span>
              </h1>

              <p className="text-xs md:text-lg text-muted-foreground leading-relaxed max-w-xs md:max-w-2xl mx-auto">
                Assista ao vídeo e descubra como uma pessoa que falava "poblema" virou apresentador de TV — e como você pode dominar essa habilidade de forma prática.
              </p>
            </div>

            {/* VSL */}
            <div className="hero-fade-in" style={{ animationDelay: '0.25s' }}>
              <VSLPlayer />
            </div>

            {/* CTA */}
            <div className="text-center hero-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="text-sm px-8 py-6 rounded-sm font-normal tracking-wide micro-interaction mouse-glow group relative overflow-hidden"
                asChild
              >
                <a href="https://pay.hotmart.com/M103064438P?bid=1764138358390" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Iniciar Jornada</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 shimmer"></div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
