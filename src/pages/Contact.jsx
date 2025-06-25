export default function Contact() {
  return (
    <div style={styles.container}>
      <h2 style={styles.titre}>Contactez-Nous</h2>
      <p style={styles.message}>
        N'hésitez pas à nous contacter pour toute question ou renseignement concernant nos produits !
        Nous sommes toujours là pour vous répondre avec plaisir.
      </p>

      <a
        href="https://www.instagram.com/riad.derb_al_oud/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.igLink}
      >
        <img
          src="/assets/instagram-logo.jpg"
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
  },
  titre: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "2.5rem",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
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
