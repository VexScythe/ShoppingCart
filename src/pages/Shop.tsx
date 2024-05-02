import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import { CartProvider } from '../stores/CartContext';

export function Shop() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shop</h1>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
