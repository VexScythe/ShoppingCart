type ProductToBuy = {
  id: number;
  name: string;
  localQuantity: number;
  localPrice: number;
};

type CardProps = {
  productToBuy: ProductToBuy;
  deleteProduct(id: number, quantity: number, price: number): void;
};

export function CartProductCard({ productToBuy, deleteProduct }: CardProps) {
  return (
    <div className="card w-[90%] bg-base-100 shadow-xl m-10">
      <div className="card-body">
        <h2 className="card-title">{productToBuy.name}</h2>
        <p>Quantity: {productToBuy.localQuantity}</p>
        <p>Price: {productToBuy.localPrice}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() =>
              deleteProduct(
                productToBuy.id,
                productToBuy.localQuantity,
                productToBuy.localPrice
              )
            }
            className="btn glass bg-slate-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
