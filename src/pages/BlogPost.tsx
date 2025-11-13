import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogContent: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}> = {
  "getting-started-with-migrator": {
    title: "Getting Started with Migrator",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Tutorial",
    content: [
      "# Getting Started with Migrator",
      "Migrator is a lightweight CLI tool that brings Django-like migrations to FastAPI and Flask applications. In this tutorial, we'll walk through setting up Migrator in your project.",
      "## Installation",
      "First, install Migrator using pip:",
      "```bash\npip install migrator-cli\n```",
      "## Initialize Your Project",
      "Navigate to your project directory and initialize Migrator:",
      "```bash\nmigrator init\n```",
      "This creates a migrations folder and configuration files needed for managing your database schema.",
      "## Create Your First Migration",
      "After defining your SQLAlchemy models, create a migration:",
      "```bash\nmigrator makemigrations \"add users table\"\n```",
      "## Apply Migrations",
      "Apply the pending migrations to your database:",
      "```bash\nmigrator migrate\n```",
      "That's it! You've successfully set up Migrator and run your first migration. In the next tutorial, we'll explore more advanced features.",
    ],
  },
  "migrating-from-alembic": {
    title: "Migrating from Alembic to Migrator",
    date: "2025-01-10",
    readTime: "8 min read",
    category: "Guide",
    content: [
      "# Migrating from Alembic to Migrator",
      "If you're currently using Alembic directly, transitioning to Migrator is straightforward. Migrator is built on top of Alembic but provides a simpler, more intuitive interface.",
      "## Why Migrate?",
      "- Simpler CLI commands similar to Django",
      "- Less configuration overhead",
      "- Better integration with FastAPI and Flask",
      "- Automatic detection of model changes",
      "## Step-by-Step Migration",
      "### 1. Install Migrator",
      "```bash\npip install migrator-cli\n```",
      "### 2. Backup Your Existing Migrations",
      "Before making any changes, backup your existing alembic directory:",
      "```bash\ncp -r alembic alembic_backup\n```",
      "### 3. Initialize Migrator",
      "```bash\nmigrator init\n```",
      "### 4. Import Existing Migrations",
      "Migrator can work alongside your existing Alembic migrations. Your database version history is preserved.",
      "## Next Steps",
      "Once migrated, you can continue creating new migrations using Migrator's simplified commands while maintaining full compatibility with your existing schema.",
    ],
  },
  "best-practices-database-migrations": {
    title: "Best Practices for Database Migrations",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Best Practices",
    content: [
      "# Best Practices for Database Migrations",
      "Managing database schema changes in production requires careful planning and execution. Here are essential best practices.",
      "## 1. Always Test Migrations",
      "Test all migrations in a staging environment before applying them to production:",
      "```bash\n# Run in staging first\nmigrator migrate\n```",
      "## 2. Make Migrations Reversible",
      "Ensure your migrations can be rolled back if needed. Migrator automatically generates downgrade scripts.",
      "## 3. Keep Migrations Small",
      "Break large schema changes into smaller, incremental migrations:",
      "```bash\nmigrator makemigrations \"add user email column\"\nmigrator makemigrations \"add email index\"\n```",
      "## 4. Use Descriptive Names",
      "Give your migrations clear, descriptive names that explain what they do:",
      "```bash\nmigrator makemigrations \"add_user_profile_table_with_foreign_key\"\n```",
      "## 5. Handle Data Migrations Carefully",
      "When migrating data, consider doing it in batches to avoid locking tables for extended periods.",
      "## 6. Version Control",
      "Always commit migration files to version control alongside your code changes.",
      "## 7. Monitor Migration Performance",
      "For large tables, test migration performance and consider maintenance windows for production deployments.",
    ],
  },
  "fastapi-sqlalchemy-migrations": {
    title: "FastAPI + SQLAlchemy + Migrator",
    date: "2024-12-28",
    readTime: "10 min read",
    category: "Tutorial",
    content: [
      "# FastAPI + SQLAlchemy + Migrator: Complete Guide",
      "Learn how to build a complete FastAPI application with SQLAlchemy models and manage your database schema with Migrator.",
      "## Project Setup",
      "First, install the required dependencies:",
      "```bash\npip install fastapi sqlalchemy migrator-cli uvicorn\n```",
      "## Define Your Models",
      "Create your SQLAlchemy models in `models.py`:",
      "```python\nfrom sqlalchemy import Column, Integer, String\nfrom sqlalchemy.ext.declarative import declarative_base\n\nBase = declarative_base()\n\nclass User(Base):\n    __tablename__ = 'users'\n    id = Column(Integer, primary_key=True)\n    email = Column(String, unique=True, nullable=False)\n    name = Column(String, nullable=False)\n```",
      "## Database Configuration",
      "Set up your database connection in `database.py`:",
      "```python\nfrom sqlalchemy import create_engine\nfrom sqlalchemy.orm import sessionmaker\n\nDATABASE_URL = \"postgresql://user:password@localhost/dbname\"\nengine = create_engine(DATABASE_URL)\nSessionLocal = sessionmaker(bind=engine)\n```",
      "## Initialize Migrator",
      "```bash\nmigrator init\n```",
      "## Create and Apply Migrations",
      "```bash\nmigrator makemigrations \"create users table\"\nmigrator migrate\n```",
      "## FastAPI Integration",
      "Create your FastAPI application:",
      "```python\nfrom fastapi import FastAPI, Depends\nfrom sqlalchemy.orm import Session\nfrom database import SessionLocal\nfrom models import User\n\napp = FastAPI()\n\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n\n@app.post(\"/users/\")\ndef create_user(email: str, name: str, db: Session = Depends(get_db)):\n    user = User(email=email, name=name)\n    db.add(user)\n    db.commit()\n    return user\n```",
      "## Running Your Application",
      "```bash\nuvicorn main:app --reload\n```",
      "You now have a complete FastAPI application with managed database migrations!",
    ],
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogContent[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 -ml-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <motion.article
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="px-3 py-1 rounded-full bg-gradient-primary border border-border text-foreground font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
            </div>

            <div className="space-y-6 text-foreground">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-12 mb-4">
                      {paragraph.slice(2)}
                    </h1>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-3">
                      {paragraph.slice(3)}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-6 mb-2">
                      {paragraph.slice(4)}
                    </h3>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const codeContent = paragraph.slice(paragraph.indexOf('\n') + 1, paragraph.lastIndexOf('```'));
                  return (
                    <pre key={index} className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm font-mono text-foreground">{codeContent}</code>
                    </pre>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
