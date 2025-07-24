import BtnRechercheFormation from '../components/BtnRechercheFormation';
import TestPrerequisSection from '../components/TestPrerequisSection';
import BtnPopup from '../components/components_reutilisable/GenericButtonPopUp';
import GenericButton from '../components/components_reutilisable/GenericButton';

export default function Accueil() {
  return (
    <main className="pt-32 px-4 md:px-16 font-roboto text-blueDarkIT">
      {/* Présentation IT-Training */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Présentation IT-Training</h2>
        <p className="max-w-xl mx-auto mb-6">
          IT-Training est un organisme de formation professionnelle spécialisé
          dans les métiers du numérique et de l’informatique. Nous accompagnons
          les entreprises et les particuliers dans le développement de leurs
          compétences grâce à des formations actualisées, des parcours
          personnalisés et un suivi pédagogique de qualité. Nos programmes
          s’adaptent aux besoins du marché, avec une attention particulière
          portée à l’accessibilité, la performance et la montée en compétence
          rapide. Grâce à nos tests de prérequis, nos apprenants peuvent
          s’orienter efficacement vers les formations les plus pertinentes.
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
            popupText="Ceci est une info importante."
            bgColor="bg-white"
            textColor="text-blueDarkIT"
            borderColor="border-greenIT"
            borderSize="border-4"
            hoverBorderColor="hover:border-greenIT-dark"
            className='px-8 py-8'
          />
          <div className="flex flex-wrap justify-center gap-6">
            <BtnPopup
            buttonText="Sessions inter & intra sur mesure"
            popupText="Ceci est une info importante."
            bgColor="bg-white"
            textColor="text-blueDarkIT"
            borderColor="border-greenIT"
            borderSize="border-4"
            hoverBorderColor="hover:border-greenIT-dark"
            className='px-8 py-8'
          />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
             <BtnPopup
            buttonText="Suivi de qualité et logistique en temps réel"
            popupText="Ceci est une info importante."
            bgColor="bg-white"
            textColor="text-blueDarkIT"
            borderColor="border-greenIT"
            borderSize="border-4"
            hoverBorderColor="hover:border-greenIT-dark"
            className='px-8 py-8'
          />
          </div>
        </div>
      </section>

      {/* Formations populaires */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-8">Formations populaires</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="text-center ">
              <GenericButton
              text="Réseaux"
              bgColor="bg-violetIT hover:bg-violetIT-dark"
              textColor="text-white"
              // link="/test-pre-requis"
            /></div>
            {/* </div>
        {/* <div className="flex flex-wrap justify-center gap-4"> */}
              {/* <GenericButton
              text="Réseaux"
              bgColor="bg-violetIT hover:bg-violetIT-dark"
              textColor="text-white"
              // link="/test-pre-requis"
            /> */}
            {/* </div>
        <div className="flex flex-wrap justify-center gap-4"> */}
              {/* <GenericButton
              text="Réseaux"
              bgColor="bg-violetIT hover:bg-violetIT-dark"
              textColor="text-white"
              // link="/test-pre-requis"
            /> */}
            {/* </div>
        <div className="flex flex-wrap justify-center gap-4"> */}
              {/* <GenericButton
              text="Réseaux"
              bgColor="bg-violetIT hover:bg-violetIT-dark"
              textColor="text-white"
              // link="/test-pre-requis"
            /> */}
            </div>
      </section>      
         
      {/* Témoignages */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-8">Témoignages</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="border-2 border-cyanIT bg-pink-50 p-6 rounded-md w-64">
            “Témoignage”
          </div>
          <div className="border-2 border-cyanIT bg-pink-50 p-6 rounded-md w-64">
            “Témoignage”
          </div>
          <div className="border-2 border-cyanIT bg-pink-50 p-6 rounded-md w-64">
            “Témoignage”
          </div>
        </div>
      </section>
    </main>
  );
}
