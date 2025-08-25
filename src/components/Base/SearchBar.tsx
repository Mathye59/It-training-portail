import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const q = search.trim();
    if (!q) return;
    // ⚠️ respecte la casse EXACTE de ta route ("/Catalogue" vs "/catalogue")
    navigate(`/Catalogue?search=${encodeURIComponent(q)}`);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Ex : Développeur, Excel, Python..."
        className="mt-8 w-full px-6 py-3 pr-16 rounded-full shadow-lg placeholder-blueDarkIT bg-white bg-opacity-40 backdrop-blur-sm text-blueDarkIT outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        aria-label="Rechercher une formation"
      />
      <button
        onClick={handleSearch}
        type="button"
        className="absolute top-1/2 right-4 -translate-y-[10%] bg-cyanIT text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        aria-label="Lancer la recherche"
        title="Rechercher"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
