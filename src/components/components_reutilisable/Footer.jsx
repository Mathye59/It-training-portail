import BtnContact from '../BtnContact';

export default function Footer() {
  return (
    <footer
      className=" flex flex-col justify-between min-h-[200px] text-white pt-10"
      id="Contact-footer"
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
      <div className="mt-auto text-center text-m text-white/70 bg-blueDarkIT flex flex-row justify-between ">
        <ul className="flex flex-row  items-center gap-4 text-xs ">
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
        <p>© 2025 IT-Training. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
