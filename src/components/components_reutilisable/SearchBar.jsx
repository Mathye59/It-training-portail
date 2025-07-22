import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search.trim() === '') return;
    console.log('Recherche effectuée :', search);
    // Tu peux ensuite filtrer une liste ou rediriger
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Ex : Développeur, Excel, Python..."
        className="mt-8 w-full px-6 py-3 pr-16 rounded-full shadow-lg placeholder-blueDarkIT bg-white bg-opacity-40 backdrop-blur-sm text-blueDarkIT outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handleSearch}
        type="button"
        className="absolute top-1/2 right-4 -translate-y-[10%] bg-cyanIT text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
      >
        🔍
      </button>
    </div>
  );
}
