import { Link } from "react-router-dom";

export default function ProduitCard({ produit }) {
  return (
    <div className="produit-card">
      <img src={produit.image} alt={produit.titre} style={styles.image} />
      <h3>{produit.titre}</h3>
      <p>{produit.prix.toFixed(2)} $</p>
      <Link to={`/produit/${produit.id}`} style={styles.bouton}>
        Voir Produit
      </Link>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "1rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  bouton: {
    marginTop: "1rem",
    display: "inline-block",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#006400",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background-color 0.3s",
  },
};