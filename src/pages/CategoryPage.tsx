
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Product } from '@/data/products';
import { useProducts, useProductsByCategory, useSearchProducts } from '@/hooks/useProducts';
import { Loader2 } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('bestselling');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch data based on the route
  const { data: allProducts, isLoading: isLoadingAll } = useProducts();
  const { data: categoryProducts, isLoading: isLoadingCategory } = useProductsByCategory(
    category && category !== 'all' ? category : ''
  );
  const { data: searchResults, isLoading: isLoadingSearch } = useSearchProducts(searchQuery || '');

  // Determine which products to use
  const sourceProducts = searchQuery 
    ? searchResults 
    : category === 'all' 
    ? allProducts 
    : category 
    ? categoryProducts 
    : allProducts;

  const isLoading = searchQuery ? isLoadingSearch : category === 'all' ? isLoadingAll : isLoadingCategory;

  // Get unique brands from current products
  const availableBrands = React.useMemo(() => {
    if (!sourceProducts) return [];
    const brands = [...new Set(sourceProducts.map(product => product.brand))];
    return brands.sort();
  }, [sourceProducts]);

  // Apply filters
  const applyFilters = React.useCallback(() => {
    if (!sourceProducts) {
      setFilteredProducts([]);
      return;
    }

    let result = [...sourceProducts];

    // Filter by price
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      result = result.filter((product) => selectedBrands.includes(product.brand));
    }

    // Filter by rating
    if (selectedRating) {
      result = result.filter((product) => Math.floor(product.rating) >= selectedRating);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result = [...result].sort((a, b) => b.id - a.id);
        break;
      default:
        // bestselling - sort by reviews count as a proxy for popularity
        result = [...result].sort((a, b) => b.reviews - a.reviews);
    }
    
    setFilteredProducts(result);
  }, [sourceProducts, priceRange, selectedBrands, selectedRating, sortBy]);

  // Apply filters when dependencies change
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const clearFilters = () => {
    setPriceRange([0, 2000]);
    setSelectedBrands([]);
    setSelectedRating(null);
    setSortBy('bestselling');
  };

  const pageTitle = searchQuery
    ? `Search Results for "${searchQuery}"`
    : category === 'all'
    ? 'All Products'
    : category;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
                  <div className="px-2">
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={2000}
                      step={10}
                      value={priceRange}
                      onValueChange={(values) => setPriceRange(values as [number, number])}
                    />
                    <div className="flex justify-between mt-2 text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Brands */}
                {availableBrands.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Brands</h4>
                    <div className="space-y-2">
                      {availableBrands.map((brand) => (
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
                )}

                {/* Rating */}
                <div>
                  <h4 className="font-semibold mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`rating-${rating}`}
                          checked={selectedRating === rating}
                          onCheckedChange={(checked) => {
                            setSelectedRating(checked ? rating : null);
                          }}
                        />
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

                <Button variant="outline" className="w-full" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold capitalize">{pageTitle}</h1>
                <p className="text-muted-foreground">{filteredProducts.length} products found</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm">Sort by:</span>
                <select 
                  className="border rounded px-3 py-2 text-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="bestselling">Best Selling</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-semibold mb-4">No products found</h2>
                <p className="text-muted-foreground mb-8">
                  Try changing your filters or search criteria
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
