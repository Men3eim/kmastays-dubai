import React from 'react';
import { Building2, Users, FileText, Headphones, ArrowRight, Train, Plane } from 'lucide-react';

const CorporateServicesPreview = () => {
  const services = [
    {
      icon: Building2,
      title: 'Extended Stay Packages',
      description: 'Flexible 1-12+ month packages with corporate rates and dedicated account management.'
    },
    {
      icon: Users,
      title: 'Bulk Team Accommodation',
      description: 'Complete housing solutions for project teams, expansions, and corporate relocations.'
    },
    {
      icon: FileText,
      title: 'Corporate Billing',
      description: 'Streamlined invoicing, tax documentation, and expense management for finance teams.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: '24/7 concierge services and dedicated account managers for seamless experience.'
    }
  ];

  const transportLinks = [
    { icon: Train, name: 'Metro Red Line', distance: '2 min walk' },
    { icon: Train, name: 'Dubai Tram', distance: '5 min walk' },
    { icon: Plane, name: 'DXB Airport', distance: '20 min drive' },
    { icon: Building2, name: 'Business Centers', distance: 'Walking distance' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Corporate Housing Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive accommodation services designed for modern businesses and their teams
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-brand-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-brand-primary mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-primary mb-4 sm:mb-6">
                Why Corporate Clients Choose KMASTAYS
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-primary text-sm sm:text-base">Cost Savings vs Hotels</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Up to 40% savings on extended stays compared to traditional hotels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-primary text-sm sm:text-base">Tax Advantages</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Proper documentation and invoicing for corporate tax benefits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-primary text-sm sm:text-base">Employee Satisfaction</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Home-like comfort improves productivity and job satisfaction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-primary text-sm sm:text-base">Flexible Terms</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Customizable contracts to match your business timeline</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <img
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Corporate Team"
                className="w-full h-48 sm:h-64 object-cover rounded-xl"
              />
              
              {/* Transport Links */}
              <div className="bg-brand-light-grey rounded-xl p-4 sm:p-6">
                <h4 className="font-bold text-brand-primary mb-3 sm:mb-4 text-sm sm:text-base">Transportation Links</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {transportLinks.map((link, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <link.icon className="h-4 w-4 text-brand-secondary" />
                      <div>
                        <div className="text-xs sm:text-sm font-medium text-brand-primary">{link.name}</div>
                        <div className="text-xs text-gray-600">{link.distance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <span>Request Corporate Consultation</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CorporateServicesPreview;