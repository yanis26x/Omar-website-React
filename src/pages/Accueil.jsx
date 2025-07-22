//version1
//LE CSS de acceil.css A UTILISER ! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProduitCard from "../components/ProduitCard";
import "./accueil.css";

const baseURL = import.meta.env.BASE_URL;

const produits = [
  {
    id: 1,
    titre: "Musc Oud",
    prix: 19.99,
    image: `${baseURL}assets/musc-oud.jpg`,
    paymentURL: "https://buy.stripe.com/00gbJxchHgIXeLC8wz",
  },
  {
    id: 2,
    titre: "Musc Blanc",
    prix: 19.99,
    image: `${baseURL}assets/musc-blanc.jpg`,
    paymentURL: "https://buy.stripe.com/fZe4h53Lb8cr46Y28c",
  },
  {
    id: 3,
    titre: "Bakhour Oud - Cône",
    prix: 14.99,
    image: `${baseURL}assets/bakhour-cone.jpg`,
    paymentURL: "https://buy.stripe.com/28o9Bp0yZboD32U144",
  },
  {
    id: 4,
    titre: "Bakhour Oud Blanc",
    prix: 19.99,
    image: `${baseURL}assets/bakhour-blanc.jpg`,
    paymentURL: "https://buy.stripe.com/5kA00P3Lb2S76f63cd",
  },
  {
    id: 5,
    titre: "Bakhour Oud Standard",
    prix: 17.99,
    image: `${baseURL}assets/bakhour-standard.jpg`,
    paymentURL: "https://buy.stripe.com/aEU14T81r8crgTK6oq",
  },
];

// const produits = [
//   {
//     id: 1,
//     titre: "Musc Oud",
//     prix: 19.99,
//     image: "/assets/musc-oud.jpg",
//     paymentURL: "https://buy.stripe.com/00gbJxchHgIXeLC8wz",
//   },
//   {
//     id: 2,
//     titre: "Musc Blanc",
//     prix: 19.99,
//     image: "/assets/musc-blanc.jpg",
//     paymentURL: "https://buy.stripe.com/fZe4h53Lb8cr46Y28c",
//   },
//   {
//     id: 3,
//     titre: "Bakhour Oud - Cône",
//     prix: 14.99,
//     image: "/assets/bakhour-cone.jpg",
//     paymentURL: "https://buy.stripe.com/28o9Bp0yZboD32U144",
//   },
//   {
//     id: 4,
//     titre: "Bakhour Oud Blanc",
//     prix: 19.99,
//     image: "/assets/bakhour-blanc.jpg",
//     paymentURL: "https://buy.stripe.com/5kA00P3Lb2S76f63cd",
//   },
//   {
//     id: 5,
//     titre: "Bakhour Oud Standard",
//     prix: 17.99,
//     image: "/assets/bakhour-standard.jpg",
//     paymentURL: "https://buy.stripe.com/aEU14T81r8crgTK6oq",
//   },
// ];




export default function Accueil() {
  const scrollToProduits = () => {
    const section = document.getElementById("produits");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* BANNIÈRE */}
      <section className="banniere">
        <img
          src={`${import.meta.env.BASE_URL}assets/IAimage2.png`} 
          alt="Bannière de RIAD teste1"
          className="background-image-fallback"
        />

        <div className="banner-content">
          {/* <h1>Bienvenue chez RIAD</h1> */}
          <h1>RIAD, DERB AL OUD, Votre point de vente de musc et bakhour au Canada</h1> {/* A ADAPTER !! */}
          
          <button onClick={scrollToProduits} className="bouton">
            découvrir nos exclusivités
          </button>
        </div>
      </section>

      {/* PRODUITS */}
      <section id="produits">
        <h2>Nos Produits</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {produits.map((produit) => (
            <ProduitCard key={produit.id} produit={produit} />
          ))}
        </div>
      </section>
    </div>
  );
}

//v2
// LE CSS de acceil2.css A UTILISER ! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import { Link } from "react-router-dom";
// import ProduitCard from "../components/ProduitCard";
// import './accueil.css';

// const produits = [
//   { id: 1, titre: "Musc Oud", prix: 19.99, image: "/assets/musc-oud.jpg", paymentURL: "https://buy.stripe.com/00gbJxchHgIXeLC8wz" },
//   { id: 2, titre: "Musc Blanc", prix: 19.99, image: "/assets/musc-blanc.jpg", paymentURL: "https://buy.stripe.com/fZe4h53Lb8cr46Y28c" },
//   { id: 3, titre: "Bakhour Oud - Cône", prix: 14.99, image: "/assets/bakhour-cone.jpg", paymentURL: "https://buy.stripe.com/28o9Bp0yZboD32U144" },
//   { id: 4, titre: "Bakhour Oud Blanc", prix: 19.99, image: "/assets/bakhour-blanc.jpg", paymentURL: "https://buy.stripe.com/5kA00P3Lb2S76f63cd" },
//   { id: 5, titre: "Bakhour Oud Standard", prix: 17.99, image: "/assets/bakhour-standard.jpg", paymentURL: "https://buy.stripe.com/aEU14T81r8crgTK6oq" },
// ];

// export default function Accueil() {
//   const scrollToProduits = () => {
//     const section = document.getElementById("produits");
//     section.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* BANNIÈRE */}
//       <section className="banniere">
//         <img src="/assets/IAimage2.png" alt="Bannière de RIAD" className="background-image" />
//         <div className="banner-content">
//           <h1>Bienvenue chez <span>RIAD</span></h1>
//           <p className="sous-titre">L'élégance authentique des traditions orientales 🌿</p>
//           <button onClick={scrollToProduits} className="bouton">Voir nos Produits</button>
//         </div>
//       </section>

//       {/* PRODUITS */}
//       <section id="produits" className="section-produits">
//         <h2>Nos Produits</h2>
//         <div className="grille-produits">
//           {produits.map(produit => (
//             <ProduitCard key={produit.id} produit={produit} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
