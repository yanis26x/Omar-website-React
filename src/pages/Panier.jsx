import { usePanier } from "../context/PanierContext";

export default function Panier() {
  const { panier, retirerProduit, viderPanier } = usePanier();

  const total = panier.reduce((acc, produit) => acc + produit.prix, 0);

  return (
    <div style={styles.container}>
      <h2>Votre Panier</h2>
      {panier.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul style={styles.liste}>
            {panier.map((produit, index) => (
              <li key={index} style={styles.item}>
                <img src={produit.image} alt={produit.titre} style={styles.image} />
                <div>
                  <h3>{produit.titre}</h3>
                  <p>{produit.prix.toFixed(2)} $</p>
                  <button onClick={() => retirerProduit(produit.id)} style={styles.boutonRetirer}>Retirer</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total : {total.toFixed(2)} $</h3>
          <button onClick={viderPanier} style={styles.boutonVider}>Vider le Panier</button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  liste: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    gap: "1rem",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  boutonRetirer: {
    marginTop: "0.5rem",
    padding: "0.4rem 0.8rem",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  boutonVider: {
    marginTop: "2rem",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#8b0000",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};