import React, { useState } from 'react';
import AppPagination from '../components_reutilisable/Pagination';

// Type pour une formation
type Formation = {
  id: number;
  title: string;
  description: string;
  niveau: string;
  image: string;
  prochaineSession: string;
  etatSession: 'en cours' | 'cloturée';
};

// Fake données
const dummyFormations: Formation[] = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: `Formation ${i + 1}`,
  description: 'Description de la formation',
  niveau: 'Niveau obtenu',
  image: 'src/assets/images/OIP (1).jpeg',
  prochaineSession: 'Prochaine session: 25/08/2025',
  etatSession: i % 3 === 0 ? 'cloturée' : 'en cours',
}));

const ITEMS_PER_PAGE = 5;

const TrainingFormations: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentFormations = dummyFormations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(dummyFormations.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      {currentFormations.map((formation) => (
        <a
          key={formation.id}
          href="#"
          className="relative flex flex-col items-center bg-white border border-turquoise rounded-lg hover:shadow-boxShadowTurquoise md:flex-row md:max-w-full hover:bg-roseclair transition"
        >
          {/* Étiquettes en haut à droite */}
          <div className="absolute top-2 right-2 space-y-1 text-xs text-white text-right">
            <span className="bg-finlandais px-2 py-1 rounded-md mr-1">
              {formation.prochaineSession}
            </span>
            <span
              className={`px-2 py-1 rounded-md ${
                formation.etatSession === 'en cours'
                  ? 'bg-turquoise3'
                  : 'bg-finlandais'
              }`}
            >
              {formation.etatSession === 'en cours'
                ? 'Session en cours'
                : 'Session clôturée'}
            </span>
          </div>

          {/* Image formation */}
          <img
            src={formation.image}
            alt={formation.title}
            className="object-cover w-full h-64 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          />

          {/* Infos formation */}
          <div className="flex flex-col justify-between p-4 leading-normal text-left w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-finlandais">
              {formation.title}
            </h5>
            <p className="mb-1 text-sm text-penn">{formation.description}</p>
            <span className="text-xs text-yale">{formation.niveau}</span>
          </div>
        </a>
      ))}

      {/* Pagination */}
      <AppPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default TrainingFormations;
