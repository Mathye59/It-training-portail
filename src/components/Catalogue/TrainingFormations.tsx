import React, { useEffect, useState } from 'react';
import AppPagination from '../components_reutilisable/Pagination';
import { Link } from 'react-router-dom';

type Formation = {
  '@id': string;
  titre: string;
  description: string;
  diplomeObtenu: string;
  image: string;
  prochaineSession?: string;
  etatSession?: string;
};

const ITEMS_PER_PAGE = 5;

const TrainingFormations: React.FC = () => {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const getAltFromFilename = (filename: string): string => {
    const parts = filename.split('/').pop()?.split('.')[0].split('-') || [];
    return parts
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        console.log('API URL utilisée :', apiUrl);
        const response = await fetch(`${apiUrl}/formations`, {
          headers: {
            Accept: 'application/json',
          },
        });
        const data = await response.json();
        console.log('Formations reçues:', data);
        setFormations(Array.isArray(data) ? data : data['hydra:member'] || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des formations :', error);
      }
    };

    fetchFormations();
  }, []);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentFormations = formations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(formations.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      {currentFormations.map((formation) => (
        <Link
          key={formation['@id']}
          to="/Formation"
          className="relative flex flex-col items-center bg-white border border-turquoise rounded-lg hover:shadow-boxShadowTurquoise md:flex-row xl:max-w-[800px] sm:max-w-[450px] sm:min-h-48 w-full mx-auto hover:bg-roseclair transition"
        >
          {/* Étiquettes en haut à droite */}
          <div className="absolute flex flex-col items-end md:flex-row top-2 right-1 gap-1 text-xs text-white text-right">
            {formation.prochaineSession && (
              <span className="bg-finlandais px-2 py-1 rounded-md mr-1 w-fit h-fit">
                Prochaine session : {formation.prochaineSession}
              </span>
            )}
            {formation.etatSession && (
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
            )}
          </div>

          {/* Image */}
          <img
            src={
              formation.image ||
              '/images/formation-numerique-propriete-intellectuelle.jpg'
            }
            alt={
              formation.image
                ? formation.titre
                : 'Formation numérique et propriété intellectuelle'
            }
            className="object-cover rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
          />

          {/* Texte */}
          <div className="flex flex-col justify-between p-4 leading-normal text-left w-80%">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-finlandais">
              {formation.titre}
            </h5>
            <p className="mb-1 text-sm text-penn">{formation.description}</p>
            <span className="text-xs text-yale">{formation.diplomeObtenu}</span>
          </div>
        </Link>
      ))}

      <AppPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default TrainingFormations;
