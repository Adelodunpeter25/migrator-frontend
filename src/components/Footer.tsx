import { memo } from "react";
import { Github, Twitter, Mail } from "lucide-react";

const Footer = memo(() => {
  return (
    <footer className="border-t-2 border-primary/20 py-6 px-4 sm:px-6 lg:px-8 mt-20 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-3xl font-mono font-bold gradient-text">Migrator</span>
            <p className="text-base text-muted-foreground mt-2">
              Database migrations, made simple
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/db-toolkit/migrator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a 
              href="mailto:adelodunpeter24@gmail.com"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/40 text-center text-base text-muted-foreground">
          <p>© 2025 Migrator. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
