import React from 'react';
import TrainingFilters from '../components/Catalogue/TrainingFilters';
import TrainingFormations from '../components/Catalogue/TrainingFormations';
import '../App.css';

const PageCatalogue: React.FC = () => {
  return (
    <div className="bg-white text-penn">
      {/* Conteneur centré */}
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Filtres : col 12 mobile, 3/12 desktop */}
          <aside className="col-span-12 md:col-span-3">
            <TrainingFilters />
          </aside>

          {/* Formations : col 12 mobile, 9/12 desktop */}
          <main className="col-span-12 md:col-span-9">
            <TrainingFormations />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCatalogue;
