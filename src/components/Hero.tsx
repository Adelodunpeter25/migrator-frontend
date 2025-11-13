import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight, Terminal, Zap } from "lucide-react";
import TerminalDemo from "./TerminalDemo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 md:pt-0">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Zero Config • Django-like Migrations</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Database migrations,{" "}
              <span className="gradient-text">made simple</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-foreground/80 leading-relaxed max-w-2xl">
              A lightweight CLI tool that brings Django-like migrations to FastAPI and Flask. 
              Powered by Alembic, simplified for developers.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group"
                asChild
              >
                <a 
                  href="https://pypi.org/project/migrator-cli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-muted hover:text-foreground text-lg px-8 py-6"
                asChild
              >
                <a 
                  href="https://github.com/Adelodunpeter25/migrator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Simple CLI</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">FastAPI & Flask</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Terminal Demo */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
