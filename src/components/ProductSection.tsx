
import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max 256GB - Natural Titanium',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
    rating: 4.8,
    reviews: 1245,
    discount: 8
  },
  {
    id: 2,
    name: 'MacBook Pro 14" M3 Chip with 8-Core CPU',
    price: 1599,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
    rating: 4.9,
    reviews: 892,
    discount: 11
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop',
    rating: 4.7,
    reviews: 2156,
    discount: 25
  },
  {
    id: 4,
    name: 'Samsung 55" QLED 4K Smart TV',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop',
    rating: 4.6,
    reviews: 687,
    discount: 20
  },
  {
    id: 5,
    name: 'Nike Air Max 270 Running Shoes',
    price: 129,
    originalPrice: 160,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop',
    rating: 4.5,
    reviews: 934,
    discount: 19
  },
  {
    id: 6,
    name: 'Canon EOS R6 Mark II Mirrorless Camera',
    price: 2099,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
    rating: 4.9,
    reviews: 456,
  },
  {
    id: 7,
    name: 'Gaming Chair with RGB Lighting',
    price: 249,
    originalPrice: 349,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
    rating: 4.4,
    reviews: 723,
    discount: 29
  },
  {
    id: 8,
    name: 'Wireless Bluetooth Speaker',
    price: 89,
    originalPrice: 119,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop',
    rating: 4.3,
    reviews: 1567,
    discount: 25
  }
];

interface ProductSectionProps {
  title: string;
  subtitle?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, subtitle }) => {
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
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
