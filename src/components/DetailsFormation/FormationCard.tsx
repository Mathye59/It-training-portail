import React from 'react';
import ButtonFinlandais from '../components_reutilisable/ButtonFinlandais';
import ButtonRoseClair from '../components_reutilisable/ButtonRoseClair';

type Props = {
  title: string;
  description: React.ReactNode;
  image: string;
  link: string;
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
  link,
  dateProchaineSession,
  statutSession,
  niveau,
  prerequis,
  cout,
  financement,
  lieuSession,
}) => {
  return (
    <div className="relative max-w-4xl bg-white border border-turquoise rounded-lg shadow-sm mx-auto">
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
      <a href={link}>
        <img
          className="rounded-t-lg object-cover w-full h-64 mb-4"
          src={image}
          alt={title}
        />
      </a>

      {/* CONTENU TEXTE */}
      <div className="space-y-4 p-4 text-start">
        <h5 className="text-2xl font-bold tracking-tight text-penn">{title}</h5>
        <div className="text-yale">{description}</div>

        <div className="text-sm space-y-2 text-penn">
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

        <div className="flex flex-col md:flex-row items-start gap-3 mt-6">
          <a href={link}>
            <ButtonFinlandais>
              Conditions inscription + Lien Test
            </ButtonFinlandais>
          </a>
          <ButtonRoseClair>
            Inscription prochaine session formation
          </ButtonRoseClair>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
