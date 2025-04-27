export default function Apropos() {
    return (
      <div style={styles.container}>
        <h2>À propos de RIAD</h2>
        <p style={styles.paragraphe}>
          Bienvenue chez RIAD.  
          Nous sommes dédiés à offrir des produits authentiques inspirés par la richesse et la beauté de la culture islamique.  
          Chacun de nos articles est soigneusement sélectionné pour sa qualité, son raffinement et son respect des traditions.
        </p>
        <p style={styles.paragraphe}>
          Chez RIAD, nous croyons en l'élégance naturelle, en la spiritualité et en la transmission d'un art de vivre unique.  
          Merci de faire partie de cette aventure avec nous. 🌿
        </p>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: "4rem 2rem",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
    },
    paragraphe: {
      marginBottom: "2rem",
      fontSize: "1.2rem",
      lineHeight: "1.8",
      color: "#555",
    },
  };