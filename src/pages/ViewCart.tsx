import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCart } from '../stores/CartContext';
import { CartProductCard } from '../components/CartProductCard';

export function ViewCart() {
  const { cartData, setCartData } = useCart();

  function deleteProductToBuy(id: number, quantity: number, price: number) {
    const newProductToBuy = cartData.productDetail.filter(
      (product) => product.id !== id
    );
    setCartData({
      productDetail: newProductToBuy,
      totalQuantity: cartData.totalQuantity - quantity,
      totalPrice: cartData.totalPrice - price,
    });
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen p-10">
        {cartData.productDetail.map((productToBuy) => (
          <CartProductCard
            key={crypto.randomUUID()}
            productToBuy={productToBuy}
            deleteProduct={deleteProductToBuy}
          />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}
