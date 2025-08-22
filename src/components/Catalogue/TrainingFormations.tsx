import React, { useEffect, useState } from 'react';
import AppPagination from '../components_reutilisable/Pagination';
import { Link } from 'react-router-dom';

// Type pour une formation récupérée depuis l'API
type Formation = {
  id: string;
  titre: string;
  description: string;
  diplomeObtenu: string;
  minRequis: string;
  image: string;
  prochaineSession?: string;
  etatSession?: string;
};

// Props attendues depuis le composant parent (filtres)
type Props = {
  filters: any;
};

// Nombre d'éléments affichés par page
const ITEMS_PER_PAGE = 5;

const TrainingFormations: React.FC<Props> = ({ filters }) => {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Fonction utilitaire pour construire une string alt depuis le nom du fichier image
  const getAltFromFilename = (filename: string): string => {
    const parts = filename.split('/').pop()?.split('.')[0].split('-') || [];
    return parts
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Fonction de construction des paramètres de requête à partir des filtres sélectionnés
  const buildQuery = (filters: any): string => {
    const params = new URLSearchParams();

    if (filters.prix > 0) params.append('prix[gte]', filters.prix.toString());

    filters.diplomeObtenu?.forEach((val: string) => {
      params.append('diplomeObtenu[]', val);
    });

    filters.minRequis?.forEach((val: string) => {
      params.append('minRequis[]', val);
    });

    filters.financement?.forEach((val: string) => {
      params.append('financement[]', val);
    });

    if (filters.lieu?.label) {
      params.append('lieu', filters.lieu.label);
    }

    return params.toString();
  };

  // Récupération des formations depuis l'API à chaque changement de filtre
  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const query = buildQuery(filters);
        const response = await fetch(`${apiUrl}/formations?${query}`, {
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
  }, [filters]);

  // Pagination locale
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentFormations = formations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(formations.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      {formations.length === 0 ? (
        <h1 className="text-center text-gray-500 dark:text-white">
          Aucune formation ne correspond à votre recherche.
        </h1>
      ) : (
        <>
          {currentFormations.map((formation) => (
            <Link
              key={formation.id}
              to={`/Formation/${formation.id}`}
              className="
            relative flex flex-col items-center
            bg-white border border-turquoise rounded-lg
            hover:shadow-boxShadowTurquoise
            md:flex-row xl:max-w-[800px] sm:max-w-[450px] sm:min-h-48 w-full mx-auto
            hover:bg-roseclair transition
            dark:bg-blueIT dark:text-white dark:border-greenIT dark:hover:bg-blueIT/95
          "
            >
              {/* Étiquettes : prochaine session & état */}
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

              {/* Image de la formation */}
              <img
                src={
                  formation.image && formation.image.trim() !== ''
                    ? formation.image
                    : '/images/formation-numerique-propriete-intellectuelle.jpg'
                }
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    '/images/formation-numerique-propriete-intellectuelle.jpg';
                }}
                alt={
                  formation.image
                    ? formation.titre
                    : 'Formation numérique et propriété intellectuelle'
                }
                className="rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-s-lg object-contain md:object-cover"
              />

              {/* Contenu textuel */}
              <div className="flex flex-col justify-between p-4 leading-normal text-left w-80%">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-finlandais dark:text-white">
                  {formation.titre}
                </h5>
                <p className="mb-1 text-sm text-penn dark:text-white">
                  {formation.description}
                </p>
                <div>
                  <span className="text-xs text-yale m-2 dark:text-white/90">
                    <strong>Niveau minimum requis: </strong>
                    {formation.minRequis}
                  </span>
                  <span className="text-xs text-yale m-2 dark:text-white/90">
                    <strong>Niveau obtenu:</strong> {formation.diplomeObtenu}
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Pagination */}
          <AppPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
};

export default TrainingFormations;
