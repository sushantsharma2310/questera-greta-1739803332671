import { Link } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-amber-800 text-amber-50 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
          <FaCoffee className="text-2xl" />
          <span>Cozy Corner Café</span>
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-amber-200 transition-colors">Home</Link>
          <Link to="/menu" className="hover:text-amber-200 transition-colors">Menu</Link>
          <Link to="/about" className="hover:text-amber-200 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-amber-200 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;