
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <ProductSection 
        title="Flash Sales" 
        subtitle="Limited time offers - grab them before they're gone!"
      />
      <div className="bg-muted py-8">
        <ProductSection 
          title="Trending Products" 
          subtitle="Most popular items our customers are loving right now"
        />
      </div>
      <ProductSection 
        title="New Arrivals" 
        subtitle="Fresh products just added to our collection"
      />
      <Footer />
    </div>
  );
};

export default Index;
