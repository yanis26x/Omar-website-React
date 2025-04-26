import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="site-title">Omar Website !</h1>
      <nav className="nav">
        <a href="#home" className="nav-link">Accueil</a>
        <a href="#products" className="nav-link">Produits</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}