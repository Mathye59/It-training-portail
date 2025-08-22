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
    prix: 0,
    diplomeObtenu: [],
    minRequis: [],
    financement: [],
  });

  // Application des nouveaux filtres (venant du composant enfant)
  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  // Réinitialisation manuelle depuis un bouton externe (ex: futur bouton global)
  const handleResetFilters = () => {
    setFilters({
      lieu: null,
      prix: 0,
      diplomeObtenu: [],
      minRequis: [],
      financement: [],
    });
    setResetKey((prev) => prev + 1); // force le reset visuel dans le composant enfant
  };

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
