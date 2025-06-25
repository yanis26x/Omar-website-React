export default function Apropos() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.titre}>À propos de <span style={styles.brand}>RIAD</span></h2>
        <p style={styles.paragraphe}>
          Bienvenue chez <strong>RIAD</strong>.  
          Nous sommes dédiés à offrir des produits authentiques inspirés par la richesse et la beauté de la culture islamique.  
          Chacun de nos articles est soigneusement sélectionné pour sa qualité, son raffinement et son respect des traditions.
        </p>
        <p style={styles.paragraphe}>
          Chez <strong>RIAD</strong>, nous croyons en l'élégance naturelle, en la spiritualité et en la transmission d'un art de vivre unique.  
          Merci de faire partie de cette aventure avec nous. <span style={styles.emoji}>🌿</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "4rem 2rem",
    backgroundColor: "#fdfaf6",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "3rem",
    maxWidth: "800px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  titre: {
    fontSize: "2.2rem",
    marginBottom: "1.5rem",
    fontWeight: "600",
    color: "#2e2e2e",
  },
  brand: {
    color: "#006400",
    fontWeight: "700",
  },
  paragraphe: {
    fontSize: "1.2rem",
    lineHeight: "1.9",
    color: "#444",
    marginBottom: "1.8rem",
  },
  emoji: {
    fontSize: "1.4rem",
  },
};
