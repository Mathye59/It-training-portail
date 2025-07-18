import { useState } from 'react';

export default function Header() {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search.trim() === '') return;
    console.log('Recherche :', search);
    // Ajoute ici la logique : filtre, redirection, etc.
  };

  return (
    <header className="relative font-roboto">
      {/* Navbar fixe */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/65 backdrop-blur-md shadow-md px-6 md:px-20 flex items-center justify-between">
        <img
          src="/logo/Logo.png"
          alt="Logo IT-Training"
          className="h-20 w-auto"
        />
        <ul className="flex space-x-6 font-semibold text-lg text-blueDarkIT">
          <li>
            <a href="#" className="hover:text-blueIT transition">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blueIT transition">
              Catalogue
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blueIT transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Section hero */}
      <section
        className="w-full h-[500px] bg-cover bg-center relative pt-32"
        style={{
          backgroundImage: "url('/background/image-inspiration-palette.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-raleway font-black drop-shadow-xl text-stroke">
            Trouvez votre formation
          </h1>

          <h2 className="text-2xl md:text-3xl mt-4 drop-shadow font-raleway font-black text-stroke">
            Développez vos compétences avec IT-Training
          </h2>

          {/* Champ de recherche */}
          <div className="relative w-full max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Ex : Développeur, Excel, Python..."
              className="mt-8 w-full px-6 py-3 pr-20 rounded-full shadow-lg placeholder-blueDarkIT bg-white bg-opacity-40 backdrop-blur-sm text-blueDarkIT outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSearch}
              className="absolute top-1/2 right-4 -translate-y-[10%] bg-cyanIT text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
            >
              🔍
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
