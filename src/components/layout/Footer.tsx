import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide">KMASTAYS</div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Premium corporate serviced apartments in Dubai's prime business districts. 
              Your home away from home in the heart of Dubai's business excellence.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-brand-secondary rounded-lg hover:bg-opacity-80 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Quick Links</h3>
            <nav className="space-y-2 sm:space-y-3">
              <Link to="/properties" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-2 min-h-[44px] flex items-center">
                View Properties
              </Link>
              <Link to="/corporate-services" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-2 min-h-[44px] flex items-center">
                Corporate Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-2 min-h-[44px] flex items-center">
                About KMASTAYS
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-2 min-h-[44px] flex items-center">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Locations */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Our Locations</h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
              <div className="py-1 sm:py-2">Downtown Dubai</div>
              <div className="py-1 sm:py-2">Business Bay</div>
              <div className="py-1 sm:py-2">DIFC (Dubai International Financial Centre)</div>
              <div className="py-1 sm:py-2">Dubai Marina</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-brand-secondary flex-shrink-0" />
                <a href="tel:+971-4-XXX-XXXX" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors min-h-[44px] flex items-center">
                  +971 4 XXX XXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-brand-secondary flex-shrink-0" />
                <a href="mailto:info@kmastays.com" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors min-h-[44px] flex items-center">
                  info@kmastays.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-brand-secondary mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-secondary mt-6 sm:mt-8 lg:mt-12 pt-6 sm:pt-8 lg:pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-xs sm:text-sm lg:text-base text-gray-300 text-center sm:text-left">
              © 2025 KMASTAYS Dubai. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm lg:text-base text-gray-300">
              <a href="#" className="hover:text-white transition-colors text-center sm:text-left py-1 min-h-[44px] flex items-center">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors text-center sm:text-left py-1 min-h-[44px] flex items-center">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;