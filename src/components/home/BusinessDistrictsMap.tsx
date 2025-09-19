import React from 'react';
import { MapPin, Building, Train, Plane } from 'lucide-react';

const BusinessDistrictsMap = () => {
  const districts = [
    {
      name: 'Downtown Dubai',
      description: 'Home to Burj Khalifa and Dubai Mall',
      properties: '120+ Properties',
      highlights: ['Burj Khalifa', 'Dubai Mall', 'Dubai Fountain']
    },
    {
      name: 'Business Bay',
      description: 'Dubai\'s central business district',
      properties: '80+ Properties',
      highlights: ['Business towers', 'Canal views', 'Metro access']
    },
    {
      name: 'DIFC',
      description: 'Dubai International Financial Centre',
      properties: '60+ Properties',
      highlights: ['Financial hub', 'Gate Avenue', 'Art galleries']
    },
    {
      name: 'Dubai Marina',
      description: 'Waterfront luxury living',
      properties: '100+ Properties',
      highlights: ['Marina Walk', 'JBR Beach', 'Yacht clubs']
    }
  ];

  const transportLinks = [
    { icon: Train, name: 'Metro Red Line', distance: '2 min walk' },
    { icon: Train, name: 'Dubai Tram', distance: '5 min walk' },
    { icon: Plane, name: 'DXB Airport', distance: '20 min drive' },
    { icon: Building, name: 'Business Centers', distance: 'Walking distance' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Strategic Business District Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perfectly positioned in Dubai's most prestigious business areas with unmatched connectivity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-light-grey to-brand-off-white rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-10">
                <img
                  src="https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dubai Map"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* District Markers */}
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
                {districts.map((district, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
                      <h4 className="font-bold text-brand-primary text-sm">{district.name}</h4>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{district.description}</p>
                    <p className="text-xs font-medium text-brand-secondary">{district.properties}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* District Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-6">
                Premium Business Districts
              </h3>
              <div className="space-y-6">
                {districts.map((district, index) => (
                  <div key={index} className="border-l-4 border-brand-secondary pl-6">
                    <h4 className="text-lg font-bold text-brand-primary mb-2">
                      {district.name}
                    </h4>
                    <p className="text-gray-600 mb-3">{district.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {district.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="bg-brand-light-grey text-brand-primary px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-brand-off-white rounded-xl p-6">
              <h4 className="text-lg font-bold text-brand-primary mb-4">
                Excellent Connectivity
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {transportLinks.map((link, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <link.icon className="h-5 w-5 text-brand-secondary" />
                    <div>
                      <div className="font-medium text-brand-primary text-sm">{link.name}</div>
                      <div className="text-xs text-gray-600">{link.distance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDistrictsMap;