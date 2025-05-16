
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PropertyTypeFilters from "../components/PropertyTypeFilters";
import PropertyList from "../components/PropertyList";
import FeaturesSection from "../components/FeaturesSection";
import PopularDestinations from "../components/PopularDestinations";
import TestimonialSection from "../components/TestimonialSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  const [propertyType, setPropertyType] = useState("all");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div className="container px-4 md:px-6 mt-8">
          <PropertyTypeFilters
            selectedType={propertyType}
            onTypeChange={setPropertyType}
          />
        </div>
        <PropertyList />
        <FeaturesSection />
        <PopularDestinations />
        <TestimonialSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
