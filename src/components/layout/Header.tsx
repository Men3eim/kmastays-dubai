import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import logoWhite from '/logos/Logo_white.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Properties', href: '/properties' },
    { name: 'Corporate Services', href: '/corporate-services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-brand-primary shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoWhite} 
              alt="KMASTAYS Logo" 
              className="h-4 sm:h-5 md:h-6 lg:h-7 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-200 hover:text-white hover:border-b-2 hover:border-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href="tel:+971-4-XXX-XXXX"
              className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
              aria-label="Call us at +971 4 XXX XXXX"
            >
              <Phone className="h-4 w-4" />
              <span className="text-xs xl:text-sm font-medium hidden xl:inline">+971 4 XXX XXXX</span>
            </a>
            <a
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-brand-secondary hover:bg-opacity-90 text-white px-3 py-2 rounded-lg transition-all duration-200"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs xl:text-sm font-medium hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-brand-secondary transition-colors min-h-[44px] min-w-[44px]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-primary border-t border-brand-secondary">
          <div className="px-3 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-3 text-base font-medium transition-colors rounded-lg min-h-[44px] flex items-center ${
                  isActive(item.href)
                    ? 'text-white bg-brand-secondary'
                    : 'text-gray-200 hover:text-white hover:bg-brand-secondary hover:bg-opacity-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-brand-secondary mt-3 space-y-2">
              <a
                href="tel:+971-4-XXX-XXXX"
                className="flex items-center space-x-3 px-3 py-3 text-white hover:bg-brand-secondary hover:bg-opacity-50 rounded-lg transition-colors min-h-[44px]"
                aria-label="Call us at +971 4 XXX XXXX"
              >
                <Phone className="h-5 w-5" />
                <span className="text-base font-medium">+971 4 XXX XXXX</span>
              </a>
              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-3 text-white hover:bg-brand-secondary hover:bg-opacity-50 rounded-lg transition-colors min-h-[44px]"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-base font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;