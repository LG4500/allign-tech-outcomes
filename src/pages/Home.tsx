import React from 'react';
import Hero from '@/components/home/Hero';
import PillarsOverview from '@/components/home/PillarsOverview';
import ContactForm from '@/components/home/ContactForm';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      
      {/* Intro Section */}
      <section className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight">
                  We don't just advise. We partner for <span className="text-brand-teal">certainty.</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600">
                  <p>
                    In today's fast-paced environment, technology investments are often made without a clear path to realization. AlignQuad was founded to solve this problem.
                  </p>
                  <p>
                    We provide the strategic alignment and technical oversight necessary to ensure that every dollar spent on technology translates into a measurable business outcome.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b7e40ef-c623-4607-8ee6-2d1654e9321f/hero-background-68774804-1776408518067.webp" 
                  alt="Consulting team" 
                  className="w-full h-full object-cover aspect-video"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-navy/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <PillarsOverview />
      {/* Testimonials Section Placeholder */}
      <ContactForm />
    </main>
  );
};

export default Home;