import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-40 backdrop-blur-md shadow-md px-6 md:px-20 flex items-center justify-between h-20 object-contain">
      {/* Logo */}
      <img
        src="/logo/Logo.png"
        alt="Logo IT-Training"
        className="h-[100px] w-auto ml-[5%] "
      />

      {/* Menu desktop */}
      <ul className="hidden md:flex space-x-6 font-semibold font-roboto text-lg text-blueDarkIT">
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

      {/* Menu burger (mobile) */}
      <div className=" relative md:hidden mr-[7%]">
        <button
          id="menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="bg-transparent border-2 border-violetIT  focus:outline-none focus:ring-0 focus:border-none active:outline-none active:ring-0 "
        >
          <img
            src="/Menu/Menu_burger.png"
            alt="Menu"
            className="w-10 h-10 bg-transparent"
          />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div
          id="menu-content"
          className="absolute top-[72px] right-0 mt-2 bg-violetIT/95 text-white rounded-b-lg shadow-lg w-48 py-4 px-6 z-50 "
        >
          <ul className="flex flex-col items-center space-y-4 py-10  text-white">
            <li className="pb-20">
              <a href="#" className="hover:text-blueIT transition">
                Accueil
              </a>
            </li>
            <li className="pb-20">
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
        </div>
      )}
    </nav>
  );
}
