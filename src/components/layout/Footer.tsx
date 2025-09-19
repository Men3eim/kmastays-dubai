import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-wide">KMASTAYS</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium corporate serviced apartments in Dubai's prime business districts. 
              Your home away from home in the heart of Dubai's business excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/971XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-secondary rounded-lg hover:bg-opacity-80 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/properties" className="block text-gray-300 hover:text-white transition-colors text-sm">
                View Properties
              </Link>
              <Link to="/corporate-services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Corporate Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About KMASTAYS
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Locations</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>Downtown Dubai</div>
              <div>Business Bay</div>
              <div>DIFC (Dubai International Financial Centre)</div>
              <div>Dubai Marina</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-secondary" />
                <span className="text-sm text-gray-300">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-secondary" />
                <span className="text-sm text-gray-300">info@kmastays.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-secondary mt-0.5" />
                <span className="text-sm text-gray-300">
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-secondary mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © 2024 KMASTAYS Dubai. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;