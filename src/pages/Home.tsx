import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useTheme } from '../context/ThemeContext';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className={`pt-20 px-2 md:px-10 ${theme === 'theme2' ? 'md:ml-56' : ''} transition-all duration-700`}>
      <h1 className="text-3xl mb-4 font-bold">Welcome to Multi-Theme App</h1>
      <p className="mb-4">Switch the theme for a whole new layout, color scheme, and mood!</p>
      <button className="transition-all px-4 py-2 mb-6 rounded-lg shadow bg-blue-500 text-white hover:bg-blue-700">
        Action Button
      </button>
      {loading ? (
        <div>Loading products...</div>
      ) : (
        theme === 'theme3' ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div>
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )
      )}
    </main>
  );
};
export default Home;
