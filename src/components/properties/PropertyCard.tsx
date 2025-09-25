import React, { useState } from 'react';
import { MapPin, Bed, Bath, Maximize, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Property {
  id: number;
  name: string;
  location: string;
  type: string;
  priceRange: string;
  priceMin: number;
  priceMax: number;
  images: string[];
  amenities: string[];
  size: string;
  bedrooms: number;
  bathrooms: number;
  available: boolean;
  rating: number;
  description: string;
}

interface PropertyCardProps {
  property: Property;
  viewMode: 'grid' | 'list';
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, viewMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (viewMode === 'list') {
    return (
      <Link to={`/property/${property.id}`} className="block bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden card-hover hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3 h-36 sm:h-40 md:h-auto relative overflow-hidden">
            <img
              src={property.images[currentImageIndex]}
              alt={property.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
              <span className="bg-brand-secondary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                {property.type}
              </span>
            </div>
            {property.images.length > 1 && (
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="md:w-2/3 p-3 sm:p-4 md:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-brand-secondary" />
                  <span className="text-xs sm:text-sm text-brand-secondary font-medium">
                    {property.location}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600">{property.rating}</span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-primary mb-2">
                {property.name}
              </h3>

              <p className="text-brand-primary font-semibold mb-2 text-xs sm:text-sm md:text-base">
                {property.priceRange}
              </p>

              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 line-clamp-2">
                {property.description}
              </p>

              {/* Property Details */}
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-2 sm:mb-3 md:mb-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Bed className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">{property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} Bed`}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">{property.bathrooms} Bath</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Maximize className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">{property.size}</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                {property.amenities.slice(0, 4).map((amenity, index) => (
                  <span
                    key={index}
                    className="bg-brand-light-grey text-brand-primary px-1.5 sm:px-2 py-1 rounded-lg text-xs"
                  >
                    {amenity}
                  </span>
                ))}
                {property.amenities.length > 4 && (
                  <span className="bg-gray-200 text-gray-600 px-1.5 sm:px-2 py-1 rounded-lg text-xs">
                    +{property.amenities.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* View Details Link */}
            <div className="flex items-center justify-end text-brand-primary font-semibold text-sm">
              <span>View Details</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/property/${property.id}`} className="block bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden card-hover hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
          <span className="bg-brand-secondary text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            {property.type}
          </span>
        </div>
        {property.images.length > 1 && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-brand-secondary" />
            <span className="text-xs sm:text-sm text-brand-secondary font-medium">
              {property.location}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
            <span className="text-xs sm:text-sm font-medium text-gray-600">{property.rating}</span>
          </div>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-primary mb-2">
          {property.name}
        </h3>

        <p className="text-brand-primary font-semibold mb-2 text-xs sm:text-sm md:text-base">
          {property.priceRange}
        </p>

        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Property Details */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-2 sm:mb-3 md:mb-4 text-gray-600">
          <div className="flex items-center space-x-1">
            <Bed className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">{property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} Bed`}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center space-x-1">
            <Maximize className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">{property.size}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-brand-light-grey text-brand-primary px-1.5 sm:px-2 py-1 rounded-lg text-xs"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="bg-gray-200 text-gray-600 px-1.5 sm:px-2 py-1 rounded-lg text-xs">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Link */}
        <div className="flex items-center justify-center text-brand-primary font-semibold text-sm">
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;