import BtnRechercheFormation from '../components/Accueil/BtnRechercheFormation';
import TestPrerequisSection from '../components/components_reutilisable/TestPrerequisSection';
import BtnPopup from '../components/components_reutilisable/GenericButtonPopUp';
import GenericButton from '../components/components_reutilisable/GenericButton';

export default function Accueil() {
  return (
    <main className="pt-32 px-4 md:px-16 font-roboto
                     text-blueDarkIT dark:text-white
                     bg-white dark:bg-blueDarkIT">
      {/* Présentation IT-Training */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Présentation IT-Training</h2>
        <p className="max-w-xl mx-auto mb-6 text-blueDarkIT dark:text-white/90">
          IT-Training est un organisme de formation professionnelle spécialisé...
        </p>
        <div className="flex justify-center gap-4">
          <BtnRechercheFormation />
          <TestPrerequisSection />
        </div>
      </section>

      {/* Pourquoi IT-Training */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-8">Pourquoi IT-Training?</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <BtnPopup
            buttonText="+800 Formations IT actualisées"
            popupText="..."
            bgColor="bg-white"
            textColor="text-blueDarkIT"
            borderColor="border-greenIT"
            borderSize="border-2"
            hoverBorderColor="hover:border-greenIT-dark"
            // ⬇️ surcharge en mode sombre
            className="px-8 py-8 dark:bg-blueDarkIT dark:text-white dark:border-greenIT"
          />

          <BtnPopup
            buttonText="Sessions inter & intra sur mesure"
            popupText="..."
            bgColor="bg-white"
            textColor="text-blueDarkIT"
            borderColor="border-greenIT"
            borderSize="border-2"
            hoverBorderColor="hover:border-greenIT-dark"
            className="px-8 py-8 dark:bg-blueDarkIT dark:text-white dark:border-greenIT"
          />

          <BtnPopup
            buttonText="Suivi de qualité et logistique en temps réel"
            popupText="..."
            bgColor="bg-white"
            textColor="text-blueDarkIT"
            borderColor="border-greenIT"
            borderSize="border-2"
            hoverBorderColor="hover:border-greenIT-dark"
            className="px-8 py-8 dark:bg-blueDarkIT dark:text-white dark:border-greenIT"
          />
        </div>
      </section>

      {/* Formations populaires */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-8">Formations populaires</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {['Réseaux','Développement Web','Cyber-sécurité','Systéme'].map((t) => (
            <GenericButton
              key={t}
              text={t}
              bgColor="bg-violetIT hover:bg-violetIT-dark"
              textColor="text-white"
            />
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="text-center pb-16">
        <h2 className="text-2xl font-bold mb-8">Témoignages</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {Array.from({length:3}).map((_,i)=>(
            <div key={i}
              className="border-2 border-cyanIT bg-pink-50 dark:bg-blueDarkIT dark:border-greenIT
                         text-blueDarkIT dark:text-white p-6 rounded-md w-64">
              “Témoignage”
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
