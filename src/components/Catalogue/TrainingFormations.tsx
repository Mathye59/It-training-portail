import React, { useState } from 'react';
import AppPagination from '../components_reutilisable/Pagination';
import { Link } from 'react-router-dom';

// Type pour une formation
type Formation = {
  id: number;
  title: string;
  description: string;
  niveau: string;
  image: string;
  prochaineSession: string;
  etatSession: 'Formation en cours' | 'Formation cloturée';
};
const buildQuery = (filters: any) => {
  const params = new URLSearchParams();

  if (filters.lieu) params.append('lieu', filters.lieu);
  if (filters.prix) params.append('prix[lte]', filters.prix);

  filters.niveauObtenu?.forEach((val: string) =>
    params.append('diplomeObtenu[]', val)
  );
  filters.niveauRequis?.forEach((val: string) =>
    params.append('minRequis[]', val)
  );
  filters.financement?.forEach((val: string) =>
    params.append('financement[]', val)
  );

  return params.toString();
};
const fetchFormations = async (filters: any) => {
  const query = buildQuery(filters);
  const response = await fetch(`http://localhost:8000/api/formations?${query}`);
  const data = await response.json();
  setFormations(data['hydra:member']); // ou selon ta pagination
};
// Fake données
const dummyFormations: Formation[] = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  title: `Formation ${i + 1}`,
  description: 'Description de la formation',
  niveau: 'Niveau obtenu',
  image: 'public/images/formation-numerique-propriete-intellectuelle.jpg',
  prochaineSession: 'Prochaine session: 25/08/2025',
  etatSession: i % 3 === 0 ? 'Formation cloturée' : 'Formation en cours',
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
    <div className="space-y-6 ">
      {currentFormations.map((formation) => (
        <Link
          key={formation.id}
          to="/Formation"
          className="relative flex flex-col items-center bg-white border border-turquoise rounded-lg hover:shadow-boxShadowTurquoise md:flex-row xl:max-w-[800px] sm:max-w-[450px] sm:min-h-48 w-full mx-auto hover:bg-roseclair transition"
        >
          {/* Étiquettes en haut à droite */}
          <div className="absolute flex flex-col items-end md:flex-row top-2 right-1 gap-1 text-xs text-white text-right">
            <span className="bg-finlandais px-2 py-1 rounded-md mr-1 w-fit h-fit">
              {formation.prochaineSession}
            </span>
            <span
              className={`px-2 py-1 rounded-md w-fit ${
                formation.etatSession === 'Formation en cours'
                  ? 'bg-turquoise3'
                  : 'bg-finlandais'
              }`}
            >
              {formation.etatSession === 'Formation en cours'
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
          <div className="flex flex-col justify-between p-4 leading-normal text-left w-80% ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-finlandais">
              {formation.title}
            </h5>
            <p className="mb-1 text-sm text-penn">{formation.description}</p>
            <span className="text-xs text-yale">{formation.niveau}</span>
          </div>
        </Link>
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
