import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil.tsx';
// import Contact from './pages/Contact';
import Header from './components/Base/Header.tsx';
import Footer from './components/Base/Footer.tsx';
import PageContact from './pages/PageContact.tsx';
import PageCatalogue from './pages/PageCatalogue.tsx';
import PageFormation from './pages/PageFormation.tsx';
import './index.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Contact" element={<PageContact />} />
        <Route path="/Catalogue" element={<PageCatalogue />} />
        <Route path="/Formation/:id" element={<PageFormation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
