import React from 'react';
import SEOHead from '../components/common/SEOHead';
import HeroSection from '../components/home/HeroSection';
import PropertySearchWidget from '../components/home/PropertySearchWidget';
import ValuePropositions from '../components/home/ValuePropositions';
import FeaturedProperties from '../components/home/FeaturedProperties';
import BusinessDistrictsMap from '../components/home/BusinessDistrictsMap';
import Testimonials from '../components/home/Testimonials';
import CorporateServicesPreview from '../components/home/CorporateServicesPreview';

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KMASTAYS Dubai",
    "url": "https://kmastays.com",
    "description": "Premium corporate serviced apartments in Dubai's prime business districts",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kmastays.com/properties?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="KMASTAYS Dubai - Premium Corporate Serviced Apartments"
        description="Premium corporate serviced apartments in Dubai's prime business districts. Luxury accommodation for business travelers in Downtown Dubai, Business Bay, DIFC & Dubai Marina. Book your corporate stay today."
        keywords="Dubai corporate apartments, serviced apartments Dubai, business accommodation Dubai, DIFC apartments, Business Bay apartments, Downtown Dubai housing, corporate housing Dubai, extended stay Dubai, business travel accommodation, luxury serviced apartments"
        url="https://kmastays.com"
        structuredData={structuredData}
      />
      <HeroSection />
      <PropertySearchWidget />
      <ValuePropositions />
      <FeaturedProperties />
      <BusinessDistrictsMap />
      <Testimonials />
      <CorporateServicesPreview />
    </div>
  );
};

export default HomePage;