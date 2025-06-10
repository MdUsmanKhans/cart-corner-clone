
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';
import { useProducts } from '@/hooks/useProducts';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const { data: products, isLoading } = useProducts();

  const getFlashSaleProducts = () => {
    if (!products) return [];
    return products.filter(product => product.discount && product.discount > 15).slice(0, 4);
  };

  const getTrendingProducts = () => {
    if (!products) return [];
    return products.filter(product => product.reviews > 100).slice(0, 4);
  };

  const getNewArrivals = () => {
    if (!products) return [];
    return products.slice(-4);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading store...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <ProductSection 
        title="Flash Sales" 
        subtitle="Limited time offers - grab them before they're gone!"
        products={getFlashSaleProducts()}
      />
      <div className="bg-muted py-8">
        <ProductSection 
          title="Trending Products" 
          subtitle="Most popular items our customers are loving right now"
          products={getTrendingProducts()}
        />
      </div>
      <ProductSection 
        title="New Arrivals" 
        subtitle="Fresh products just added to our collection"
        products={getNewArrivals()}
      />
      <Footer />
    </div>
  );
};

export default Index;
