import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '@/constants/services';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/')}>Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-[clamp(212px,calc(25vw+52px),332px)]">
      {/* Service Hero */}
      <section className="relative py-24 bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-brand-teal mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
              <p className="text-2xl text-brand-teal font-medium mb-8">"{service.tagline}"</p>
              <p className="text-xl text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Key Benefits</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-brand-gray-light rounded-xl border border-gray-100"
                  >
                    <CheckCircle2 className="text-brand-teal h-6 w-6 shrink-0" />
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-brand-navy p-10 rounded-3xl text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-8 text-brand-teal">Our Methodology</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-10">
                {service.methodology}
              </p>
              <div className="p-8 border border-white/10 bg-white/5 rounded-2xl">
                <h4 className="font-bold text-xl mb-4">Ready to start?</h4>
                <p className="text-gray-400 mb-8">
                  Schedule a consultation with our {service.title} specialists today.
                </p>
                <Link to="/contact">
                  <Button className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold h-14">
                    Get a Free Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-12">Explore Other Pillars</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {services.filter(s => s.id !== service.id).map(other => (
              <Link key={other.id} to={`/services/${other.id}`}>
                <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
                  {other.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;