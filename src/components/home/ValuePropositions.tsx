import { MapPin, Star, Briefcase } from 'lucide-react';

const ValuePropositions = () => {
  const propositions = [
    {
      icon: MapPin,
      title: 'Amazing Spots',
      description: 'We\'re right where the action is! Whether you want to work, eat amazing food, or just explore - everything\'s just a short walk away.',
      features: ['Downtown Dubai vibes', 'Easy metro rides', 'Cool neighborhoods to explore']
    },
    {
      icon: Star,
      title: 'Comfy & Stylish',
      description: 'Your space should feel like home, but better. We\'ve got all the good stuff - from cozy beds to cool amenities.',
      features: ['Instagram-worthy spaces', 'Everything you need', 'We\'re here to help']
    },
    {
      icon: Briefcase,
      title: 'Super Easy',
      description: 'No complicated stuff here. Book in a few clicks, stay as long as you want, and we\'ll take care of the rest.',
      features: ['Quick booking', 'Stay as long as you like', 'No surprises']
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-brand-light-grey">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-primary mb-3 sm:mb-4 tracking-wide">
            What Makes Us Special
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2 font-elegant italic leading-relaxed">
            We're all about making your Dubai stay awesome
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {propositions.map((prop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8 shadow-lg">
                <prop.icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-brand-primary" />
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