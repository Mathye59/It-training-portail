import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
// import Contact from './pages/Contact';
import Header from './components/Base/Header';
import Footer from './components/Base/Footer';
import PageContact from './pages/PageContact';
import PageCatalogue from './pages/PageCatalogue';
import PageFormation from './pages/PageFormation';

import './index.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Contact" element={<PageContact />} />
        <Route path="/Catalogue" element={<PageCatalogue />} />
        <Route path="/Formation" element={<PageFormation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
