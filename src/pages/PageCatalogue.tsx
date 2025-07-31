import React, { useState } from 'react';
import TrainingFilters from '../components/Catalogue/TrainingFilters';
import TrainingFormations from '../components/Catalogue/TrainingFormations';
import ButtonTurquoise from '../components/components_reutilisable/ButtonTurquoise';
import '../App.css';

const PageCatalogue: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const handleFilterChange = (filters: any) => {
    // Tu pourras y traiter les filtres plus tard
    console.log('Filtres appliqués :', filters);
  };
  return (
    <div className="bg-white text-penn">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* BOUTON POUR MOBILE */}
        <div className="md:hidden mb-4 text-center">
          <ButtonTurquoise onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? 'Fermer les filtres' : 'Filtrer'}
          </ButtonTurquoise>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Filtres */}
          <aside
            className={`col-span-12 md:col-span-3 ${
              showFilters ? 'block' : 'hidden'
            } md:block`}
          >
            <TrainingFilters
              onCloseMobile={() => setShowFilters(false)}
              onFilterChange={handleFilterChange}
            />
          </aside>

          {/* Formations */}
          <main className="col-span-12    md:col-span-9   ">
            <TrainingFormations />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCatalogue;
