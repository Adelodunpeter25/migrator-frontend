import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Zap, Settings, Database, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = memo(() => {
  const features = useMemo(() => [
    {
      icon: Zap,
      title: "FastAPI & Flask Support",
      description: "Works seamlessly with your existing FastAPI or Flask applications. No complex setup required.",
    },
    {
      icon: Settings,
      title: "Zero Config Setup",
      description: "Get started in seconds with intelligent defaults. No configuration files to manage.",
    },
    {
      icon: Database,
      title: "Alembic Powered",
      description: "Built on top of Alembic, the industry-standard migration tool for SQLAlchemy.",
    },
    {
      icon: Terminal,
      title: "Simple CLI",
      description: "Intuitive command-line interface inspired by Django's migrations. Easy to learn and use.",
    },
  ], []);

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            Everything you need, <span className="gradient-text">nothing you don't</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Migrator provides a simple, powerful interface for managing your database schema
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-primary border border-border group-hover:glow-cyan transition-all duration-300">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Features.displayName = "Features";

export default Features;
