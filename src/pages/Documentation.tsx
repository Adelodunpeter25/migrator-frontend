import { motion } from "framer-motion";
import { Book, Terminal, Code, Database, GitBranch, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Documentation = () => {
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
            <h1 className="text-6xl sm:text-7xl font-bold mb-4">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about using Migrator in your projects
            </p>
          </motion.div>

          {/* Quick Start */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">Quick Start</h2>
            </div>
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Installation</h3>
                  <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                    <code className="text-base font-mono">pip install migrator-cli</code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Initialize Migrator</h3>
                  <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                    <code className="text-base font-mono">migrator init</code>
                  </pre>
                  <p className="text-lg text-muted-foreground mt-2">
                    This creates a migrations folder and necessary configuration files in your project.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Create a Migration</h3>
                  <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                    <code className="text-base font-mono">migrator makemigrations "description of changes"</code>
                  </pre>
                  <p className="text-lg text-muted-foreground mt-2">
                    Automatically detects changes in your SQLAlchemy models and creates a migration file.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Apply Migrations</h3>
                  <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                    <code className="text-base font-mono">migrator migrate</code>
                  </pre>
                  <p className="text-lg text-muted-foreground mt-2">
                    Applies all pending migrations to your database.
                  </p>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* CLI Commands */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">CLI Commands</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-2xl font-semibold mb-3">migrator init</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  Initialize Migrator in your project. Creates the migrations directory and configuration.
                </p>
                <pre className="bg-muted border border-border rounded-lg p-3 text-base font-mono">
                  migrator init
                </pre>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-2xl font-semibold mb-3">migrator makemigrations</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  Create a new migration based on model changes.
                </p>
                <pre className="bg-muted border border-border rounded-lg p-3 text-base font-mono">
                  migrator makemigrations "message"
                </pre>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-2xl font-semibold mb-3">migrator migrate</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  Apply all pending migrations to the database.
                </p>
                <pre className="bg-muted border border-border rounded-lg p-3 text-base font-mono">
                  migrator migrate
                </pre>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-2xl font-semibold mb-3">migrator history</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  View migration history and current database version.
                </p>
                <pre className="bg-muted border border-border rounded-lg p-3 text-base font-mono">
                  migrator history
                </pre>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-2xl font-semibold mb-3">migrator downgrade</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  Rollback to a previous migration version.
                </p>
                <pre className="bg-muted border border-border rounded-lg p-3 text-base font-mono">
                  migrator downgrade -1
                </pre>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-2xl font-semibold mb-3">migrator current</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  Show the current database migration version.
                </p>
                <pre className="bg-muted border border-border rounded-lg p-3 text-base font-mono">
                  migrator current
                </pre>
              </Card>
            </div>
          </motion.section>

          {/* Configuration */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">Configuration</h2>
            </div>
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Database URL</h3>
                  <p className="text-lg text-muted-foreground mb-3">
                    Set your database connection URL as an environment variable:
                  </p>
                  <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                    <code className="text-base font-mono">export DATABASE_URL="postgresql://user:password@localhost/dbname"</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">FastAPI Integration</h3>
                  <p className="text-lg text-muted-foreground mb-3">
                    Import your models in your FastAPI application:
                  </p>
                  <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                    <code className="text-base font-mono">{`from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base

DATABASE_URL = "postgresql://user:password@localhost/dbname"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Flask Integration</h3>
                  <p className="text-lg text-muted-foreground mb-3">
                    Configure Flask-SQLAlchemy with your models:
                  </p>
                  <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto">
                    <code className="text-base font-mono">{`from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:pass@localhost/db'
db = SQLAlchemy(app)`}</code>
                  </pre>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Best Practices */}
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Book className="h-10 w-10 text-primary" />
              <h2 className="text-5xl font-bold">Best Practices</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-card border-border">
                <GitBranch className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-3xl font-semibold mb-4">Version Control</h3>
                <p className="text-xl text-muted-foreground">
                  Always commit your migration files to version control alongside your code changes. This ensures your team has a consistent database schema.
                </p>
              </Card>

              <Card className="p-8 bg-card border-border">
                <Code className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-3xl font-semibold mb-4">Descriptive Names</h3>
                <p className="text-xl text-muted-foreground">
                  Use clear, descriptive names for your migrations that explain what changes are being made. This makes debugging and reviewing migrations easier.
                </p>
              </Card>

              <Card className="p-8 bg-card border-border">
                <Database className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-3xl font-semibold mb-4">Test First</h3>
                <p className="text-xl text-muted-foreground">
                  Always test migrations in a development or staging environment before applying them to production databases.
                </p>
              </Card>

              <Card className="p-8 bg-card border-border">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-3xl font-semibold mb-4">Small Increments</h3>
                <p className="text-xl text-muted-foreground">
                  Break large schema changes into smaller, incremental migrations. This makes it easier to rollback if needed and reduces risk.
                </p>
              </Card>
            </div>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
