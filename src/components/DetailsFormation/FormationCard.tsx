import React from 'react';

import GenericButton from '../components_reutilisable/GenericButton.jsx';

type Props = {
  title: string;
  description: React.ReactNode;
  image: string;
  // link: string;
  dateProchaineSession: string;
  statutSession: 'En cours' | 'Clôturée';
  niveau: string;
  prerequis: string;
  cout: string;
  financement: string;
  lieuSession: string;
};

const FormationCard: React.FC<Props> = ({
  title,
  description,
  image,
  // link,
  dateProchaineSession,
  statutSession,
  niveau,
  prerequis,
  cout,
  financement,
  lieuSession,
}) => {
  return (
    <div className="relative max-w-4xl bg-white border border-turquoise rounded-lg shadow-sm mx-2 my-6 dark:bg-blueIT dark:text-white">
      {/* ÉTIQUETTES EN HAUT À DROITE */}
      <div className="absolute top-4 right-4 space-y-1 flex flex-col items-end z-10">
        <span className="bg-finlandais text-white text-xs font-medium px-2 py-1 rounded-md shadow">
          {dateProchaineSession}
        </span>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-md shadow ${
            statutSession === 'En cours'
              ? 'bg-turquoise3 text-white'
              : 'bg-roseclair text-yale'
          }`}
        >
          {statutSession}
        </span>
      </div>
      {/* IMAGE */}
      <img
        className="rounded-t-lg object-cover w-full h-64 mb-4"
        src={
          image && image.trim() !== ''
            ? image
            : '/images/formation-numerique-propriete-intellectuelle.jpg'
        }
        onError={(e) => {
          e.currentTarget.onerror = null; // évite boucle infinie
          e.currentTarget.src =
            '/images/formation-numerique-propriete-intellectuelle.jpg';
        }}
        alt={
          image && image.trim() !== ''
            ? title
            : 'Formation numérique et propriété intellectuelle'
        }
      />
      {/* CONTENU TEXTE */}
      <div className="space-y-4 p-4 text-start">
        <h5 className="text-2xl font-bold tracking-tight text-penn dark:text-white">
          {title}
        </h5>
        <div className="text-yale dark:text-white ">{description}</div>

        <div className="text-sm space-y-2 text-penn dark:text-white">
          <p>
            <span className="font-semibold">Niveau obtenu :</span> {niveau}
          </p>
          <p>
            <span className="font-semibold">Prérequis :</span> {prerequis}
          </p>
          <p>
            <span className="font-semibold">Coût :</span> {cout}
          </p>
          <p>
            <span className="font-semibold">Financement possible :</span>{' '}
            {financement}
          </p>
          <p>
            <span className="font-semibold">Prochaine session :</span>{' '}
            {lieuSession}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-3 mt-6">
          <GenericButton
            text="Conditions inscription + Lien Test"
            bgColor="bg-white hover:bg-roseclair transition"
            borderColor="border-finlandais"
            textColor="text-finlandais"
            // link="/test-pre-requis"
          />

          <GenericButton
            text="Inscription prochaine session formation"
            bgColor="bg-violetIT hover:bg-violetIT-dark"
            textColor="text-white"
            // link="/test-pre-requis"
          />
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
