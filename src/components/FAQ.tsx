import { memo, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const FAQ = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = useMemo(() => [
    {
      question: "How is Migrator different from Alembic?",
      answer: "Migrator is built on top of Alembic but provides a Django-like interface. Instead of manually writing migration scripts, Migrator auto-detects model changes and generates migrations for you with simple commands like 'migrator makemigrations'."
    },
    {
      question: "Can I migrate from Alembic to Migrator?",
      answer: "Yes! Migrator is compatible with existing Alembic migrations. You can use 'migrator stamp head' to mark your database as migrated and continue using Migrator for new migrations."
    },
    {
      question: "Does Migrator work with async SQLAlchemy?",
      answer: "Yes, Migrator fully supports both sync and async SQLAlchemy, making it perfect for FastAPI applications using async database operations."
    },
    {
      question: "Which databases are supported?",
      answer: "Migrator supports all databases that Alembic supports: PostgreSQL, MySQL, SQLite, Oracle, Microsoft SQL Server, and more."
    },
    {
      question: "Do I need to configure anything?",
      answer: "No! Migrator works with zero configuration. Just run 'migrator init' and you're ready to go. It automatically detects your database URL from environment variables."
    },
    {
      question: "Can I use Migrator in production?",
      answer: "Absolutely! Migrator is production-ready and uses Alembic under the hood, which is battle-tested and trusted by thousands of projects."
    },
  ], []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-2xl text-muted-foreground">
            Everything you need to know about Migrator
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all cursor-pointer">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-primary transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openIndex === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-lg text-muted-foreground mt-4 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

FAQ.displayName = "FAQ";

export default FAQ;
