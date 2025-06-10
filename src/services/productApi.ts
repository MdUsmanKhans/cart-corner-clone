
import { Product } from '@/data/products';

const BASE_URL = 'https://fakestoreapi.com';

// API response types
interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Transform API product to our Product interface
const transformProduct = (apiProduct: FakeStoreProduct): Product => ({
  id: apiProduct.id,
  name: apiProduct.title,
  price: apiProduct.price,
  originalPrice: apiProduct.price * 1.2, // Add 20% as original price for discount effect
  image: apiProduct.image,
  images: [apiProduct.image, apiProduct.image, apiProduct.image], // Duplicate for gallery
  rating: apiProduct.rating.rate,
  reviews: apiProduct.rating.count,
  discount: Math.floor(Math.random() * 30) + 10, // Random discount 10-40%
  category: apiProduct.category.charAt(0).toUpperCase() + apiProduct.category.slice(1),
  brand: getBrandFromCategory(apiProduct.category),
  description: apiProduct.description,
  features: generateFeatures(apiProduct.title, apiProduct.category),
  inStock: true,
  stockCount: Math.floor(Math.random() * 50) + 5, // Random stock 5-55
  tags: generateTags(apiProduct.title, apiProduct.category),
  specifications: generateSpecifications(apiProduct.category)
});

const getBrandFromCategory = (category: string): string => {
  const brandMap: { [key: string]: string[] } = {
    'electronics': ['Apple', 'Samsung', 'Sony', 'Dell'],
    'jewelery': ['Tiffany', 'Cartier', 'Pandora', 'Swarovski'],
    "men's clothing": ['Nike', 'Adidas', 'Levi\'s', 'Tommy Hilfiger'],
    "women's clothing": ['Zara', 'H&M', 'Forever 21', 'Uniqlo']
  };
  
  const brands = brandMap[category] || ['Generic'];
  return brands[Math.floor(Math.random() * brands.length)];
};

const generateFeatures = (title: string, category: string): string[] => {
  const features: { [key: string]: string[] } = {
    'electronics': [
      'High-quality materials',
      'Latest technology',
      'Energy efficient',
      'Warranty included',
      'User-friendly design'
    ],
    'jewelery': [
      'Premium materials',
      'Elegant design',
      'Hypoallergenic',
      'Gift packaging included',
      'Lifetime warranty'
    ],
    "men's clothing": [
      'Comfortable fit',
      'Durable fabric',
      'Machine washable',
      'Wrinkle resistant',
      'Multiple sizes available'
    ],
    "women's clothing": [
      'Trendy design',
      'Soft fabric',
      'Easy care',
      'Versatile styling',
      'Size inclusive'
    ]
  };
  
  return features[category] || ['High quality', 'Great value', 'Customer favorite'];
};

const generateTags = (title: string, category: string): string[] => {
  const words = title.toLowerCase().split(' ');
  return [...words.slice(0, 3), category, 'popular'];
};

const generateSpecifications = (category: string): { [key: string]: string } => {
  const specs: { [key: string]: { [key: string]: string } } = {
    'electronics': {
      'Material': 'Premium materials',
      'Warranty': '1 year',
      'Origin': 'Manufactured globally',
      'Compatibility': 'Universal'
    },
    'jewelery': {
      'Material': 'Premium metals',
      'Care': 'Easy maintenance',
      'Style': 'Contemporary',
      'Occasion': 'Versatile'
    },
    "men's clothing": {
      'Material': '100% Cotton blend',
      'Fit': 'Regular',
      'Care': 'Machine wash',
      'Style': 'Casual'
    },
    "women's clothing": {
      'Material': 'Premium fabric',
      'Fit': 'True to size',
      'Care': 'Easy care',
      'Style': 'Fashion forward'
    }
  };
  
  return specs[category] || { 'Quality': 'Premium', 'Value': 'Excellent' };
};

// API functions
export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const products: FakeStoreProduct[] = await response.json();
  return products.map(transformProduct);
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  const categoryMap: { [key: string]: string } = {
    'electronics': 'electronics',
    'fashion': "women's clothing",
    'mens-fashion': "men's clothing",
    'jewelry': 'jewelery',
    'jewelery': 'jewelery'
  };
  
  const apiCategory = categoryMap[category.toLowerCase()] || category.toLowerCase();
  
  const response = await fetch(`${BASE_URL}/products/category/${apiCategory}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products for category: ${category}`);
  }
  const products: FakeStoreProduct[] = await response.json();
  return products.map(transformProduct);
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id: ${id}`);
  }
  const product: FakeStoreProduct = await response.json();
  return transformProduct(product);
};

export const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}/products/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  const categories: string[] = await response.json();
  return categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1));
};

export const searchProductsByTitle = async (query: string): Promise<Product[]> => {
  const allProducts = await fetchAllProducts();
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
};
