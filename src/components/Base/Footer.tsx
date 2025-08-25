import React from 'react';
import { Link } from 'react-router-dom';
import BtnContact from '../components_reutilisable/BtnContact';

const Footer: React.FC = () => {
  return (
    <footer
      className="flex flex-col justify-between min-h-[200px] text-white pt-10"
      id="BtnContact"
      role="contentinfo"
    >
      {/* Milieu footer + bouton contact */}
      <div className="text-white text-center py-10 px-4 grow font-roboto">
        <h3 className="text-xl md:text-2xl font-bold mb-2">
          Vous avez un besoin spécifique ?
        </h3>
        <p className="text-m md:text-l mb-6">
          Nous créons des parcours sur mesure adaptés à vos enjeux
        </p>

        <BtnContact />
      </div>

      {/* Bas de page */}
      <div className="mt-auto pt-2 text-center text-m text-white/70 bg-blueDarkIT flex flex-row justify-between items-center pr-2">
        <ul className="text-[8px] flex flex-col md:flex-row md:gap-4 justify-center md:text-xs">
          <li>
            <Link to="/a-propos" className="hover:text-cyanIT transition">
              À propos
            </Link>
          </li>
          <li>
            <Link
              to="/mentions-legales"
              className="hover:text-cyanIT transition"
            >
              Mentions légales
            </Link>
          </li>
        </ul>

        <p className="text-xs md:text-base">
          © {new Date().getFullYear()} IT-Training. Tous droits réservés.
        </p>

        <Link
          to="/connexion" // ajuste selon ta route réelle
          className="text-white md:text-blueDarkIT hover:text-white text-xs md:text-base"
        >
          Connexion
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
