
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, ShoppingBag, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { wishlist } = useWishlist();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/category/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

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
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">MarketPlace</h1>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 border-2 border-muted focus:border-primary"
              />
              <Button 
                type="submit"
                size="sm" 
                className="absolute right-1 top-1 bottom-1 px-3"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist">
              <Button variant="ghost" className="relative">
                <Heart className="h-6 w-6" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            <Button variant="ghost">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-muted border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            <Link to="/category/all" className="text-sm font-medium hover:text-primary transition-colors">
              All Categories
            </Link>
            <Link to="/category/electronics" className="text-sm hover:text-primary transition-colors">
              Electronics
            </Link>
            <Link to="/category/fashion" className="text-sm hover:text-primary transition-colors">
              Fashion
            </Link>
            <Link to="/category/home-living" className="text-sm hover:text-primary transition-colors">
              Home & Living
            </Link>
            <Link to="/category/sports" className="text-sm hover:text-primary transition-colors">
              Sports
            </Link>
            <Link to="/category/beauty" className="text-sm hover:text-primary transition-colors">
              Beauty
            </Link>
            <Link to="/category/books" className="text-sm hover:text-primary transition-colors">
              Books
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
