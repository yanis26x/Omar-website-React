import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Panier from "./pages/Panier";
import Contact from "./pages/Contact";
import ProduitDetail from "./pages/ProduitDetail";
import Apropos from "./pages/Apropos";
import { PanierProvider } from "./context/PanierContext";

function App() {
  return (
    <PanierProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/produit/:id" element={<ProduitDetail />} />
        </Routes>
        <Footer />
      </Router>
    </PanierProvider>
  );
}

export default App;