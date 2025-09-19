import React from 'react';
import { X } from 'lucide-react';

interface FilterState {
  locations: string[];
  priceRange: [number, number];
  bedrooms: string;
  amenities: string[];
}

interface PropertyFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ 
  filters, 
  onFilterChange, 
  onClearFilters 
}) => {
  const locations = ['Downtown Dubai', 'Business Bay', 'DIFC', 'Dubai Marina'];
  const amenitiesList = [
    'High-speed WiFi', 'Parking', 'Gym Access', 'Pool', 'Concierge', 
    'Business Center', 'Kitchen', 'Balcony', 'City View', 'Metro Access'
  ];

  const handleLocationToggle = (location: string) => {
    const newLocations = filters.locations.includes(location)
      ? filters.locations.filter(l => l !== location)
      : [...filters.locations, location];
    
    onFilterChange({
      ...filters,
      locations: newLocations
    });
  };

  const handleAmenityToggle = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    
    onFilterChange({
      ...filters,
      amenities: newAmenities
    });
  };

  const handlePriceRangeChange = (value: number) => {
    onFilterChange({
      ...filters,
      priceRange: [0, value]
    });
  };

  const handleBedroomsChange = (bedrooms: string) => {
    onFilterChange({
      ...filters,
      bedrooms
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-brand-primary">Filters</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Locations */}
        <div>
          <h4 className="font-semibold text-brand-primary mb-3">Location</h4>
          <div className="space-y-2">
            {locations.map((location) => (
              <label key={location} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.locations.includes(location)}
                  onChange={() => handleLocationToggle(location)}
                  className="rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                />
                <span className="text-sm text-gray-700">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="font-semibold text-brand-primary mb-3">Price Range (AED/month)</h4>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="30000"
              step="1000"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceRangeChange(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>AED 0</span>
              <span>AED {filters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <h4 className="font-semibold text-brand-primary mb-3">Bedrooms</h4>
          <select
            value={filters.bedrooms}
            onChange={(e) => handleBedroomsChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
          >
            <option value="">Any</option>
            <option value="studio">Studio</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4+">4+ Bedrooms</option>
          </select>
        </div>

        {/* Amenities */}
        <div>
          <h4 className="font-semibold text-brand-primary mb-3">Amenities</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {amenitiesList.slice(0, 6).map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  className="rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
                />
                <span className="text-sm text-gray-700">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
        <button
          onClick={onClearFilters}
          className="text-gray-600 hover:text-brand-primary transition-colors"
        >
          Clear All
        </button>
        <div className="text-sm text-gray-500">
          {filters.locations.length + filters.amenities.length + (filters.bedrooms ? 1 : 0) + (filters.priceRange[1] < 30000 ? 1 : 0)} filters active
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;