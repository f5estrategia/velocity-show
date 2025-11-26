import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-2">
              F5 Estratégia
            </h3>
            <p className="text-xs text-muted-foreground">
              Comunicação que gera resultados
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-3">Links</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium mb-3">Redes Sociais</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="bg-card/50 p-2.5 rounded-lg border border-white/5 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="bg-card/50 p-2.5 rounded-lg border border-white/5 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="bg-card/50 p-2.5 rounded-lg border border-white/5 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
          <p>
            © 2025 F5 Estratégia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
