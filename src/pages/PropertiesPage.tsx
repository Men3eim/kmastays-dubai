import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, MapPin, X } from 'lucide-react';
import PropertyCard from '../components/properties/PropertyCard';
import PropertyFilters from '../components/properties/PropertyFilters';
import PropertyMap from '../components/properties/PropertyMap';

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

const PropertiesPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price-low');
  const [filters, setFilters] = useState({
    locations: [] as string[],
    priceRange: [0, 30000] as [number, number],
    bedrooms: '',
    amenities: [] as string[],
  });

  // Comprehensive property data
  const allProperties: Property[] = [
    {
      id: 1,
      name: 'Executive Tower Downtown',
      location: 'Downtown Dubai',
      type: '2 Bedroom Executive',
      priceRange: 'AED 8,000 - 12,000/month',
      priceMin: 8000,
      priceMax: 12000,
      images: [
        'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      amenities: ['High-speed WiFi', 'Parking', 'Gym Access', 'Concierge', 'Business Center', 'City View'],
      size: '1,200 sq ft',
      bedrooms: 2,
      bathrooms: 2,
      available: true,
      rating: 4.8,
      description: 'Luxury executive apartment in the heart of Downtown Dubai with stunning Burj Khalifa views.'
    },
    {
      id: 2,
      name: 'Marina Bay Residences',
      location: 'Dubai Marina',
      type: '1 Bedroom Deluxe',
      priceRange: 'AED 6,000 - 9,000/month',
      priceMin: 6000,
      priceMax: 9000,
      images: [
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      amenities: ['High-speed WiFi', 'Parking', 'Gym Access', 'Pool', 'Balcony', 'Metro Access'],
      size: '850 sq ft',
      bedrooms: 1,
      bathrooms: 1,
      available: true,
      rating: 4.6,
      description: 'Modern apartment with marina views and easy access to Dubai Marina Walk.'
    },
    {
      id: 3,
      name: 'DIFC Financial Center Suites',
      location: 'DIFC',
      type: '3 Bedroom Penthouse',
      priceRange: 'AED 15,000 - 20,000/month',
      priceMin: 15000,
      priceMax: 20000,
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      amenities: ['High-speed WiFi', 'Parking', 'Gym Access', 'Concierge', 'Business Center', 'Kitchen', 'City View'],
      size: '2,200 sq ft',
      bedrooms: 3,
      bathrooms: 3,
      available: true,
      rating: 4.9,
      description: 'Premium penthouse in Dubai International Financial Centre with panoramic city views.'
    },
    {
      id: 4,
      name: 'Business Bay Corporate Apartments',
      location: 'Business Bay',
      type: 'Studio Executive',
      priceRange: 'AED 4,500 - 7,000/month',
      priceMin: 4500,
      priceMax: 7000,
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      amenities: ['High-speed WiFi', 'Parking', 'Gym Access', 'Concierge', 'Metro Access'],
      size: '650 sq ft',
      bedrooms: 0,
      bathrooms: 1,
      available: true,
      rating: 4.4,
      description: 'Efficient studio apartment perfect for business travelers in Business Bay.'
    },
    {
      id: 5,
      name: 'Marina Heights Tower',
      location: 'Dubai Marina',
      type: '2 Bedroom Premium',
      priceRange: 'AED 9,500 - 14,000/month',
      priceMin: 9500,
      priceMax: 14000,
      images: [
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      amenities: ['High-speed WiFi', 'Parking', 'Gym Access', 'Pool', 'Balcony', 'Concierge', 'City View'],
      size: '1,400 sq ft',
      bedrooms: 2,
      bathrooms: 2,
      available: true,
      rating: 4.7,
      description: 'Luxury apartment with stunning marina and city views in Dubai Marina.'
    },
    {
      id: 6,
      name: 'Downtown Skyline Residences',
      location: 'Downtown Dubai',
      type: '1 Bedroom Luxury',
      priceRange: 'AED 7,500 - 11,000/month',
      priceMin: 7500,
      priceMax: 11000,
      images: [
        'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      amenities: ['High-speed WiFi', 'Parking', 'Gym Access', 'Concierge', 'Business Center', 'City View', 'Kitchen'],
      size: '950 sq ft',
      bedrooms: 1,
      bathrooms: 1,
      available: true,
      rating: 4.5,
      description: 'Elegant apartment with direct views of Burj Khalifa and Dubai Fountain.'
    }
  ];

  // Filter and search properties
  const filteredProperties = useMemo(() => {
    let filtered = allProperties.filter(property => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!property.name.toLowerCase().includes(query) && 
            !property.location.toLowerCase().includes(query) &&
            !property.type.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Location filter
      if (filters.locations.length > 0 && !filters.locations.includes(property.location)) {
        return false;
      }

      // Price range filter
      if (property.priceMin > filters.priceRange[1] || property.priceMax < filters.priceRange[0]) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms) {
        if (filters.bedrooms === 'studio' && property.bedrooms !== 0) return false;
        if (filters.bedrooms === '1' && property.bedrooms !== 1) return false;
        if (filters.bedrooms === '2' && property.bedrooms !== 2) return false;
        if (filters.bedrooms === '3' && property.bedrooms !== 3) return false;
        if (filters.bedrooms === '4+' && property.bedrooms < 4) return false;
      }

      // Amenities filter
      if (filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every(amenity => 
          property.amenities.includes(amenity)
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    });

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.priceMin - b.priceMin;
        case 'price-high':
          return b.priceMax - a.priceMax;
        case 'size':
          return parseInt(b.size.replace(/[^\d]/g, '')) - parseInt(a.size.replace(/[^\d]/g, ''));
        case 'location':
          return a.location.localeCompare(b.location);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, filters, sortBy]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      locations: [],
      priceRange: [0, 30000],
      bedrooms: '',
      amenities: [],
    });
    setSearchQuery('');
  };

  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    duration: '',
    message: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the inquiry to your backend
    alert('Thank you for your inquiry! We will contact you soon.');
    setInquiryForm({
      name: '',
      email: '',
      phone: '',
      checkInDate: '',
      duration: '',
      message: ''
    });
  };

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInquiryForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-brand-off-white pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-3 sm:mb-4">
            Premium Corporate Apartments
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Discover luxury serviced apartments in Dubai's prime business districts
          </p>
        </div>

        {/* Search and View Controls */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-base"
                />
              </div>
            </div>

            {/* Filters and View Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center justify-center space-x-2 px-4 py-3 border rounded-lg transition-colors ${
                  showFilters 
                    ? 'bg-brand-primary text-white border-brand-primary' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Filter className="h-5 w-5" />
                <span className="text-base">Filters</span>
                {(filters.locations.length > 0 || filters.amenities.length > 0 || filters.bedrooms || filters.priceRange[1] < 30000) && (
                  <span className="bg-brand-secondary text-white text-xs px-2 py-1 rounded-full ml-1">
                    Active
                  </span>
                )}
              </button>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-brand-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-brand-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <List className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-3 ${viewMode === 'map' ? 'bg-brand-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <MapPin className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="relative">
            <PropertyFilters 
              filters={filters} 
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
            <button
              onClick={() => setShowFilters(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Properties List */}
          <div className="lg:col-span-3">
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
              <p className="text-gray-600 text-base">
                Showing {filteredProperties.length} of {allProperties.length} properties
              </p>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-brand-primary focus:border-brand-primary w-full sm:w-auto"
              >
                <option value="price-low">Sort by Price (Low to High)</option>
                <option value="price-high">Sort by Price (High to Low)</option>
                <option value="size">Sort by Size</option>
                <option value="location">Sort by Location</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>

            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
                <p className="text-gray-500 mb-4 text-base">Try adjusting your search criteria or filters</p>
                <button
                  onClick={clearFilters}
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-base"
                >
                  Clear All Filters
                </button>
              </div>
            ) : viewMode === 'map' ? (
              <PropertyMap properties={filteredProperties} />
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6' : 'space-y-4 sm:space-y-6'}>
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} viewMode={viewMode} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar - Quick Inquiry */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 sticky top-20 sm:top-24">
              <h3 className="text-lg sm:text-xl font-bold text-brand-primary mb-4 sm:mb-6">
                Quick Inquiry
              </h3>
              <form onSubmit={handleInquirySubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={inquiryForm.name}
                    onChange={handleInquiryChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inquiryForm.email}
                    onChange={handleInquiryChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={inquiryForm.phone}
                    onChange={handleInquiryChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkInDate"
                    value={inquiryForm.checkInDate}
                    onChange={handleInquiryChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select 
                    name="duration"
                    value={inquiryForm.duration}
                    onChange={handleInquiryChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-base"
                  >
                    <option value="">Select duration</option>
                    <option value="1-30 days">1-30 days</option>
                    <option value="1-6 months">1-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={inquiryForm.message}
                    onChange={handleInquiryChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-base"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-4 rounded-lg font-semibold transition-colors text-base"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;