import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

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

// Lazy Video Player Component - only loads when activated
const LazyVideoPlayer = ({ testimonial }: { testimonial: Testimonial }) => {
  const [isActivated, setIsActivated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActivated) return;

    // Load the player script only when activated
    const script = document.createElement("script");
    script.src = testimonial.playerScript;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src="${testimonial.playerScript}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [isActivated, testimonial.playerScript]);

  if (!isActivated) {
    return (
      <button
        onClick={() => setIsActivated(true)}
        className="relative w-full aspect-[4/5] bg-card/50 border border-gold/10 rounded-sm overflow-hidden group cursor-pointer"
        aria-label="Reproduzir depoimento"
      >
        {/* Placeholder with play button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-background/80 to-background/95">
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors mb-4">
            <Play className="w-8 h-8 text-gold ml-1" />
          </div>
          <span className="text-sm text-muted-foreground">Toque para assistir</span>
        </div>
      </button>
    );
  }

  return (
    <div ref={containerRef} className="w-full aspect-[4/5]">
      <vturb-smartplayer
        id={testimonial.id}
        style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "400px" }}
      />
    </div>
  );
};

const VideoTestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <LazyVideoPlayer testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 border-gold/20 hover:border-gold/40 hover:bg-gold/5" />
            <CarouselNext className="right-0 border-gold/20 hover:border-gold/40 hover:bg-gold/5" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Button
            size="lg"
            className="text-sm px-8 py-6 rounded-sm font-normal tracking-wide bg-gold hover:bg-gold/90 text-background"
            asChild
          >
            <a
              href="https://pay.hotmart.com/M103064438P?bid=1764138358390"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero Fazer Parte
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
