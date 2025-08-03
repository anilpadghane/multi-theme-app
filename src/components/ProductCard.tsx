import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { theme } = useTheme();

  if (theme === 'theme3') {
    return (
      <div className="bg-pink-200 rounded-lg shadow-lg p-4 flex flex-col items-center transition duration-300">
        <img src={product.image} className="w-24 h-24 object-contain mb-3" alt={product.title} />
        <h3 className="font-pacifico text-lg text-blue-700 mb-1">{product.title}</h3>
        <span className="font-bold text-green-700">${product.price}</span>
      </div>
    );
  }

  // List/card for theme1, theme2
  return (
    <div className="bg-white/80 dark:bg-gray-800 rounded p-4 shadow mb-4 flex gap-4 items-center">
      <img src={product.image} className="w-16 h-16 object-contain" alt={product.title} />
      <div>
        <h3 className="font-semibold">{product.title}</h3>
        <span className="text-gray-500">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
