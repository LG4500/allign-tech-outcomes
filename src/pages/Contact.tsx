import React from 'react';
import ContactForm from '@/components/home/ContactForm';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="pt-[clamp(212px,calc(25vw+52px),332px)]">
      <section className="bg-brand-navy py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Contact Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're here to help you ensure your technology investments deliver. Reach out to our expert team today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">

            <div className="flex flex-col items-center text-center p-8 bg-brand-gray-light rounded-2xl">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                <Mail className="text-brand-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Email</h3>
              <p className="text-gray-600">info@alignquad.com</p>
              <p className="text-gray-500 text-sm">We'll respond within 24h</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-brand-gray-light rounded-2xl">
              <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-brand-teal h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Office</h3>
              <p className="text-gray-600">123 Tech Avenue</p>
              <p className="text-gray-500 text-sm">Silicon Valley, CA 94025</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;