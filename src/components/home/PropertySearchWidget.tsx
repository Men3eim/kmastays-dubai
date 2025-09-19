import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from '../common/ScrollAnimation';

const PropertySearchWidget = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    apartmentType: '',
    duration: '',
  });

  const locations = [
    'Downtown Dubai',
    'Business Bay',
    'DIFC',
    'Dubai Marina'
  ];

  const apartmentTypes = [
    'Studio',
    '1 Bedroom',
    '2 Bedroom',
    '3 Bedroom',
    'Penthouse'
  ];

  const durations = [
    'Short-term (1-30 days)',
    'Extended stay (1-6 months)',
    'Corporate packages (6+ months)'
  ];

  const handleSearch = () => {
    // Handle search logic
    console.log('Search data:', searchData);
  };

  return (
    <section className="relative -mt-16 sm:-mt-20 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation
          delay={0.2}
          duration={0.8}
          animation="fadeInUp"
        >
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="text-center mb-6 sm:mb-8">
              <ScrollAnimation
                delay={0.4}
                duration={0.8}
                animation="fadeInUp"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-2 px-2">
                  Find Your Perfect Corporate Accommodation
                </h2>
              </ScrollAnimation>
              
              <ScrollAnimation
                delay={0.6}
                duration={0.8}
                animation="fadeInUp"
              >
                <p className="text-gray-600 text-base sm:text-lg px-2">
                  Search premium serviced apartments in Dubai's prime business locations
                </p>
              </ScrollAnimation>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location */}
            <div className="space-y-3">
              <label className="block text-base font-medium text-gray-700">
                <MapPin className="inline h-5 w-5 mr-2" />
                Location
              </label>
              <select
                value={searchData.location}
                onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors text-base"
              >
                <option value="">Select Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Apartment Type */}
            <div className="space-y-3">
              <label className="block text-base font-medium text-gray-700">
                <Users className="inline h-5 w-5 mr-2" />
                Apartment Type
              </label>
              <select
                value={searchData.apartmentType}
                onChange={(e) => setSearchData({ ...searchData, apartmentType: e.target.value })}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors text-base"
              >
                <option value="">Select Type</option>
                {apartmentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div className="space-y-3">
              <label className="block text-base font-medium text-gray-700">
                <Calendar className="inline h-5 w-5 mr-2" />
                Duration
              </label>
              <select
                value={searchData.duration}
                onChange={(e) => setSearchData({ ...searchData, duration: e.target.value })}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors text-base"
              >
                <option value="">Select Duration</option>
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="space-y-3 md:col-span-2 lg:col-span-1">
              <label className="block text-base font-medium text-transparent">Search</label>
              <motion.button
                onClick={handleSearch}
                className="btn-primary w-full bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg text-base"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Search className="h-5 w-5" />
                <span>Search Properties</span>
              </motion.button>
            </div>
          </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PropertySearchWidget;