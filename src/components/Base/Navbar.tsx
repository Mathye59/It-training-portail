import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const scrollToBtnContact = () => {
    const btn = document.getElementById('BtnContact');
    if (btn) btn.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuOpen &&
        buttonRef.current &&
        menuRef.current &&
        !buttonRef.current.contains(target) &&
        !menuRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md shadow-md px-6 md:px-20 flex items-center justify-between h-20 dark:bg-blueDarkIT/70">
      {/* Logo */}
      <img
        src="/logo/Logo.png" /* assure-toi que le fichier est bien dans /public/logo/ */
        alt="Logo IT-Training"
        className="h-[100px] w-auto ml-[5%]"
      />

      {/* Menu desktop */}
      <ul className="hidden md:flex space-x-6 font-semibold font-roboto text-lg text-blueDarkIT px-8">
        <li>
          <Link
            to="/"
            className="inline-block px-2 py-1 text-blueDarkIT dark:text-white hover:text-blueIT dark:hover:text-greenIT transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/Catalogue" /* respecte la casse de ta route */
            className="inline-block px-2 py-1 text-blueDarkIT dark:text-white hover:text-blueIT dark:hover:text-greenIT transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm"
          >
            Catalogue
          </Link>
        </li>
        <li>
          {/* Scroll vers l’ID en footer, dispo sur toutes les pages */}
          <button
            type="button"
            onClick={scrollToBtnContact}
            className="inline-block px-2 py-1 text-blueDarkIT dark:text-white hover:text-blueIT dark:hover:text-greenIT transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm"
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Burger (mobile) */}
      <div className="relative md:hidden mr-[7%]">
        <button
          id="menu-button"
          ref={buttonRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          aria-controls="menu-content"
          type="button"
          className="bg-transparent border-2 border-violetIT focus:outline-none"
        >
          <img
            src="/Menu/Menu_burger.png"
            alt="Ouvrir le menu"
            className="w-10 h-10 bg-transparent"
          />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          id="menu-content"
          ref={menuRef}
          className="absolute top-[72px] right-0 mt-2 bg-violetIT/95 text-white rounded-b-lg shadow-lg w-48 py-4 px-6 z-50"
          role="menu"
          aria-labelledby="menu-button"
        >
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="inline-block px-2 py-1 hover:text-greenIT transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/Catalogue"
                onClick={() => setMenuOpen(false)}
                className="inline-block px-2 py-1 hover:text-greenIT transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm"
              >
                Catalogue
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToBtnContact();
                }}
                className="inline-block px-2 py-1 hover:text-greenIT transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-greenIT/40 rounded-sm"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
