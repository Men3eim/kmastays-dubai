import React from 'react';
import { Building2, Users, FileText, Headphones, TrendingUp, Shield, Clock, Globe, ArrowRight } from 'lucide-react';
import InquiryForm from '../components/common/InquiryForm';

const CorporateServicesPage = () => {
  const services = [
    {
      icon: Building2,
      title: 'Extended Stay Packages',
      description: 'Customized accommodation solutions for 1-12+ month stays with preferential corporate rates.',
      features: ['Flexible contract terms', 'Volume discounts', 'Dedicated account management', 'Priority booking']
    },
    {
      icon: Users,
      title: 'Bulk Team Accommodation',
      description: 'Complete housing solutions for project teams, office expansions, and corporate relocations.',
      features: ['Team coordination', 'Proximity planning', 'Group amenities', 'Centralized billing']
    },
    {
      icon: FileText,
      title: 'Corporate Billing & Invoicing',
      description: 'Streamlined financial processes designed for corporate finance and procurement teams.',
      features: ['Consolidated invoicing', 'Tax documentation', 'Expense reporting', 'Multi-currency support']
    },
    {
      icon: Headphones,
      title: 'Dedicated Account Management',
      description: '24/7 concierge services and personal account managers for seamless corporate experience.',
      features: ['Personal account manager', '24/7 support hotline', 'Emergency assistance', 'Concierge services']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Savings',
      description: 'Up to 40% savings compared to hotels for extended stays',
      stat: '40%'
    },
    {
      icon: Shield,
      title: 'Tax Advantages',
      description: 'Proper documentation for corporate tax benefits',
      stat: '100%'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Reduced administrative overhead and setup time',
      stat: '70%'
    },
    {
      icon: Globe,
      title: 'Employee Satisfaction',
      description: 'Higher satisfaction rates vs traditional hotels',
      stat: '95%'
    }
  ];

  const caseStudies = [
    {
      company: 'Global Tech Solutions',
      challenge: '6-month expansion project requiring accommodation for 25 executives',
      solution: 'Coordinated 25 apartments across Business Bay and DIFC with shared amenities',
      result: '30% cost savings and 98% employee satisfaction rating'
    },
    {
      company: 'International Banking Corp',
      challenge: 'Quarterly business reviews requiring flexible short-term stays',
      solution: 'On-demand booking system with preferred rates and concierge support',
      result: '50% reduction in booking time and administrative overhead'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-off-white pt-14 sm:pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Corporate Housing Solutions in Dubai
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2">
            Comprehensive accommodation services for international businesses, project teams, and corporate relocations
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Services Overview */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-3 sm:mb-4">
              Our Corporate Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Tailored solutions designed to meet the unique needs of modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-brand-primary" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-brand-primary mb-3 sm:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                <ul className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-secondary rounded-full"></div>
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Benefits */}
        <section className="mb-12 sm:mb-16 md:mb-20 bg-brand-light-grey rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-3 sm:mb-4">
              Corporate Benefits
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Quantifiable advantages for your business and employees
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <benefit.icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-brand-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-primary mb-1 sm:mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-brand-primary mb-1 sm:mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-3 sm:mb-4">
              Corporate Success Stories
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Real results from our corporate partnership
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-brand-primary mb-3 sm:mb-4">
                  {study.company}
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-secondary mb-1 sm:mb-2 text-sm sm:text-base">Challenge</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-secondary mb-1 sm:mb-2 text-sm sm:text-base">KMASTAYS Solution</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-secondary mb-1 sm:mb-2 text-sm sm:text-base">Result</h4>
                    <p className="text-gray-600 text-xs sm:text-sm font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Consultation Form */}
        <section className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-primary mb-4 sm:mb-6">
                Request Corporate Consultation
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Let our corporate housing specialists design a customized accommodation solution for your business needs.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-secondary rounded-full"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Free consultation and needs assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-secondary rounded-full"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Customized proposals within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-secondary rounded-full"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Dedicated account management</span>
                </div>
              </div>
            </div>

            <div>
              <InquiryForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CorporateServicesPage;