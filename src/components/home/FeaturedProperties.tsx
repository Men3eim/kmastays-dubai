import { MapPin, Wifi, Car, Dumbbell, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from '../common/ScrollAnimation';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      name: 'Executive Tower Downtown',
      location: 'Downtown Dubai',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: '2 Bedroom Executive',
      priceRange: 'AED 8,000 - 12,000/month',
      amenities: ['High-speed WiFi', 'Parking', 'Gym Access', 'Concierge'],
      distance: '2 min walk to DIFC'
    },
    {
      id: 2,
      name: 'Marina Bay Residences',
      location: 'Dubai Marina',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: '1 Bedroom Deluxe',
      priceRange: 'AED 6,000 - 9,000/month',
      amenities: ['High-speed WiFi', 'Parking', 'Gym Access', 'Pool'],
      distance: '5 min to Business Bay'
    },
    {
      id: 3,
      name: 'Business Bay Heights',
      location: 'Business Bay',
      image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Studio Premium',
      priceRange: 'AED 4,500 - 7,000/month',
      amenities: ['High-speed WiFi', 'Parking', 'Gym Access', 'Business Center'],
      distance: 'In Business Bay'
    },
    {
      id: 4,
      name: 'DIFC Gate Apartments',
      location: 'DIFC',
      image: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: '3 Bedroom Penthouse',
      priceRange: 'AED 15,000 - 20,000/month',
      amenities: ['High-speed WiFi', 'Parking', 'Gym Access', 'Butler Service'],
      distance: 'Heart of DIFC'
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'High-speed WiFi':
        return <Wifi className="h-4 w-4" />;
      case 'Parking':
        return <Car className="h-4 w-4" />;
      case 'Gym Access':
        return <Dumbbell className="h-4 w-4" />;
      default:
        return <div className="w-4 h-4 bg-brand-secondary rounded-full"></div>;
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <ScrollAnimation
          delay={0.2}
          duration={0.8}
          animation="fadeInUp"
        >
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-3 sm:mb-4">
              Featured Premium Properties
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Discover our handpicked selection of luxury corporate apartments in Dubai's most sought-after business districts
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          delay={0.4}
          duration={0.8}
          animation="stagger"
          stagger={0.1}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-brand-secondary/10"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
              {/* Image */}
              <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                  <span className="bg-brand-secondary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {property.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-brand-secondary" />
                  <span className="text-xs sm:text-sm text-brand-secondary font-medium">
                    {property.location}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-primary mb-2">
                  {property.name}
                </h3>

                <p className="text-brand-primary font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                  {property.priceRange}
                </p>

                <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4">
                  {property.distance}
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                  {property.amenities.slice(0, 3).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 bg-brand-light-grey px-1 sm:px-2 py-1 rounded-lg"
                    >
                      {getAmenityIcon(amenity)}
                      <span className="text-xs text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  className="btn-primary w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 text-xs sm:text-sm md:text-base min-h-[44px]"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          delay={0.8}
          duration={0.8}
          animation="fadeInUp"
        >
          <div className="text-center mt-6 sm:mt-8 md:mt-12">
            <motion.button
              className="btn-primary bg-brand-secondary hover:bg-brand-secondary/90 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto text-sm sm:text-base md:text-lg min-h-[44px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span>View All Properties</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </motion.button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FeaturedProperties;