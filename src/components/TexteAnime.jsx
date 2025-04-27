import { useEffect, useState } from "react";

const faitsIslam = [
  "L’Islam est la religion la plus pratiquée au monde.",
  "Le mot Islam signifie paix et soumission à Dieu.",
  "Le Coran est le livre sacré révélé au Prophète Muhammad ﷺ.",
  "Les musulmans prient cinq fois par jour (Salat).",
  "Le Ramadan est un mois de jeûne, de prière et de générosité.",
];

export default function TexteAnime() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % faitsIslam.length);
    }, 5000); // Change tous les 5 secondes
    return () => clearInterval(interval);
  }, []);

  return (
<div className="texte-container">
  <h2 className="texte-anime">{faitsIslam[index]}</h2>
</div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    backgroundColor: "#f0f8ff",
    borderRadius: "12px",
    margin: "2rem 0",
  },
  texte: {
    fontSize: "1.5rem",
    transition: "opacity 0.5s ease-in-out",
  },
};