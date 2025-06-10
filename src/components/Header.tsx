
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { wishlist } = useWishlist();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/category/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { href: '/category/all', label: 'All Categories' },
    { href: '/category/electronics', label: 'Electronics' },
    { href: '/category/fashion', label: 'Fashion' },
    { href: '/category/home-living', label: 'Home & Living' },
    { href: '/category/sports', label: 'Sports' },
    { href: '/category/beauty', label: 'Beauty' },
    { href: '/category/books', label: 'Books' },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar - Hidden on mobile */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
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
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  {/* Mobile search */}
                  <form onSubmit={handleSearch} className="relative">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-4 pr-12 py-2"
                    />
                    <Button 
                      type="submit"
                      size="sm" 
                      className="absolute right-1 top-1 bottom-1 px-3"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>

                  {/* Mobile navigation */}
                  <nav className="flex flex-col space-y-2">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="text-lg font-medium py-2 px-4 hover:bg-muted rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile top bar links */}
                  <div className="border-t pt-4 flex flex-col space-y-2">
                    <button className="text-left py-2 px-4 hover:bg-muted rounded-md">Help</button>
                    <button className="text-left py-2 px-4 hover:bg-muted rounded-md">Login</button>
                    <button className="text-left py-2 px-4 hover:bg-muted rounded-md">Sign Up</button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            <h1 className="text-lg md:text-2xl font-bold text-primary">MarketPlace</h1>
          </Link>

          {/* Desktop search bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
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

          {/* Mobile search button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5 md:h-6 md:w-6" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] md:text-xs">
                    {wishlist.length}
                  </span>
                )}
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-[10px] md:text-xs">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="bg-muted border-t hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
