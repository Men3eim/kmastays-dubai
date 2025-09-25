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
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-brand-light-grey">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-3 sm:mb-4">
            Why Choose KMASTAYS Dubai?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Experience unparalleled luxury and convenience in Dubai's most prestigious business districts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {propositions.map((prop, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <prop.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-brand-primary" />
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-primary mb-2 sm:mb-3 md:mb-4">
                {prop.title}
              </h3>
              
              <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
                {prop.description}
              </p>

              <ul className="space-y-1 sm:space-y-2">
                {prop.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
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