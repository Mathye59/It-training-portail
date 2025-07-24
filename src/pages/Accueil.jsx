import BtnRechercheFormation from '../components/Acceuil/BtnRechercheFormation';
import TestPrerequisSection from '../components/components_reutilisable/TestPrerequisSection';
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
            popupText="
Chez IT-Training, nous mettons à votre disposition un catalogue riche de plus de 800 formations spécialisées dans le domaine de l’informatique. Ce large éventail couvre des thématiques variées telles que le développement web, la cybersécurité, les réseaux, le cloud, l’intelligence artificielle, la data, et bien plus encore.

Nos contenus sont mis à jour en continu pour rester alignés avec les dernières évolutions technologiques et les besoins concrets des entreprises. Grâce à cette veille permanente, nous garantissons des formations pertinentes, opérationnelles et prêtes à répondre aux enjeux du terrain."
            bgColor="bg-white"
            textColor="text-blueDarkIT"
            borderColor="border-greenIT"
            borderSize="border-2"
            hoverBorderColor="hover:border-greenIT-dark"
            className="px-8 py-8"
          />
          <div className="flex flex-wrap justify-center gap-6">
            <BtnPopup
              buttonText="Sessions inter & intra sur mesure"
              popupText="Nous offrons deux formats complémentaires pour répondre à tous les contextes professionnels :

Les sessions inter-entreprises, organisées à dates fixes, permettent à plusieurs apprenants issus d’organisations différentes de suivre une formation ensemble. Elles favorisent l’échange d’expériences et la souplesse d’inscription.

Les sessions intra-entreprise, quant à elles, sont conçues sur-mesure selon les objectifs, les outils, le niveau et le rythme de vos équipes. Elles peuvent se dérouler dans vos locaux, à distance ou en blended learning.

Chaque formation est personnalisable pour coller au plus près de vos besoins."
              bgColor="bg-white"
              textColor="text-blueDarkIT"
              borderColor="border-greenIT"
              borderSize="border-2"
              hoverBorderColor="hover:border-greenIT-dark"
              className="px-8 py-8 "
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <BtnPopup
              buttonText="Suivi de qualité et logistique en temps réel"
              popupText="IT-Training vous accompagne bien au-delà de la simple délivrance des cours. Grâce à notre plateforme de gestion dédiée, vous avez accès à un suivi en temps réel de chaque formation : présence des participants, progression pédagogique, évaluations, satisfaction, documents administratifs, etc.

Notre équipe logistique assure également la gestion des lieux, des accès, des supports et des équipements, en coordination avec vos contraintes. Ce pilotage rigoureux garantit une expérience fluide pour les apprenants comme pour les responsables formation.

L’objectif : vous offrir un service clé en main, transparent et performant à chaque étape du parcours."
              bgColor="bg-white"
              textColor="text-blueDarkIT"
              borderColor="border-greenIT"
              borderSize="border-2"
              hoverBorderColor="hover:border-greenIT-dark"
              className="px-8 py-8"
            />
          </div>
        </div>
      </section>

      {/* Formations populaires */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-8">Formations populaires</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <GenericButton
            text="Réseaux"
            bgColor="bg-violetIT hover:bg-violetIT-dark"
            textColor="text-white"
            // link="/test-pre-requis"
          />

          <GenericButton
            text="Développement Web"
            bgColor="bg-violetIT hover:bg-violetIT-dark"
            textColor="text-white"
            // link="/test-pre-requis"
          />

          <GenericButton
            text="Cyber-sécurité"
            bgColor="bg-violetIT hover:bg-violetIT-dark"
            textColor="text-white"
            // link="/test-pre-requis"
          />

          <GenericButton
            text="Systéme"
            bgColor="bg-violetIT hover:bg-violetIT-dark"
            textColor="text-white"
            // link="/test-pre-requis"
          />
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
