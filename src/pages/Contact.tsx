import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    
    try {
      const res = await fetch('https://contact-fast.vercel.app/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'adelodunpeter24@gmail.com',
          website_name: 'Migrator',
          website_url: 'https://migrator-cli.dev',
          ...form
        })
      });

      const data = await res.json();
      setStatus(data.message || data.detail);
      if (res.ok) {
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl sm:text-7xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="p-8 bg-card border-border">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary border border-border">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:adelodunpeter24@gmail.com"
                        className="text-lg text-muted-foreground hover:text-primary transition-colors"
                      >
                        adelodunpeter24@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary border border-border">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Phone</h3>
                      <a 
                        href="tel:+2347039201122"
                        className="text-lg text-muted-foreground hover:text-primary transition-colors"
                      >
                        +234 703 920 1122
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-lg text-muted-foreground">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-8 bg-card border-border">
                <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name"
                      className="mt-2 text-lg"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-2 text-lg"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-lg">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help?"
                      className="mt-2 text-lg"
                      value={form.subject}
                      onChange={(e) => setForm({...form, subject: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-lg">Message</Label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us more about your inquiry..."
                      className="mt-2 w-full px-3 py-2 text-lg bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {status && (
                    <p className={`text-center text-lg ${status.includes('success') || status.includes('sent') ? 'text-green-500' : 'text-red-500'}`}>
                      {status}
                    </p>
                  )}
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
