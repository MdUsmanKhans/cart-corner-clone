
import React from 'react';
import ProductCard from './ProductCard';
import { getFlashSaleProducts, getTrendingProducts, getNewArrivals, Product } from '@/data/products';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  type?: 'flash-sale' | 'trending' | 'new-arrivals';
  products?: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ 
  title, 
  subtitle, 
  type,
  products: customProducts 
}) => {
  const getProducts = () => {
    if (customProducts) return customProducts;
    
    switch (type) {
      case 'flash-sale':
        return getFlashSaleProducts();
      case 'trending':
        return getTrendingProducts();
      case 'new-arrivals':
        return getNewArrivals();
      default:
        return getFlashSaleProducts();
    }
  };

  const products = getProducts();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
