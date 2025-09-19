import React, { useState } from 'react';
import { MapPin, Bed, Bath, Maximize, ArrowRight, Phone, Star, Heart, Share2 } from 'lucide-react';
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
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: property.name,
        text: property.description,
        url: window.location.href + `/property/${property.id}`
      });
    } else {
      navigator.clipboard.writeText(window.location.href + `/property/${property.id}`);
      alert('Property link copied to clipboard!');
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
            <img
              src={property.images[currentImageIndex]}
              alt={property.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-brand-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                {property.type}
              </span>
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={handleFavorite}
                className={`p-2 rounded-full transition-colors ${
                  isFavorited ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                }`}
              >
                <Heart className="h-4 w-4" />
              </button>
              <button
                onClick={handleShare}
                className="p-2 bg-white/80 text-gray-600 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
            {property.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
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
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-brand-secondary" />
                  <span className="text-sm text-brand-secondary font-medium">
                    {property.location}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-600">{property.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-primary mb-2">
                {property.name}
              </h3>

              <p className="text-brand-primary font-semibold mb-2">
                {property.priceRange}
              </p>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {property.description}
              </p>

              {/* Property Details */}
              <div className="flex items-center space-x-4 mb-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Bed className="h-4 w-4" />
                  <span className="text-sm">{property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} Bed`}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath className="h-4 w-4" />
                  <span className="text-sm">{property.bathrooms} Bath</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Maximize className="h-4 w-4" />
                  <span className="text-sm">{property.size}</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-2 mb-4">
                {property.amenities.slice(0, 4).map((amenity, index) => (
                  <span
                    key={index}
                    className="bg-brand-light-grey text-brand-primary px-2 py-1 rounded-lg text-xs"
                  >
                    {amenity}
                  </span>
                ))}
                {property.amenities.length > 4 && (
                  <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-xs">
                    +{property.amenities.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <Link
                to={`/property/${property.id}`}
                className="btn-primary flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <span>View Details</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="btn-primary bg-brand-secondary hover:bg-brand-secondary/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Inquire</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
            {property.type}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={handleFavorite}
            className={`p-2 rounded-full transition-colors ${
              isFavorited ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className="h-4 w-4" />
          </button>
          <button
            onClick={handleShare}
            className="p-2 bg-white/80 text-gray-600 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
        {property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
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
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-brand-secondary" />
            <span className="text-sm text-brand-secondary font-medium">
              {property.location}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-600">{property.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-brand-primary mb-2">
          {property.name}
        </h3>

        <p className="text-brand-primary font-semibold mb-2">
          {property.priceRange}
        </p>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Property Details */}
        <div className="flex items-center space-x-4 mb-4 text-gray-600">
          <div className="flex items-center space-x-1">
            <Bed className="h-4 w-4" />
            <span className="text-sm">{property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} Bed`}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="h-4 w-4" />
            <span className="text-sm">{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center space-x-1">
            <Maximize className="h-4 w-4" />
            <span className="text-sm">{property.size}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-brand-light-grey text-brand-primary px-2 py-1 rounded-lg text-xs"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-xs">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            to={`/property/${property.id}`}
            className="btn-primary w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button className="btn-primary w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>Inquire Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;