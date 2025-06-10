
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    icon: '📱',
    color: 'bg-blue-100 text-blue-600',
    description: 'Phones, Laptops & More',
    slug: 'electronics'
  },
  {
    id: 2,
    name: 'Fashion',
    icon: '👗',
    color: 'bg-pink-100 text-pink-600',
    description: 'Clothing & Accessories',
    slug: 'fashion'
  },
  {
    id: 3,
    name: 'Home & Living',
    icon: '🏠',
    color: 'bg-green-100 text-green-600',
    description: 'Furniture & Decor',
    slug: 'home-living'
  },
  {
    id: 4,
    name: 'Sports',
    icon: '⚽',
    color: 'bg-orange-100 text-orange-600',
    description: 'Fitness & Outdoor',
    slug: 'sports'
  },
  {
    id: 5,
    name: 'Beauty',
    icon: '💄',
    color: 'bg-purple-100 text-purple-600',
    description: 'Skincare & Makeup',
    slug: 'beauty'
  },
  {
    id: 6,
    name: 'Books',
    icon: '📚',
    color: 'bg-indigo-100 text-indigo-600',
    description: 'Education & Fiction',
    slug: 'books'
  },
  {
    id: 7,
    name: 'Groceries',
    icon: '🛒',
    color: 'bg-emerald-100 text-emerald-600',
    description: 'Fresh & Packaged',
    slug: 'groceries'
  },
  {
    id: 8,
    name: 'Automotive',
    icon: '🚗',
    color: 'bg-red-100 text-red-600',
    description: 'Parts & Accessories',
    slug: 'automotive'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link to={`/category/${category.slug}`} key={category.id}>
              <Card 
                className="hover:shadow-lg transition-all duration-300 hover-scale cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
