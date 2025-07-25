import BtnContact from '../components_reutilisable/BtnContact';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className=" flex flex-col justify-between min-h-[200px] text-white pt-10"
      id="BtnContact"
    >
      {/*milieu footer + bouton contact*/}
      <div className="  text-white text-center py-10 px-4 grow font-roboto">
        <h3 className="text-xl md:text-2xl font-bold mb-2">
          Vous avez un besoin spécifique ?
        </h3>
        <p className="text-m md:text-l mb-6">
          Nous créons des parcours sur mesure adaptés à vos enjeux
        </p>

        <BtnContact />
      </div>

      {/* Liens */}

      {/* Bas de page */}
      <div className="mt-auto pt-2 text-center text-m text-white/70 bg-blueDarkIT flex flex-row justify-between items-center pr-2 ">
        <ul className="text-[8px] flex flex-col md:flex-row md:gap-4  justify-center  md:text-xs ">
          <li></li>
          <li>
            <a href="#" className="hover:text-cyanIT transition">
              À propos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyanIT transition">
              Mentions légales
            </a>
          </li>
        </ul>
        <p className="text-xs md:text-base">
          © 2025 IT-Training. Tous droits réservés.
        </p>
        <Link
          key="#"
          to="#"
          className="text-white md:text-blueDarkIT hover:text-white text-xs md:text-base"
        >
          Connexion
        </Link>
      </div>
    </footer>
  );
}
