export default function Footer() {
    return (
        <footer>
        <p>© {new Date().getFullYear()} RIAD. Tous droits réservés.</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      textAlign: "center",
      padding: "1rem",
      backgroundColor: "#006400", /* vert foncé */
      color: "white",
      marginTop: "2rem",
    },
  };