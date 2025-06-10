
import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">MarketPlace</h3>
            </div>
            <p className="text-gray-400">
              Your one-stop destination for all your shopping needs. Quality products, competitive prices, and excellent service.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-sm font-bold">
                f
              </div>
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-sm font-bold">
                t
              </div>
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-sm font-bold">
                i
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell on MarketPlace</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Download Our App</h4>
            <p className="text-gray-400">Get the best shopping experience on mobile</p>
            <div className="space-y-2">
              <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-700 transition-colors">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">📱</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-700 transition-colors">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-sm">📱</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MarketPlace. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">🔒 Secure Shopping</span>
              <span className="text-gray-400 text-sm">📦 Free Shipping</span>
              <span className="text-gray-400 text-sm">↩️ Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
