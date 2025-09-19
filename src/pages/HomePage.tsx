import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PropertySearchWidget from '../components/home/PropertySearchWidget';
import ValuePropositions from '../components/home/ValuePropositions';
import FeaturedProperties from '../components/home/FeaturedProperties';
import BusinessDistrictsMap from '../components/home/BusinessDistrictsMap';
import Testimonials from '../components/home/Testimonials';
import CorporateServicesPreview from '../components/home/CorporateServicesPreview';

const HomePage = () => {
  return (
    <div className="min-h-screen">
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