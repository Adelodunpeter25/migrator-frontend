import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const TerminalDemo = () => {
  const codeLines = [
    { text: "pip install migrator-cli", delay: 0 },
    { text: "migrator init", delay: 0.5 },
    { text: 'migrator makemigrations "add users"', delay: 1 },
    { text: "migrator migrate", delay: 1.5 },
  ];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20" />
      <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-border bg-muted/30">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-sm font-mono text-muted-foreground">terminal</span>
          <div className="flex gap-2 ml-auto">
            <div className="w-3 h-3 rounded-full bg-destructive/50" />
            <div className="w-3 h-3 rounded-full bg-accent/50" />
            <div className="w-3 h-3 rounded-full bg-primary/50" />
          </div>
        </div>
        
        <div className="p-6 font-mono text-sm space-y-3">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: line.delay }}
              className="flex items-center gap-3"
            >
              <span className="text-primary select-none">$</span>
              <span className="text-foreground">{line.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalDemo;
