import { useCart } from '../stores/CartContext';
import { Link } from 'react-router-dom';

export function Navbar() {
  const cart = useCart();

  return (
    <div className="navbar bg-base-100 bg-slate-200">
      <div className="flex-none basis-10">
        <p className="btn btn-ghost text-xl hover:bg-slate-200 cursor-default">
          JewelStore.com
        </p>
      </div>
      <div className="flex-1 justify-center">
        <Link tabIndex={0} className="btn btn-ghost text-xl" to="/">
          Home
        </Link>
        <Link tabIndex={0} className="btn btn-ghost text-xl" to="/About">
          About
        </Link>
        <Link tabIndex={0} className="btn btn-ghost text-xl" to="/Shop">
          Shop
        </Link>
      </div>
      <div className="flex-none w-[200px] justify-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {cart.cartData.totalQuantity}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">
                {cart.cartData.totalQuantity} Items
              </span>
              <span className="text-info">
                Subtotal: ${cart.cartData.totalPrice}
              </span>
              <div className="card-actions">
                <Link to="/ViewCart">
                  <button className="btn btn-primary btn-block bg-slate-800 hover:bg-slate-200 hover:text-primary">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
