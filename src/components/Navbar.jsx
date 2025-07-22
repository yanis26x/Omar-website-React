import { FaShoppingCart, FaHome, FaPhone, FaInfoCircle } from 'react-icons/fa'; // Imports des icônes
import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
  <img src="public/assets/logoo.jpg" alt="RIAD" className="logo-image" />
</Link>
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