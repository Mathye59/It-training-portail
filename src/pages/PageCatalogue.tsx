import React, { useState } from 'react';
import TrainingFilters from '../components/Catalogue/TrainingFilters';
import TrainingFormations from '../components/Catalogue/TrainingFormations';
import ButtonTurquoise from '../components/components_reutilisable/ButtonTurquoise';
import '../App.css';

const PageCatalogue: React.FC = () => {
  // Affichage des filtres (mobile)
  const [showFilters, setShowFilters] = useState(false);

  // Réinitialisation visuelle forcée
  const [resetKey, setResetKey] = useState(0);

  // Filtres appliqués à l'API
  const [filters, setFilters] = useState({
    lieu: null,
    prix: 5000,
    diplomeObtenu: [],
    minRequis: [],
    financement: [],
  });

  return (
    <div className="bg-white text-penn dark:bg-blueDarkIT dark:text-white">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* BOUTON POUR AFFICHER / CACHER LES FILTRES EN MOBILE */}
        <div className="md:hidden mb-4 text-center">
          <ButtonTurquoise onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? 'Fermer les filtres' : 'Filtrer'}
          </ButtonTurquoise>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* FILTRES */}
          <aside
            className={`col-span-12 md:col-span-3 ${
              showFilters ? 'block' : 'hidden'
            } md:block`}
          >
            <TrainingFilters
              filters={filters}
              setFilters={setFilters}
              resetKey={resetKey}
              onCloseMobile={() => setShowFilters(false)}
            />
          </aside>

          {/* FORMATIONS */}
          <main className="col-span-12 md:col-span-9">
            <TrainingFormations filters={filters} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCatalogue;
