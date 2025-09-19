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
    <div className="min-h-screen bg-brand-off-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Corporate Housing Solutions in Dubai
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive accommodation services for international businesses, project teams, and corporate relocations
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Overview */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Our Corporate Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions designed to meet the unique needs of modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-brand-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-primary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Benefits */}
        <section className="mb-20 bg-brand-light-grey rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Corporate Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Quantifiable advantages for your business and employees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="h-10 w-10 text-brand-primary" />
                </div>
                <div className="text-3xl font-bold text-brand-primary mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Corporate Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our corporate partnership
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-brand-primary mb-4">
                  {study.company}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-secondary mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-secondary mb-2">KMASTAYS Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-secondary mb-2">Result</h4>
                    <p className="text-gray-600 text-sm font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Consultation Form */}
        <section className="bg-white rounded-2xl shadow-lg p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">
                Request Corporate Consultation
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Let our corporate housing specialists design a customized accommodation solution for your business needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                  <span className="text-gray-700">Free consultation and needs assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                  <span className="text-gray-700">Customized proposals within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                  <span className="text-gray-700">Dedicated account management</span>
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