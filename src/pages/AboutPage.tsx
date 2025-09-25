import React from 'react';
import { Award, Users, Globe, Target, Phone, Mail, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutPage = () => {
  const heroRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const teamRef = useScrollAnimation();
  
  const stats = [
    { number: '2018', label: 'Founded in Dubai' },
    { number: '500+', label: 'Premium Apartments' },
    { number: '100+', label: 'Corporate Clients' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to delivering exceptional service and luxury accommodation experiences'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with our corporate clients and business partners'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Understanding international business needs and cultural diversity in Dubai'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on measurable outcomes and client success in their Dubai operations'
    }
  ];

  const team = [
    {
      name: 'Ahmed Al-Mansouri',
      position: 'Managing Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years in Dubai hospitality and corporate housing with extensive business district knowledge.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Corporate Relations Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'International business background specializing in corporate relocations and executive housing.'
    },
    {
      name: 'Michael Chen',
      position: 'Operations Manager',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Hospitality operations expert ensuring seamless service delivery and guest satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-off-white pt-14 sm:pt-16 md:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="animate-on-scroll">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-3 sm:mb-4 md:mb-6 text-reveal">
                About KMASTAYS Dubai
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-reveal-delay-1 px-2">
                Dubai's premier provider of luxury corporate serviced apartments, specializing in 
                accommodating international business travelers, executives, and corporate teams in 
                the city's most prestigious business districts.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className={`text-center scale-in${index > 0 ? `-delay-${index}` : ''}`}>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dubai Business District"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-4 sm:mb-6 md:mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              <p className="mb-3 sm:mb-4 md:mb-6">
                Founded in 2018, KMASTAYS Dubai emerged from a clear vision: to provide world-class 
                corporate accommodation that meets the sophisticated needs of international business 
                travelers in one of the world's most dynamic business hubs.
              </p>
              <p className="mb-3 sm:mb-4 md:mb-6">
                Our founders, with decades of combined experience in Dubai's hospitality and real 
                estate sectors, recognized the growing demand for premium, flexible accommodation 
                solutions that could seamlessly integrate with corporate operations.
              </p>
              <p>
                Today, we proudly serve over 100 international corporations, providing them with 
                exceptional accommodation experiences that enhance productivity, employee satisfaction, 
                and business success in Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center card-hover animate-on-scroll p-3 sm:p-4 md:p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-brand-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 hover-glow">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-brand-primary" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-primary mb-2 sm:mb-3 md:mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-8 sm:py-12 md:py-16 lg:py-20 bg-brand-light-grey">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-3 sm:mb-4">
              Our Leadership Team
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Experienced professionals dedicated to your success in Dubai
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg text-center card-hover animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto mb-3 sm:mb-4 md:mb-6 hover-scale"
                />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-secondary font-medium mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                  {member.position}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3 sm:space-x-4 mt-3 sm:mt-4 md:mt-6">
                  <button className="p-2 sm:p-3 bg-brand-light-grey rounded-lg hover:bg-brand-primary hover:text-white transition-colors hover-scale min-h-[44px] min-w-[44px] flex items-center justify-center">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                  <button className="p-2 sm:p-3 bg-brand-light-grey rounded-lg hover:bg-brand-primary hover:text-white transition-colors hover-scale min-h-[44px] min-w-[44px] flex items-center justify-center">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-primary mb-3 sm:mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Licensed and certified to operate in Dubai's premium accommodation sector
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 items-center justify-items-center">
            <div className="bg-gray-100 h-12 sm:h-16 md:h-20 w-20 sm:w-24 md:w-32 rounded-lg flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold text-gray-500 text-center">Dubai Tourism</span>
            </div>
            <div className="bg-gray-100 h-12 sm:h-16 md:h-20 w-20 sm:w-24 md:w-32 rounded-lg flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold text-gray-500 text-center">DTCM Licensed</span>
            </div>
            <div className="bg-gray-100 h-12 sm:h-16 md:h-20 w-20 sm:w-24 md:w-32 rounded-lg flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold text-gray-500 text-center">ISO Certified</span>
            </div>
            <div className="bg-gray-100 h-12 sm:h-16 md:h-20 w-20 sm:w-24 md:w-32 rounded-lg flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold text-gray-500 text-center">Partner Hotels</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
            Ready to Experience KMASTAYS Excellence?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 md:mb-8">
            Let's discuss how we can support your Dubai business accommodation needs
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="btn-primary bg-white text-brand-primary hover:bg-gray-100 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto text-sm sm:text-base md:text-lg min-h-[44px]"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;