import { usePanier } from "../context/PanierContext";

export default function Panier() {
  const { panier, retirerProduit, viderPanier } = usePanier();
  const total = panier.reduce((acc, produit) => acc + produit.prix, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.titre}>Votre Panier</h2>
      <p style={styles.confiance}>
        ✅ À chaque achat, vous recevrez un email de confirmation avec tous les détails de votre commande. 
        Achetez en toute confiance !
      </p>

      {panier.length === 0 ? (
        <p style={styles.vide}>Votre panier est vide.</p>
      ) : (
        <>
          <ul style={styles.liste}>
            {panier.map((produit, index) => (
              <li key={index} style={styles.item}>
                <img src={produit.image} alt={produit.titre} style={styles.image} />
                <div style={styles.info}>
                  <h3>{produit.titre}</h3>
                  <p style={styles.prix}>{produit.prix.toFixed(2)} $</p>
                  <div style={styles.boutons}>
                    <a href={produit.paymentURL} target="_blank" rel="noopener noreferrer">
                      <button style={styles.boutonPayer}>Payer maintenant</button>
                    </a>
                    <button onClick={() => retirerProduit(produit.id)} style={styles.boutonRetirer}>
                      Retirer
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <h3 style={styles.total}>Total : {total.toFixed(2)} $</h3>
          <button onClick={viderPanier} style={styles.boutonVider}>Vider le Panier</button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "3rem 2rem",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  titre: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  confiance: {
    fontSize: "1rem",
    backgroundColor: "#e0ffe0",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "2rem",
    maxWidth: "600px",
    margin: "0 auto 2rem",
    color: "#2e7d32",
    border: "1px solid #b2ffb2",
  },
  vide: {
    fontSize: "1.2rem",
    color: "#555",
  },
  liste: {
    listStyle: "none",
    padding: 0,
    marginBottom: "2rem",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    gap: "1.5rem",
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  info: {
    textAlign: "left",
  },
  prix: {
    fontWeight: "bold",
    margin: "0.5rem 0",
  },
  boutons: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.5rem",
  },
  boutonPayer: {
    padding: "0.5rem 1rem",
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  boutonRetirer: {
    padding: "0.5rem 1rem",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  total: {
    fontSize: "1.5rem",
    marginTop: "2rem",
    fontWeight: "bold",
  },
  boutonVider: {
    marginTop: "1rem",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#8b0000",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
