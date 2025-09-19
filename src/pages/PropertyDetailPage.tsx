import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize, Wifi, Car, Dumbbell, Phone, Mail, Calendar, Share2, Heart } from 'lucide-react';
import InquiryForm from '../components/common/InquiryForm';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock data - would come from API
  const property = {
    id: 1,
    name: 'Executive Tower Downtown',
    location: 'Downtown Dubai',
    type: '2 Bedroom Executive',
    priceRange: 'AED 8,000 - 12,000/month',
    images: [
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    size: '1,200 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    description: 'Luxurious 2-bedroom executive apartment in the heart of Downtown Dubai, featuring panoramic city views and premium furnishings. Perfect for business executives requiring sophisticated accommodation.',
    amenities: {
      'Kitchen Facilities': ['Fully equipped kitchen', 'Dishwasher', 'Microwave', 'Coffee machine'],
      'Technology': ['High-speed WiFi', '55" Smart TV', 'Work desk', 'Universal chargers'],
      'Services': ['Daily housekeeping', '24/7 concierge', 'Laundry service', 'Grocery delivery'],
      'Building Amenities': ['Fitness center', 'Swimming pool', 'Parking space', 'Business center']
    },
    locationAdvantages: [
      '2-minute walk to Burj Khalifa',
      '5-minute walk to Dubai Mall',
      'Direct metro access',
      '10-minute drive to DIFC',
      'Walking distance to restaurants'
    ]
  };

  const getAmenityIcon = (category: string) => {
    switch (category) {
      case 'Technology':
        return <Wifi className="h-5 w-5 text-brand-primary" />;
      case 'Kitchen Facilities':
        return <div className="w-5 h-5 bg-brand-primary rounded-full"></div>;
      case 'Services':
        return <div className="w-5 h-5 bg-brand-primary rounded-full"></div>;
      case 'Building Amenities':
        return <Dumbbell className="h-5 w-5 text-brand-primary" />;
      default:
        return <div className="w-5 h-5 bg-brand-primary rounded-full"></div>;
    }
  };

  return (
    <div className="min-h-screen bg-brand-off-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-96">
            {/* Main Image */}
            <div className="lg:col-span-3 relative overflow-hidden rounded-xl">
              <img
                src={property.images[currentImageIndex]}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                  <Share2 className="h-5 w-5 text-brand-primary" />
                </button>
                <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                  <Heart className="h-5 w-5 text-brand-primary" />
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="space-y-4">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-full h-28 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index ? 'ring-2 ring-brand-primary' : 'hover:opacity-80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${property.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-brand-secondary" />
                <span className="text-brand-secondary font-medium">{property.location}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                {property.name}
              </h1>

              <div className="flex items-center space-x-6 mb-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Bed className="h-5 w-5" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="h-5 w-5" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Maximize className="h-5 w-5" />
                  <span>{property.size}</span>
                </div>
              </div>

              <p className="text-2xl font-bold text-brand-primary mb-6">
                Rates from {property.priceRange}
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                {property.description}
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>Contact for Rates & Availability</span>
                </button>
                <button className="flex-1 bg-brand-secondary hover:bg-brand-secondary/90 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Viewing</span>
                </button>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-brand-light-grey rounded-xl p-8">
              <h2 className="text-2xl font-bold text-brand-primary mb-6">
                Premium Amenities & Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(property.amenities).map(([category, items]) => (
                  <div key={category}>
                    <div className="flex items-center space-x-2 mb-4">
                      {getAmenityIcon(category)}
                      <h3 className="text-lg font-semibold text-brand-primary">
                        {category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {items.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Advantages */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-brand-primary mb-6">
                Location Advantages
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-primary mb-4">
                    Business District Proximity
                  </h3>
                  <ul className="space-y-2">
                    {property.locationAdvantages.map((advantage, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-brand-secondary" />
                        <span className="text-gray-700">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-brand-light-grey to-brand-off-white rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-brand-primary mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Interactive Location Map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <InquiryForm propertyName={property.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;