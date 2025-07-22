export default function Apropos() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.titre}>
          Bienvenue chez <span style={styles.brand}>RIAD Derb al Oud</span>
        </h2>
        <p style={styles.slogan}>L’âme de l’Orient, à portée de vos sens.</p>
        <p style={styles.paragraphe}>
          Chez <strong>RIAD</strong>, chaque fragrance est importée directement d’Arabie Saoudite, berceau du parfum oriental.
          Nous sommes les seuls au Canada à collaborer avec un fournisseur saoudien d’exception, reconnu pour son savoir-faire artisanal et la qualité rare de ses créations.
        </p>
        <p style={styles.paragraphe}>
          Encens nobles, muscs délicats, bakhour authentique — chaque produit que nous offrons est une immersion dans les traditions parfumées de l’Orient, réinterprétées avec élégance et modernité.
        </p>
        <p style={styles.paragraphe}>
          Merci de soutenir notre mission : faire vivre un art ancestral avec raffinement et élégance, sans excès de prix. <span style={styles.emoji}>🌿</span>
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
    marginBottom: "0.5rem",
    fontWeight: "600",
    color: "#2e2e2e",
  },
  brand: {
    color: "#006400",
    fontWeight: "700",
  },
  slogan: {
    fontSize: "1.3rem",
    fontStyle: "italic",
    color: "#555",
    marginBottom: "2rem",
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
