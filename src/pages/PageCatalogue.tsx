import React, { useState } from 'react'; 
import TrainingFilters from '../components/Catalogue/TrainingFilters';
import TrainingFormations from '../components/Catalogue/TrainingFormations';
import ButtonTurquoise from '../components/components_reutilisable/ButtonTurquoise';
import '../App.css';

const PageCatalogue: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (filters: any) => {
    console.log('Filtres appliqués :', filters);
  };

  return (
    <div className="min-h-screen bg-white text-penn dark:bg-blueDarkIT dark:text-white">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* BOUTON POUR MOBILE */}
        <div className="md:hidden mb-4 text-center">
          <ButtonTurquoise onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? 'Fermer les filtres' : 'Filtrer'}
          </ButtonTurquoise>
          {/* Si ton ButtonTurquoise accepte className, tu peux le renforcer :
             <ButtonTurquoise className="dark:bg-blueDarkIT dark:text-white dark:border-greenIT" ... /> */}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Filtres */}
          <aside
            className={`col-span-12 md:col-span-3 ${
              showFilters ? 'block' : 'hidden'
            } md:block
               dark:text-white`}
          >
            <TrainingFilters
              onCloseMobile={() => setShowFilters(false)}
              onFilterChange={handleFilterChange}
            />
          </aside>

          {/* Formations */}
          <main className="col-span-12 md:col-span-9">
            <TrainingFormations />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCatalogue;
