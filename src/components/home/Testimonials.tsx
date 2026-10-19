import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AlignQuad stepped in when our digital transformation was on the brink of collapse. Their 'Trusted Fixer' approach saved us millions in wasted investment.",
    author: "Sarah Chen",
    role: "CTO, Fintech Solutions",
    logo: "FINTECH"
  },
  {
    quote: "The 'Third Eye' QA service provided us with the independent assurance we needed for our enterprise ERP rollout. Absolutely invaluable.",
    author: "Marcus Thorne",
    role: "VP Operations, Global Logistics",
    logo: "LOGISTIX"
  },
  {
    quote: "Their AI strategy wasn't just about the tech; it was about the business outcomes. We've seen a 30% increase in efficiency since implementation.",
    author: "Elena Rodriguez",
    role: "Digital Lead, Retail Giant",
    logo: "RETAIL+"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-brand-teal font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">What our partners say about us</h3>
            <p className="text-gray-400 text-lg mb-8">
              We've built a reputation for delivering results in the toughest environments. Here's how we've helped leading organizations.
            </p>
            <div className="flex flex-wrap gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
              {['Google', 'Microsoft', 'AWS', 'Oracle'].map(partner => (
                <span key={partner} className="font-bold text-xl">{partner}</span>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 relative"
              >
                <Quote className="text-brand-teal h-10 w-10 mb-6 opacity-20" />
                <p className="text-lg italic text-gray-300 mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center font-bold text-brand-navy">
                    {t.author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-white">{t.author}</h5>
                    <p className="text-brand-teal text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;