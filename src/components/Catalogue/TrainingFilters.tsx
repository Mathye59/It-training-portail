import React, { useState } from 'react';
import ButtonTurquoise from '../components_reutilisable/ButtonTurquoise';

type FilterSectionProps = {
  title: string;
  options: string[];
};

const FilterSection: React.FC<FilterSectionProps> = ({ title, options }) => (
  <div className="mb-6">
    <h4 className="text-white font-semibold mb-2">{title}</h4>
    <div className="space-y-2">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center gap-2 text-white text-sm"
        >
          <input
            type="checkbox"
            className="accent-turquoise w-4 h-4 rounded"
            value={option}
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

const TrainingFilters: React.FC = () => {
  const [price, setPrice] = useState<number>(0);

  return (
    <div className="bg-finlandais text-white p-6 rounded-lg w-full h-full md:w-64">
      {/* Slider Prix */}
      <div className="mb-6">
        <label htmlFor="priceRange" className="block mb-2 font-semibold">
          Prix - €
        </label>
        <input
          type="range"
          id="priceRange"
          min={0}
          max={5000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-turquoise"
        />
        <div className="flex justify-between text-sm mt-1 text-white/80">
          <span>0</span>
          <span>5000</span>
        </div>
      </div>

      <FilterSection
        title="Lieu"
        options={['Paris', 'Lyon', 'Marseille', 'En ligne']}
      />
      <FilterSection
        title="Niveau obtenu"
        options={['Débutant', 'Intermédiaire', 'Avancé']}
      />
      <FilterSection
        title="Niveau requis"
        options={['Aucun', 'Bac', 'Bac+2', 'Expérience pro']}
      />
      <FilterSection
        title="Financement"
        options={['CPF', 'Pôle emploi', 'Entreprise', 'Autofinancé']}
      />

      {/* Bouton appliquer */}
      <div className="mt-8">
        <ButtonTurquoise className="w-full bg-turquoise text-WHITE font-semibold hover:bg-[#2ac7a8]">
          Appliquer les filtres
        </ButtonTurquoise>
      </div>
    </div>
  );
};

export default TrainingFilters;
