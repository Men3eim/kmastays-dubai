import React, { useState } from 'react';
import { MapPin, Star, Bed, Bath, Maximize } from 'lucide-react';
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

interface PropertyMapProps {
  properties: Property[];
}

const PropertyMap: React.FC<PropertyMapProps> = ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [hoveredProperty, setHoveredProperty] = useState<Property | null>(null);

  // Mock coordinates for different locations
  const locationCoordinates = {
    'Downtown Dubai': { x: 20, y: 30 },
    'Business Bay': { x: 25, y: 45 },
    'DIFC': { x: 30, y: 25 },
    'Dubai Marina': { x: 15, y: 60 }
  };

  const getPropertyPosition = (property: Property) => {
    const coords = locationCoordinates[property.location as keyof typeof locationCoordinates] || { x: 20, y: 30 };
    return {
      left: `${coords.x}%`,
      top: `${coords.y}%`
    };
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Map Container */}
      <div className="relative h-96 bg-gradient-to-br from-brand-light-grey to-brand-off-white">
        {/* Map Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Map Title */}
        <div className="absolute top-4 left-4 z-10">
          <h3 className="text-lg font-bold text-brand-primary">Dubai Properties Map</h3>
          <p className="text-sm text-gray-600">{properties.length} properties found</p>
        </div>

        {/* Property Markers */}
        {properties.map((property) => {
          const position = getPropertyPosition(property);
          const isSelected = selectedProperty?.id === property.id;
          const isHovered = hoveredProperty?.id === property.id;
          
          return (
            <div
              key={property.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
              style={position}
            >
              <div
                className={`bg-brand-primary text-white p-2 rounded-full shadow-lg cursor-pointer transition-all duration-200 ${
                  isSelected ? 'scale-125 bg-brand-secondary' : 'hover:scale-110'
                } ${isHovered ? 'ring-4 ring-brand-primary/30' : ''}`}
                onClick={() => setSelectedProperty(isSelected ? null : property)}
                onMouseEnter={() => setHoveredProperty(property)}
                onMouseLeave={() => setHoveredProperty(null)}
              >
                <MapPin className="h-4 w-4" />
              </div>
              
              {/* Property Tooltip */}
              {(isSelected || isHovered) && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-30">
                  <div className="flex items-start space-x-3">
                    <img
                      src={property.images[0]}
                      alt={property.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-brand-primary text-sm truncate">
                        {property.name}
                      </h4>
                      <p className="text-xs text-gray-600">{property.location}</p>
                      <p className="text-xs font-medium text-brand-secondary">{property.priceRange}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">{property.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                          <Bed className="h-3 w-3" />
                          <span>{property.bedrooms === 0 ? 'Studio' : property.bedrooms}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                          <Bath className="h-3 w-3" />
                          <span>{property.bathrooms}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Map Legend */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
              <span>Available Properties</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-brand-secondary rounded-full"></div>
              <span>Selected Property</span>
            </div>
          </div>
        </div>
      </div>

      {/* Property List Below Map */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-brand-primary">Properties on Map</h4>
          <span className="text-sm text-gray-500">{properties.length} properties</span>
        </div>
        
        {properties.length === 0 ? (
          <div className="text-center py-8">
            <MapPin className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No properties found matching your criteria</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {properties.map((property) => (
              <div 
                key={property.id} 
                className={`flex items-center space-x-4 p-3 rounded-lg transition-colors cursor-pointer ${
                  selectedProperty?.id === property.id 
                    ? 'bg-brand-primary/10 border-2 border-brand-primary' 
                    : 'bg-brand-off-white hover:bg-gray-50'
                }`}
                onClick={() => setSelectedProperty(selectedProperty?.id === property.id ? null : property)}
              >
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-brand-primary truncate">{property.name}</h5>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <p className="text-sm font-medium text-brand-secondary">{property.priceRange}</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600">{property.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <Bed className="h-3 w-3" />
                      <span>{property.bedrooms === 0 ? 'Studio' : property.bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <Bath className="h-3 w-3" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <Maximize className="h-3 w-3" />
                      <span>{property.size}</span>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/property/${property.id}`}
                  className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-primary/90 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyMap;