import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/0c3ca7cf-8d19-4016-8d8e-471369eb5103/1778508270266_Alignquad_logo_3.png";

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <img 
                src={logoUrl} 
                alt="AlignQuad Logo" 
                className="w-auto object-contain transition-transform duration-300 group-hover:scale-105 logo-img footer-logo"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Partnering with organizations to ensure technology investments deliver promised outcomes through expert strategy and execution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-teal transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-teal transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-teal">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-teal">Strategic Pillars</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/services/ai-consulting" className="hover:text-white transition-colors">AI Consulting</Link></li>
              <li><Link to="/services/trusted-fixer" className="hover:text-white transition-colors">Trusted Fixer</Link></li>
              <li><Link to="/services/data-consulting" className="hover:text-white transition-colors">Data Consulting</Link></li>
              <li><Link to="/services/security-consulting" className="hover:text-white transition-colors">Security Consulting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-teal">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-brand-teal shrink-0 mt-1" />
                <span>info@alignquad.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-teal shrink-0 mt-1" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AlignQuad. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;