import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-[clamp(212px,calc(25vw+52px),332px)] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-brand-navy"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col min-h-[calc(100dvh-332px)]">
        <div className="max-w-3xl flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[27px] md:text-[45px] lg:text-[54px] font-bold text-white leading-tight mb-8">
              Pan-African Expertise for <span className="text-brand-teal">Technology Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              AlignQuad partners with organizations to bridge the gap between technical potential and business reality. We don't just advise; we ensure results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-brand-navy border-2 border-brand-teal text-white hover:bg-brand-navy/90 text-lg px-8 py-6 h-auto font-bold rounded-xl shadow-lg transition-all duration-300 group">
                  Partner with Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button 
                  className="w-full sm:w-auto bg-[#FF7F00] hover:bg-[#FF8C1A] active:bg-[#E67200] text-white text-lg md:text-xl px-10 py-6 h-auto font-extrabold rounded-xl shadow-[0_15px_35px_-5px_rgba(255,127,0,0.4)] hover:shadow-[0_20px_45px_-5px_rgba(255,127,0,0.5)] transition-all duration-300 hover:-translate-y-1 active:scale-95 border-none"
                >
                  <span className="flex items-center justify-center">
                    <span className="bg-white/20 px-2 py-0.5 rounded text-sm mr-3 font-bold border border-white/30">$2B+</span>
                    Our Approach
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats/Quick Info — natural document flow below buttons */}
        <div className="hidden lg:block mt-16 pb-8">
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="border-l-2 border-brand-teal pl-4">
              <div className="text-white text-2xl font-bold">100+</div>
              <div className="text-gray-400 text-sm">Projects Rescued</div>
            </div>
            <div className="border-l-2 border-brand-teal pl-4">
              <div className="text-white text-2xl font-bold">$2B+</div>
              <div className="text-gray-400 text-sm">Investment Value Managed</div>
            </div>
            <div className="border-l-2 border-brand-teal pl-4">
              <div className="text-white text-2xl font-bold">15+</div>
              <div className="text-gray-400 text-sm">Industry Verticals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;