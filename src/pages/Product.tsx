import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useLocation, Link } from 'react-router-dom';

export function Product() {
  const location = useLocation();
  const { state } = location;
  const product = state && state.product ? state.product : {};

  return (
    <>
      {/* <Navbar></Navbar>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <h2>{product.description}</h2>
      <Link to={'/Shop'}>
        <button className="btn glass bg-slate-500">Go Back</button>
      </Link>
      <Footer></Footer> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Navbar />
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">
            {product.title}
          </h1>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg mb-4"
          />
          <p className="text-lg mb-4 text-center">{product.description}</p>
          <Link to={'/Shop'} className="block w-full max-w-xs mx-auto">
            <button className="btn glass bg-slate-500 w-full py-2 px-4">
              Go Back
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}
