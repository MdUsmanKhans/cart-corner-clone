
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const CategoryPage = () => {
  const { category } = useParams();
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Mock products for the category
  const products = [
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
      name: 'iPad Air 11" M2 Chip',
      price: 599,
      originalPrice: 699,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop',
      rating: 4.5,
      reviews: 934,
      discount: 14
    },
    {
      id: 6,
      name: 'Canon EOS R6 Mark II Mirrorless Camera',
      price: 2099,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
      rating: 4.9,
      reviews: 456,
    }
  ];

  const brands = ['Apple', 'Samsung', 'Sony', 'Canon', 'Dell', 'HP'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Range */}
                <div>
                  <h4 className="font-semibold mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="under100" />
                      <label htmlFor="under100" className="text-sm">Under $100</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="100-500" />
                      <label htmlFor="100-500" className="text-sm">$100 - $500</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="500-1000" />
                      <label htmlFor="500-1000" className="text-sm">$500 - $1000</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="over1000" />
                      <label htmlFor="over1000" className="text-sm">Over $1000</label>
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h4 className="font-semibold mb-3">Brands</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox 
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedBrands([...selectedBrands, brand]);
                            } else {
                              setSelectedBrands(selectedBrands.filter(b => b !== brand));
                            }
                          }}
                        />
                        <label htmlFor={brand} className="text-sm">{brand}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <h4 className="font-semibold mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                          <span className="text-yellow-400 mr-1">
                            {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
                          </span>
                          & up
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold capitalize">{category || 'All Products'}</h1>
                <p className="text-muted-foreground">{products.length} products found</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm">Sort by:</span>
                <select className="border rounded px-3 py-2 text-sm">
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
