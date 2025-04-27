import { useParams } from "react-router-dom";
import { usePanier } from "../context/PanierContext";

const produits = [
  { id: 1, titre: "Musc Oud", prix: 19.99, description: "Un musc aux notes boisées et précieuses.", image: "/assets/musc-oud.jpg" },
  { id: 2, titre: "Musc Blanc", prix: 19.99, description: "Un musc frais, pur et élégant.", image: "/assets/musc-blanc.jpg" },
  { id: 3, titre: "Bakhour Oud - Cône", prix: 14.99, description: "Bakhour de qualité, parfait pour embaumer votre intérieur.", image: "/assets/bakhour-cone.jpg" },
  { id: 4, titre: "Bakhour Oud Blanc", prix: 19.99, description: "Un bakhour délicat et raffiné.", image: "/assets/bakhour-blanc.jpg" },
  { id: 5, titre: "Bakhour Oud Standard", prix: 17.99, description: "Le classique bakhour à l'oud, incontournable.", image: "/assets/bakhour-standard.jpg" },
];

export default function ProduitDetail() {
  const { id } = useParams();
  const { ajouterProduit } = usePanier();
  const produit = produits.find(p => p.id === parseInt(id));

  if (!produit) return <p>Produit introuvable.</p>;

  return (
    <div style={styles.container}>
      <img src={produit.image} alt={produit.titre} style={styles.image} />
      <h2>{produit.titre}</h2>
      <p style={styles.prix}>{produit.prix.toFixed(2)} $</p>
      <p style={styles.description}>{produit.description}</p>
      <button onClick={() => ajouterProduit(produit)} style={styles.bouton}>Ajouter au Panier</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "4rem 2rem",
    textAlign: "center",
  },
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "2rem",
  },
  prix: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "1rem 0",
  },
  description: {
    marginBottom: "2rem",
    fontSize: "1.2rem",
  },
  bouton: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#006400",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
};