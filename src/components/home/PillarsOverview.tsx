import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/constants/services';
import { ArrowRight, Brain, Shield, Cloud, Database, Eye, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  "ai-consulting": Brain,
  "trusted-fixer": Wrench,
  "data-consulting": Database,
  "qa-as-third-eye": Eye,
  "security-consulting": Shield,
  "cloud-consulting": Cloud,
};

const PillarsOverview: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-navy text-sm font-bold tracking-widest uppercase mb-3">Our Strategic Pillars</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Expertise Driven by Outcome</h3>
          <p className="text-gray-600 text-lg">
            We focus on six critical areas where technology investment meets business risk. Each pillar is designed to provide maximum assurance and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.id];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-xl border border-gray-100 bg-white hover:bg-brand-navy hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-teal transition-colors">
                  <Icon className="text-brand-teal group-hover:text-brand-navy h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy group-hover:text-white mb-2">{service.title}</h4>
                <p className="text-brand-teal font-semibold text-sm mb-4 group-hover:text-brand-teal/90">{service.tagline}</p>
                <p className="text-gray-600 group-hover:text-gray-300 mb-8 line-clamp-3">
                  {service.description}
                </p>
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center text-brand-navy font-bold group-hover:text-brand-teal transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsOverview;