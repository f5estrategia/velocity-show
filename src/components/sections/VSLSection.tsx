import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VSLSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 md:mb-12 leading-tight">
            ASSISTA E DESCUBRA COMO UMA PESSOA<br />
            QUE FALAVA <span className="text-gold">"POBLEMA"</span><br />
            VIROU APRESENTADOR DE TV NACIONAL
          </h2>

          {/* Video Placeholder */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 group cursor-pointer shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-background/80 group-hover:from-navy/60 group-hover:to-background/60 transition-all duration-300 flex items-center justify-center">
              <div className="bg-gold/20 backdrop-blur-sm p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Play className="w-16 h-16 text-gold fill-gold" />
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-gold/30 group-hover:border-gold/60 transition-colors duration-300 rounded-2xl"></div>
          </div>

          <details className="text-left bg-card border border-border rounded-lg p-6 mb-8">
            <summary className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors font-semibold">
              📄 Clique para ler a transcrição completa
            </summary>
            <div className="mt-4 text-muted-foreground space-y-2">
              <p>Transcrição do vídeo disponível aqui...</p>
            </div>
          </details>

          <Button 
            variant="outline" 
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            QUERO APRENDER ESSAS TÉCNICAS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
