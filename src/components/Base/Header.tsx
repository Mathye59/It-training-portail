import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <header className="relative font-roboto" role="banner">
      <Navbar />

      <section
        aria-label="Hero IT-Training"
        className="w-full h-[500px] bg-cover bg-center relative pt-32"
        // ⚠️ Mets bien le fichier dans /public/background/...
        style={{
          backgroundImage: "url('/background/image-inspiration-palette.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4 pt-8">
          <h1 className="text-5xl md:text-7xl font-raleway font-black drop-shadow-xl">
            Trouvez votre formation
          </h1>
          <h2 className="text-3xl md:text-5xl mt-4 drop-shadow font-raleway font-black">
            Développez vos compétences avec IT-Training
          </h2>

          {/* SearchBar doit elle-même faire navigate('/Catalogue?search=...') */}
          <SearchBar />
        </div>
      </section>
    </header>
  );
};

export default Header;
