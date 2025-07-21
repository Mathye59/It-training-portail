import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
// import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* Ajoute ici d'autres pages si besoin */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
