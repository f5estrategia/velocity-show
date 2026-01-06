import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: string;
  playerId: string;
  playerScript: string;
}

const testimonials: Testimonial[] = [
  {
    id: "vid-693e3e0ece33aa061d9cb93d",
    playerId: "693e3e0ece33aa061d9cb93d",
    playerScript: "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/693e3e0ece33aa061d9cb93d/v4/player.js",
  },
  {
    id: "vid-693e3e0af415b42f2b12603b",
    playerId: "693e3e0af415b42f2b12603b",
    playerScript: "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/693e3e0af415b42f2b12603b/v4/player.js",
  },
  {
    id: "vid-693e3e160cac63a72de64c13",
    playerId: "693e3e160cac63a72de64c13",
    playerScript: "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/693e3e160cac63a72de64c13/v4/player.js",
  },
  {
    id: "vid-693e3e12f415b42f2b12604f",
    playerId: "693e3e12f415b42f2b12604f",
    playerScript: "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/693e3e12f415b42f2b12604f/v4/player.js",
  },
];

const VideoPlayer = ({ testimonial }: { testimonial: Testimonial }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsLoaded(true);
          }
        });
      },
      { rootMargin: "200px", threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    const existingScript = document.querySelector(`script[src="${testimonial.playerScript}"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = testimonial.playerScript;
      script.async = true;
      document.head.appendChild(script);
    }
  }, [isLoaded, testimonial.playerScript]);

  return (
    <div 
      ref={containerRef} 
      className="w-full aspect-[4/5] bg-graphite/50 rounded-xl overflow-hidden border border-white/10"
    >
      {isLoaded ? (
        <vturb-smartplayer
          id={testimonial.id}
          style={{ display: "block", margin: "0 auto", width: "100%", height: "100%" }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

const VideoTestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-graphite/50 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="noise-bg opacity-[0.02]" aria-hidden="true" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            O que nossos <span className="gradient-text">alunos</span> estão dizendo
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Histórias reais de transformação de quem já domina a arte de apresentar
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <VideoPlayer testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 border-gold/20 hover:border-gold/40 hover:bg-gold/10" />
            <CarouselNext className="right-0 border-gold/20 hover:border-gold/40 hover:bg-gold/10" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-accent text-background font-semibold text-sm px-8 py-6 rounded-lg transition-all duration-300 hover:scale-[1.02] group"
            asChild
          >
            <a
              href="https://pay.hotmart.com/M103064438P?bid=1764138358390"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero Fazer Parte
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;