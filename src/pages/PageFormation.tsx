import React from 'react';
import FormationCard from '../components/DetailsFormation/FormationCard';

const PageFormation: React.FC = () => {
  const description = (
    <div className="text-sm text-penn space-y-2">
      <p>
        Cette formation <strong>« Développeur Web et Web Mobile »</strong> vous
        permet d’acquérir les compétences nécessaires pour concevoir, développer
        et maintenir des sites web dynamiques ainsi que des applications mobiles
        compatibles tous supports.
      </p>
      <p className="font-semibold">
        À l’issue de cette formation, vous serez capable de :
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Maîtriser HTML5, CSS3, JavaScript et TypeScript</li>
        <li>Utiliser les frameworks modernes (React, Vue.js, Angular)</li>
        <li>Créer des interfaces responsives avec Tailwind CSS ou Bootstrap</li>
        <li>Développer le back-end avec Node.js et Express</li>
        <li>Gérer une base de données (MongoDB, MySQL)</li>
        <li>Déployer des applications web et mobiles</li>
      </ul>
      <p>
        Vous travaillerez sur plusieurs projets concrets qui simulent des
        situations professionnelles réelles. La formation est adaptée aux
        débutants comme aux profils en reconversion, et vous prépare au
        <span className="font-semibold">
          {' '}
          Titre Professionnel de niveau 5 (BAC+2)
        </span>{' '}
        «Développeur Web et Web Mobile».
      </p>
    </div>
  );

  return (
    <div className="bg-white text-penn min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-4xl mx-0">
        <FormationCard
          title="Développeur Web et Web Mobile"
          description={description}
          image="../src/assets/images/OIP (3).jpeg"
          link="/formations/1"
          dateProchaineSession="12 août 2025"
          statutSession="En cours"
          niveau="Niveau 6 (BAC+3)"
          prerequis="Bases en HTML, CSS, JavaScript"
          cout="1200 €"
          financement="CPF, Pôle Emploi, Alternance"
          lieuSession="En ligne / Paris"
        />
      </div>
    </div>
  );
};

export default PageFormation;
