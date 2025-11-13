import { memo } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = memo(() => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <div className="bg-background/80 backdrop-blur-xl border border-border/40 rounded-full px-8 py-4 shadow-lg">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-mono font-bold gradient-text">
              Migrator
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-xl text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <Link to="/blog" className="text-xl text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link to="/docs" className="text-xl text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link to="/about" className="text-xl text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
              <a 
                href="https://github.com/Adelodunpeter25/migrator" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              asChild
            >
              <a 
                href="https://pypi.org/project/migrator-cli" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Install
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
