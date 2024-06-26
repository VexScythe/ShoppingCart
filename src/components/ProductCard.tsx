import React, { useState } from 'react';
import { useCart } from '../stores/CartContext';
import { Link } from 'react-router-dom';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type CardProps = {
  product: Product;
};

export function ProductCard({ product }: CardProps) {
  const { cartData, setCartData } = useCart();
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    const updatedQuantity = cartData.totalQuantity + quantity;
    const updatedPrice = cartData.totalPrice + cardTotalPrice;
    const updatedProduct = {
      id: cartData.productDetail.length,
      name: product.title,
      localQuantity: quantity,
      localPrice: cardTotalPrice,
    };

    setCartData({
      productDetail: [...cartData.productDetail, updatedProduct],
      totalQuantity: updatedQuantity,
      totalPrice: updatedPrice,
    });
    console.log(cartData);
  };

  const cardTotalPrice = product.price * quantity;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Link to={`/Shop/${product.id}`} state={{ product: product }}>
          <img
            src={product.image}
            alt={product.title}
            className="w-[120px] h-[120px]"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: {cardTotalPrice}$</p>
        <div className="flex">
          <div className="flex-1">
            <button
              onClick={decreaseQuantity}
              className="btn btn-circle btn-sm btn-ghost"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="input input-bordered w-16 text-center mx-2"
            />
            <button
              onClick={increaseQuantity}
              className="btn btn-circle btn-sm btn-ghost"
            >
              +
            </button>
          </div>
          <div className="card-actions justify-end">
            <button onClick={addToCart} className="btn glass bg-slate-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
