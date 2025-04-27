import { FaShoppingCart, FaHome, FaPhone, FaInfoCircle } from 'react-icons/fa'; // Imports des icônes
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">RIAD</Link>
      </div>
      <div className="navbar-links">
        <Link to="/"><FaHome /> Accueil</Link>
        <Link to="/panier"><FaShoppingCart /> Panier</Link>
        <Link to="/contact"><FaPhone /> Contact</Link>
        <Link to="/apropos"><FaInfoCircle /> À propos</Link>
      </div>
    </nav>
  );
}