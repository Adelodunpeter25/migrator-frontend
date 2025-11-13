import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: "getting-started-with-migrator",
    title: "Getting Started with Migrator",
    excerpt: "Learn how to set up Migrator in your FastAPI or Flask project and run your first migration in minutes.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Tutorial",
  },
  {
    id: "migrating-from-alembic",
    title: "Migrating from Alembic to Migrator",
    excerpt: "A comprehensive guide on transitioning your existing Alembic migrations to Migrator's simplified workflow.",
    date: "2025-01-10",
    readTime: "8 min read",
    category: "Guide",
  },
  {
    id: "best-practices-database-migrations",
    title: "Best Practices for Database Migrations",
    excerpt: "Essential tips and patterns for managing database schema changes in production environments safely.",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Best Practices",
  },
  {
    id: "fastapi-sqlalchemy-migrations",
    title: "FastAPI + SQLAlchemy + Migrator",
    excerpt: "Build a complete FastAPI application with SQLAlchemy models and manage migrations with Migrator.",
    date: "2024-12-28",
    readTime: "10 min read",
    category: "Tutorial",
  },
];

const Blog = () => {
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
              Blog & <span className="gradient-text">Tutorials</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              Learn how to get the most out of Migrator with guides, tutorials, and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-base text-muted-foreground">
                        <span className="px-3 py-1 rounded-full bg-gradient-primary border border-border text-foreground font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-lg text-primary font-medium group-hover:gap-2 transition-all">
                        Read article
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
