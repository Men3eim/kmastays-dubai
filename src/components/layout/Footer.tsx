import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold tracking-wide">KMASTAYS</div>
            <p className="text-gray-300 text-base leading-relaxed">
              Premium corporate serviced apartments in Dubai's prime business districts. 
              Your home away from home in the heart of Dubai's business excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-secondary rounded-lg hover:bg-opacity-80 transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              <Link to="/properties" className="block text-gray-300 hover:text-white transition-colors text-base py-2">
                View Properties
              </Link>
              <Link to="/corporate-services" className="block text-gray-300 hover:text-white transition-colors text-base py-2">
                Corporate Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-base py-2">
                About KMASTAYS
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-base py-2">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold">Our Locations</h3>
            <div className="space-y-3 text-base text-gray-300">
              <div className="py-2">Downtown Dubai</div>
              <div className="py-2">Business Bay</div>
              <div className="py-2">DIFC (Dubai International Financial Centre)</div>
              <div className="py-2">Dubai Marina</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                <a href="tel:+971-4-XXX-XXXX" className="text-base text-gray-300 hover:text-white transition-colors">
                  +971 4 XXX XXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-secondary flex-shrink-0" />
                <a href="mailto:info@kmastays.com" className="text-base text-gray-300 hover:text-white transition-colors">
                  info@kmastays.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-secondary mt-1 flex-shrink-0" />
                <span className="text-base text-gray-300">
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-secondary mt-8 sm:mt-12 pt-8 sm:pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm sm:text-base text-gray-300 text-center sm:text-left">
              © 2024 KMASTAYS Dubai. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-8 text-sm sm:text-base text-gray-300">
              <a href="#" className="hover:text-white transition-colors text-center sm:text-left py-1">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors text-center sm:text-left py-1">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;