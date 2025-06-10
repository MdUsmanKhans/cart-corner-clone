
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  discount?: number;
  category: string;
  brand: string;
  description: string;
  features: string[];
  inStock: boolean;
  stockCount: number;
  tags: string[];
  specifications: { [key: string]: string };
}

export const categories = [
  'Electronics',
  'Fashion',
  'Home & Living',
  'Sports',
  'Beauty',
  'Books',
  'Groceries',
  'Automotive'
];

export const brands = ['Apple', 'Samsung', 'Sony', 'Canon', 'Dell', 'HP', 'Nike', 'Adidas'];

export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max 256GB - Natural Titanium',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
    ],
    rating: 4.8,
    reviews: 1245,
    discount: 8,
    category: 'Electronics',
    brand: 'Apple',
    description: 'The iPhone 15 Pro Max features a titanium design, advanced camera system, and powerful A17 Pro chip. Experience next-level performance and photography.',
    features: [
      'A17 Pro chip for incredible performance',
      'Pro camera system with 5x Telephoto',
      'Titanium design - strong yet lightweight',
      'All-day battery life',
      'USB-C connectivity'
    ],
    inStock: true,
    stockCount: 15,
    tags: ['smartphone', 'premium', 'camera', 'titanium'],
    specifications: {
      'Display': '6.7-inch Super Retina XDR',
      'Storage': '256GB',
      'Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
      'Battery': 'Up to 29 hours video playback',
      'OS': 'iOS 17'
    }
  },
  {
    id: 2,
    name: 'MacBook Pro 14" M3 Chip with 8-Core CPU',
    price: 1599,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop',
    ],
    rating: 4.9,
    reviews: 892,
    discount: 11,
    category: 'Electronics',
    brand: 'Apple',
    description: 'Supercharged by M3 chip, the 14-inch MacBook Pro delivers exceptional performance and battery life.',
    features: [
      'M3 chip with 8-core CPU',
      '14-inch Liquid Retina XDR display',
      'Up to 22 hours battery life',
      '16GB unified memory',
      'Three Thunderbolt 4 ports'
    ],
    inStock: true,
    stockCount: 8,
    tags: ['laptop', 'professional', 'M3', 'premium'],
    specifications: {
      'Processor': 'Apple M3 chip',
      'Memory': '16GB unified memory',
      'Storage': '512GB SSD',
      'Display': '14.2-inch Liquid Retina XDR',
      'Graphics': '10-core GPU'
    }
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
    ],
    rating: 4.7,
    reviews: 2156,
    discount: 25,
    category: 'Electronics',
    brand: 'Sony',
    description: 'Industry-leading noise canceling with Dual Noise Sensor technology.',
    features: [
      'Industry-leading noise canceling',
      '30-hour battery life',
      'Quick Charge (3 min = 3 hours)',
      'Premium comfort and sound',
      'Multipoint connection'
    ],
    inStock: true,
    stockCount: 25,
    tags: ['headphones', 'wireless', 'noise-canceling', 'premium'],
    specifications: {
      'Driver': '30mm',
      'Battery Life': 'Up to 30 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Weight': '250g',
      'Charging': 'USB-C'
    }
  },
  {
    id: 4,
    name: 'Samsung 55" QLED 4K Smart TV',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=600&fit=crop',
    ],
    rating: 4.6,
    reviews: 687,
    discount: 20,
    category: 'Electronics',
    brand: 'Samsung',
    description: 'Quantum Dot technology delivers vibrant colors and exceptional picture quality.',
    features: [
      'Quantum Dot Technology',
      '4K UHD Resolution',
      'Smart TV with Tizen OS',
      'Multiple HDR formats',
      'Gaming Mode'
    ],
    inStock: true,
    stockCount: 12,
    tags: ['TV', '4K', 'smart', 'QLED'],
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K UHD (3840 x 2160)',
      'HDR': 'HDR10+',
      'Smart Platform': 'Tizen',
      'Refresh Rate': '60Hz'
    }
  },
  {
    id: 5,
    name: 'Nike Air Max 270 Running Shoes',
    price: 129,
    originalPrice: 160,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop',
    ],
    rating: 4.5,
    reviews: 934,
    discount: 19,
    category: 'Sports',
    brand: 'Nike',
    description: 'Nike\'s biggest heel Air unit yet delivers exceptional cushioning.',
    features: [
      'Max Air heel unit',
      'Engineered mesh upper',
      'Foam midsole',
      'Rubber outsole',
      'Pull tabs'
    ],
    inStock: true,
    stockCount: 30,
    tags: ['shoes', 'running', 'athletic', 'air-max'],
    specifications: {
      'Material': 'Engineered mesh and synthetic',
      'Sole': 'Rubber',
      'Closure': 'Lace-up',
      'Heel Height': '32mm',
      'Weight': '325g'
    }
  },
  {
    id: 6,
    name: 'Canon EOS R6 Mark II Mirrorless Camera',
    price: 2099,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop',
    ],
    rating: 4.9,
    reviews: 456,
    category: 'Electronics',
    brand: 'Canon',
    description: 'Professional mirrorless camera with full-frame sensor and advanced autofocus.',
    features: [
      '24.2MP full-frame CMOS sensor',
      'DIGIC X processor',
      '40fps burst shooting',
      '6K oversampled 4K video',
      'In-body image stabilization'
    ],
    inStock: true,
    stockCount: 5,
    tags: ['camera', 'mirrorless', 'professional', 'full-frame'],
    specifications: {
      'Sensor': '24.2MP Full-Frame CMOS',
      'Processor': 'DIGIC X',
      'ISO Range': '100-102400',
      'Video': '4K UHD up to 60fps',
      'Battery Life': '760 shots'
    }
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getFlashSaleProducts = (): Product[] => {
  return products.filter(product => product.discount && product.discount > 15);
};

export const getTrendingProducts = (): Product[] => {
  return products.filter(product => product.reviews > 500).slice(0, 4);
};

export const getNewArrivals = (): Product[] => {
  return products.slice(-4);
};
