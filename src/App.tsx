import { useState, useEffect } from 'react';
import { ProductCard } from './components/ProductCard';

export function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  console.log(product);

  return (
    <>
      {product.map((p, index) => (
        <div key={index}>
          <h1>{p.title}</h1>
          <img src={p.image} className="w-20" />
        </div>
      ))}
      <div className="grid grid-cols-2 gap-4">
        {product.map((p, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </>
  );
}
