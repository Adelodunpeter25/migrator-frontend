import { motion } from "framer-motion";
import { Heart, Users, Rocket, Github, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              About <span className="gradient-text">Migrator</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building better tools for Python developers
            </p>
          </motion.div>

          {/* Mission */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary border border-border">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Migrator was born out of a simple observation: database migrations shouldn't be complicated. 
                      While Django developers have long enjoyed the simplicity of <code className="text-foreground bg-muted px-2 py-1 rounded">manage.py migrate</code>, 
                      FastAPI and Flask developers have had to deal with the complexity of managing Alembic directly.
                    </p>
                    <p>
                      We believe that powerful tools should be easy to use. Migrator brings the intuitive, 
                      developer-friendly migration workflow that Django users love to the FastAPI and Flask ecosystems.
                    </p>
                    <p>
                      Our goal is simple: make database migrations so straightforward that you can focus on 
                      building great applications instead of wrestling with migration tools.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Core Values */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-8 bg-card border-border text-center group hover:border-primary/50 transition-all">
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary border border-border group-hover:glow-cyan transition-all mb-4">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Simplicity First</h3>
                <p className="text-muted-foreground">
                  We prioritize simplicity and ease of use without sacrificing power or flexibility.
                </p>
              </Card>

              <Card className="p-8 bg-card border-border text-center group hover:border-primary/50 transition-all">
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary border border-border group-hover:glow-cyan transition-all mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
                <p className="text-muted-foreground">
                  Every feature is designed with the developer experience in mind, from clear error messages to intuitive commands.
                </p>
              </Card>

              <Card className="p-8 bg-card border-border text-center group hover:border-primary/50 transition-all">
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary border border-border group-hover:glow-cyan transition-all mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Open Source</h3>
                <p className="text-muted-foreground">
                  We're committed to open source and building tools that benefit the entire Python community.
                </p>
              </Card>
            </div>
          </motion.section>

          {/* Technology Stack */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Built With</h2>
            <Card className="p-8 bg-card border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technology</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Python</strong> - The foundation of our CLI tool</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Alembic</strong> - Industry-standard migration engine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">SQLAlchemy</strong> - Powerful ORM integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Click</strong> - Beautiful command-line interfaces</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Compatibility</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">FastAPI</strong> - Full support for async applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Flask</strong> - Seamless integration with Flask apps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">PostgreSQL</strong> - Full support for Postgres features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">MySQL, SQLite</strong> - Compatible with major databases</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Contributing */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Card className="p-12 bg-card border-border">
              <Github className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Open Source & Community Driven</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Migrator is open source and welcomes contributions from developers around the world. 
                Join us in making database migrations simpler for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
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
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted"
                  asChild
                >
                  <a 
                    href="https://github.com/Adelodunpeter25/migrator/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Contribute
                  </a>
                </Button>
              </div>
            </Card>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
