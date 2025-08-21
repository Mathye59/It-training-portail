import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../Accueil/ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const menuRef = useRef();

  const scrollToBtnContact = () => {
    const btn = document.getElementById('BtnContact');
    if (btn) {
      btn.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // init dark mode selon <html class="dark"> ou préférence sauvegardée
  useEffect(() => {
    const html = document.documentElement;
    const saved = localStorage.getItem('theme');
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const active = saved ? saved === 'dark' : sysDark;

    setIsDark(active);
    html.classList.toggle('dark', active);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest('#menu-button') &&
        !e.target.closest('#menu-content')
      ) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // ferme le menu en desktop
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
  <nav className="fixed top-0 left-0 w-full z-50 
                  bg-white/40 backdrop-blur-md shadow-md 
                  dark:bg-blueDarkIT/70
                  px-6 md:px-20 flex items-center justify-between h-20">
    {/* Logo */}
    <img
      src="/logo/Logo.png"
      alt="Logo IT-Training"
      className="h-[100px] w-auto ml-[5%]"
    />

    {/* Menu desktop */}
    <ul className="hidden md:flex items-center gap-6 font-semibold font-roboto text-lg px-8">
      <li>
        <Link
          to="/"
          className="inline-block px-2 py-1
                    text-blueDarkIT dark:text-white
                    hover:text-blueIT dark:hover:text-greenIT
                    transition-colors duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm"
        >
          Accueil
        </Link>
      </li>
      <li>
        <Link
          to="/Catalogue"
          className="inline-block px-2 py-1
                    text-blueDarkIT dark:text-white
                    hover:text-blueIT dark:hover:text-greenIT
                    transition-colors duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm"
        >
          Catalogue
        </Link>
      </li>
      <li>
        <Link
          to="/Contact"
          className="inline-block px-2 py-1
                    text-blueDarkIT dark:text-white
                    hover:text-blueIT dark:hover:text-greenIT
                    transition-colors duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm"
            >
              Contact
        </Link>
      </li>
    </ul>

    {/* Actions (toggle + menu burger) */}
    <div className="flex items-center gap-3 mr-[7%]">
      {/* Bouton toggle thème */}
      <ThemeToggle />

      {/* Menu burger (mobile) */}
      <div className="relative md:hidden">
        <button
          id="menu-button"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="bg-transparent border-2 border-violetIT 
                    dark:border-greenIT focus:outline-none"
        >
          <img
            src="/Menu/Menu_burger.png"
            alt="Menu"
            className="w-10 h-10"
          />
        </button>
      </div>
    </div>

    {/* Menu mobile déroulant */}
    {menuOpen && (
      <div
        id="menu-content"
        className="absolute top-[72px] right-0 mt-2 
                  bg-violetIT/95 dark:bg-blueDarkIT
                  rounded-b-lg shadow-lg w-48 py-4 px-6 z-50"
      >
        <ul className="flex flex-col items-center gap-2 py-6">
          <li className="w-full">
            <Link
              to="/"
              className="block w-full text-center
                        text-white
                        hover:text-greenIT
                        transition-colors duration-200
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm
                        px-2 py-3"
            >
              Accueil
            </Link>
          </li>

          <li className="w-full">
            <Link
              to="/Catalogue"
              className="block w-full text-center
                        text-white
                        hover:text-greenIT
                        transition-colors duration-200
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm
                        px-2 py-3"
            >
              Catalogue
            </Link>
          </li>

          <li className="w-full">
            <Link
              to="/Contact"
              className="block w-full text-center
                        text-white
                        hover:text-greenIT
                        transition-colors duration-200
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm
                        px-2 py-3"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )}
  </nav>
  );
}
