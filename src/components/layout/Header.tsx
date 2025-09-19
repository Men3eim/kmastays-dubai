import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-white font-bold text-xl sm:text-2xl tracking-wide">
              KMASTAYS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-200 hover:text-white hover:border-b-2 hover:border-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+971-4-XXX-XXXX"
              className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
              aria-label="Call us at +971 4 XXX XXXX"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+971 4 XXX XXXX</span>
            </a>
            <a
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-brand-secondary hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-all duration-200"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-brand-secondary transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-primary border-t border-brand-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-3 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-white bg-brand-secondary rounded-md'
                    : 'text-gray-200 hover:text-white hover:bg-brand-secondary hover:bg-opacity-50 rounded-md'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-brand-secondary mt-4 space-y-2">
              <a
                href="tel:+971-4-XXX-XXXX"
                className="flex items-center space-x-3 px-3 py-3 text-white hover:bg-brand-secondary hover:bg-opacity-50 rounded-md transition-colors"
                aria-label="Call us at +971 4 XXX XXXX"
              >
                <Phone className="h-5 w-5" />
                <span className="text-base">+971 4 XXX XXXX</span>
              </a>
              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-3 text-white hover:bg-brand-secondary hover:bg-opacity-50 rounded-md transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-base">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;