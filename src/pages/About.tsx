import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <main className="pt-[clamp(212px,calc(25vw+52px),332px)]">
      <section className="bg-brand-navy py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">About AlignQuad</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a reputable technology consulting firm partnering with organizations to ensure technology investments deliver promised outcomes. Our mission is to eliminate the waste and frustration often associated with complex technology delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Target, title: "Outcome Driven", desc: "We focus on the end result, not just the technical deliverables." },
              { icon: Users, title: "Client Partnership", desc: "We embed with your team to ensure knowledge transfer and alignment." },
              { icon: ShieldCheck, title: "Independence", desc: "We provide objective, unbiased advice and oversight." },
              { icon: Zap, title: "Efficiency", desc: "We streamline processes to accelerate time-to-value." },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-brand-teal h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-navy mb-8">Our Vision</h2>
            <p className="text-xl text-gray-700 italic leading-relaxed">
              "To be the most trusted partner for organizations navigating the complexities of modern technology, ensuring every investment creates lasting value."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;