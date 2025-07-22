const baseURL = import.meta.env.BASE_URL;

export default function Contact() {
  return (
    <div style={styles.container}>
      <h2 style={styles.titre}>📩 Contactez-nous</h2>
      <p style={styles.paragraphe}>
        Une question ? Un conseil ? Une demande spéciale ?<br />
        Écris-nous directement sur Instagram — on est là pour vous répondre rapidement et avec attention.
      </p>
      <p style={styles.paragraphe}>
        Chez <strong>RIAD</strong>, chaque client est important. On prend le temps de vous écouter, vous conseiller et vous offrir une expérience authentique, du premier message à la dernière goutte de parfum.
      </p>
      <p style={styles.ville}>📍 Basés à Montréal</p>

      <a
        href="https://www.instagram.com/riad.derb_al_oud/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.igLink}
      >
        <img
          src={`${baseURL}assets/instagram-logo.jpg`}
          alt="Instagram"
          style={styles.logo}
        />
        <span style={styles.handle}>@riad.derb_al_oud</span>
      </a>
    </div>
  );
}

const styles = {
  container: {
    padding: "4rem 2rem",
    textAlign: "center",
    backgroundColor: "#fdfdfd",
    minHeight: "100vh",
  },
  titre: {
    fontSize: "2.2rem",
    marginBottom: "1.5rem",
    color: "#2e2e2e",
  },
  paragraphe: {
    fontSize: "1.2rem",
    marginBottom: "1.8rem",
    maxWidth: "650px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#444",
    lineHeight: "1.8",
  },
  ville: {
    fontSize: "1.1rem",
    marginBottom: "2.5rem",
    fontWeight: "500",
  },
  igLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1rem",
    textDecoration: "none",
    color: "#000",
    fontSize: "1.3rem",
    fontWeight: "500",
    backgroundColor: "#f5f5f5",
    padding: "1rem 2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  handle: {
    fontSize: "1.2rem",
  },
};
