
import React, { useState } from 'react';
import { Search, ShoppingCart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <span>FREE SHIPPING on orders over $50</span>
              <span>|</span>
              <span>Download App</span>
            </div>
            <div className="flex space-x-4">
              <span>Help</span>
              <span>|</span>
              <button className="hover:underline">Login</button>
              <span>|</span>
              <button className="hover:underline">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">MarketPlace</h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border-2 border-muted focus:border-primary"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 bottom-1 px-3"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side - Cart and User */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-muted border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            <button className="text-sm font-medium hover:text-primary transition-colors">
              All Categories
            </button>
            <button className="text-sm hover:text-primary transition-colors">
              Electronics
            </button>
            <button className="text-sm hover:text-primary transition-colors">
              Fashion
            </button>
            <button className="text-sm hover:text-primary transition-colors">
              Home & Living
            </button>
            <button className="text-sm hover:text-primary transition-colors">
              Sports
            </button>
            <button className="text-sm hover:text-primary transition-colors">
              Beauty
            </button>
            <button className="text-sm hover:text-primary transition-colors">
              Books
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
