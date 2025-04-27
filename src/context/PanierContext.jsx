import { createContext, useState, useContext } from "react";

const PanierContext = createContext();

export function PanierProvider({ children }) {
  const [panier, setPanier] = useState([]);

  function ajouterProduit(produit) {
    setPanier(prev => [...prev, produit]);
  }

  function retirerProduit(id) {
    setPanier(prev => prev.filter(p => p.id !== id));
  }

  function viderPanier() {
    setPanier([]);
  }

  return (
    <PanierContext.Provider value={{ panier, ajouterProduit, retirerProduit, viderPanier }}>
      {children}
    </PanierContext.Provider>
  );
}

export function usePanier() {
  return useContext(PanierContext);
}