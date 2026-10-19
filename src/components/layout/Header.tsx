import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/constants/services';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/0c3ca7cf-8d19-4016-8d8e-471369eb5103/1778508270266_Alignquad_logo_3.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'bg-white shadow-md py-3' : 'py-0'
      }`}
    >
      {/* Full-width skyline banner with centered logo */}
      {!isScrolled && (
        <div 
          className="top-banner relative w-full"
          style={{
            backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/7b7e40ef-c623-4607-8ee6-2d1654e9321f/nairobi-skyline-sunset-3c778689-1778232410588.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: 'clamp(160px, 25vw, 280px)'
          }}
        >
          <div className="absolute inset-0 bg-brand-navy/50" />
          <Link to="/" className="banner-logo absolute top-0 left-0 z-10">
            <img 
              src={logoUrl} 
              alt="AlignQuad Logo" 
              className="logo-img header-logo-banner"
              style={{
                height: 'clamp(80px, 12vw, 150px)',
                width: 'auto',
                maxHeight: '90%',
                maxWidth: '95%',
                fontSize: 'clamp(24px, 4vw, 48px)'
              }}
            />
          </Link>
        </div>
      )}

      <div className={`container mx-auto px-4 md:px-6 flex items-center justify-between ${!isScrolled ? 'bg-brand-navy/90 py-3' : ''}`}>
        {/* Logo only shown when scrolled (compact nav bar) */}
        {isScrolled && (
          <Link to="/" className="flex items-center group">
            <img 
              src={logoUrl} 
              alt="AlignQuad Logo" 
              className="w-auto object-contain transition-transform duration-300 group-hover:scale-105 logo-img header-logo"
            />
          </Link>
        )}

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`font-medium transition-colors hover:text-brand-teal ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center font-medium transition-colors hover:text-brand-teal outline-none ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.id} asChild>
                  <Link to={`/services/${service.id}`} className="cursor-pointer">
                    {service.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/about" className={`font-medium transition-colors hover:text-brand-teal ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>
            About Us
          </Link>
          <Link to="/contact">
            <Button className="bg-brand-orange hover:bg-orange-600 text-white font-semibold">
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-brand-navy' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-brand-navy' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top duration-300">
          <Link to="/" className="text-brand-navy font-semibold text-lg py-2 border-b border-gray-100">Home</Link>
          <div className="flex flex-col space-y-2">
            <span className="text-brand-navy font-semibold text-lg py-2">Services</span>
            <div className="grid grid-cols-1 gap-2 pl-4">
              {services.map((service) => (
                <Link key={service.id} to={`/services/${service.id}`} className="text-gray-600 py-1">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/about" className="text-brand-navy font-semibold text-lg py-2 border-b border-gray-100">About Us</Link>
          <Link to="/contact">
            <Button className="w-full bg-brand-orange hover:bg-orange-600 text-white font-semibold py-6">
              Contact Us
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;