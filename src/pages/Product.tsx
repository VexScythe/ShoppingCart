import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useLocation, Link } from 'react-router-dom';

export function Product() {
  const location = useLocation();
  const { state } = location;
  const product = state && state.product ? state.product : {};

  return (
    <>
      <Navbar></Navbar>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <h2>{product.description}</h2>
      <Link to={'/Shop'}>
        <button className="btn glass bg-slate-500">Go Back</button>
      </Link>
      <Footer></Footer>
    </>
  );
}
