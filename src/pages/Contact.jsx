export default function Contact() {
    return (
      <div style={styles.container}>
        <h2>Contactez-Nous</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Votre nom" style={styles.input} required />
          <input type="email" placeholder="Votre email" style={styles.input} required />
          <textarea placeholder="Votre message" style={styles.textarea} required></textarea>
          <button type="submit" style={styles.bouton}>Envoyer</button>
        </form>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: "4rem 2rem",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      maxWidth: "400px",
      margin: "0 auto",
    },
    input: {
      padding: "0.8rem",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    textarea: {
      padding: "0.8rem",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      minHeight: "150px",
    },
    bouton: {
      padding: "0.8rem",
      backgroundColor: "#006400",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1.2rem",
      cursor: "pointer",
    },
  };