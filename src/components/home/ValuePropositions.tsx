import React from 'react';
import { MapPin, Star, Briefcase } from 'lucide-react';

const ValuePropositions = () => {
  const propositions = [
    {
      icon: MapPin,
      title: 'Prime Business Locations',
      description: 'Walking distance to DIFC, Business Bay, and Dubai\'s major corporate centers. Perfect for business travelers and executives.',
      features: ['Downtown Dubai proximity', 'Metro connectivity', 'Business district access']
    },
    {
      icon: Star,
      title: 'Luxury & Comfort',
      description: 'Fully furnished apartments with hotel-level service and premium amenities for the discerning business traveler.',
      features: ['5-star amenities', 'Concierge services', 'Premium furnishing']
    },
    {
      icon: Briefcase,
      title: 'Corporate Solutions',
      description: 'Flexible terms, corporate billing, and dedicated account management for seamless business accommodation.',
      features: ['Flexible contracts', 'Corporate invoicing', 'Account management']
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Why Choose KMASTAYS Dubai?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience unparalleled luxury and convenience in Dubai's most prestigious business districts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {propositions.map((prop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <prop.icon className="h-7 w-7 sm:h-8 sm:w-8 text-brand-primary" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-brand-primary mb-3 sm:mb-4">
                {prop.title}
              </h3>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {prop.description}
              </p>

              <ul className="space-y-2">
                {prop.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;