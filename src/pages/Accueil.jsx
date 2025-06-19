import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProduitCard from "../components/ProduitCard";
import './accueil.css';

const produits = [
  { id: 1, titre: "Musc Oud", prix: 19.99, image: "/assets/musc-oud.jpg" },
  { id: 2, titre: "Musc Blanc", prix: 19.99, image: "/assets/musc-blanc.jpg" },
  { id: 3, titre: "Bakhour Oud - Cône", prix: 14.99, image: "/assets/bakhour-cone.jpg" },
  { id: 4, titre: "Bakhour Oud Blanc", prix: 19.99, image: "/assets/bakhour-blanc.jpg" },
  { id: 5, titre: "Bakhour Oud Standard", prix: 17.99, image: "/assets/bakhour-standard.jpg" },
];

export default function Accueil() {
  const scrollToProduits = () => {
    const section = document.getElementById("produits");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* BANNIÈRE */}
      <section className="banniere">
    <img src="/assets/IAimage2.png" alt="Bannière de RIAD" className="background-image-fallback" />
  <div className="banner-content">
    <h1>Bienvenue chez RIAD</h1>
    <button onClick={scrollToProduits} className="bouton">Voir Produits</button>
  </div>
</section>



      {/* PRODUITS */}
      <section id="produits">
        <h2>Nos Produits</h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "2rem",
          marginTop: "2rem",
        }}>
          {produits.map(produit => (
            <ProduitCard key={produit.id} produit={produit} />
          ))}
        </div>
      </section>


    </div>
  );
}