import React, { useEffect, useState } from 'react';
import ButtonTurquoise from '../components_reutilisable/ButtonTurquoise';
import ListeDeroulante from '../components_reutilisable/Listederoulante';
import { Option } from '../components_reutilisable/types';
import FilterRange from '../components_reutilisable/FilterRange';
import FilterSection from '../components_reutilisable/FilterSection';

type TrainingFiltersProps = {
  onFilterChange: (filters: any) => void;
  onCloseMobile?: () => void;
};

const TrainingFilters: React.FC<TrainingFiltersProps> = ({
  onFilterChange,
  onCloseMobile,
}) => {
  const [selectedLieu, setSelectedLieu] = useState<Option | null>(null);
  const [prix, setPrix] = useState<number>(0);
  const [niveauObtenu, setNiveauObtenu] = useState<string[]>([]);
  const [niveauRequis, setNiveauRequis] = useState<string[]>([]);
  const [financement, setFinancement] = useState<string[]>([]);
  // Envoie les filtres à chaque changement
  useEffect(() => {
    onFilterChange({
      lieu: selectedLieu,
      prix: prix,
      niveauObtenu,
      niveauRequis,
      financement,
    });
  }, [selectedLieu, prix, niveauObtenu, niveauRequis, financement]);

  // Fonction simulant une API pour les lieux
  const fetchLieux = async (): Promise<Option[]> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          { label: 'Paris', value: 1 },
          { label: 'Lyon', value: 2 },
          { label: 'Marseille', value: 3 },
          { label: 'En ligne', value: 4 },
          { label: 'Lille', value: 5 },
          { label: 'Bordeaux', value: 6 },
        ]);
      }, 300)
    );
  };
  const toggleValue = (
    value: string,
    currentValues: string[],
    setValues: (vals: string[]) => void
  ) => {
    if (currentValues.includes(value)) {
      setValues(currentValues.filter((v) => v !== value));
    } else {
      setValues([...currentValues, value]);
    }
  };
  return (
    <div className="bg-finlandais text-white p-6 rounded-lg w-full md:w-64">
      {/* Barre de prix */}
      <FilterRange
        label="Prix maximum"
        min={0}
        max={15000}
        value={prix}
        onChange={setPrix}
      />

      {/* Lieu */}
      <div className="mb-6">
        <ListeDeroulante
          label="Lieu"
          placeholder="Sélectionner un lieu"
          value={selectedLieu}
          onChange={setSelectedLieu}
          loadOptions={fetchLieux}
        />
      </div>
      {/* Niveau obtenu */}
      <div className="mb-6">
        <label className="block mb-1 font-semibold">Niveau obtenu</label>
        {['Bac', 'Bac +2', 'Bac +3', 'Bac +4', 'Bac +5'].map((niveau) => (
          <label key={niveau} className="flex items-center text-sm mb-1 gap-2">
            <input
              type="checkbox"
              checked={niveauObtenu.includes(niveau)}
              onChange={() =>
                toggleValue(niveau, niveauObtenu, setNiveauObtenu)
              }
              className="accent-turquoise"
            />
            {niveau}
          </label>
        ))}
      </div>

      {/* Niveau requis */}
      <div className="mb-6">
        <label className="block mb-1 font-semibold">Niveau requis</label>
        {['Brevet', 'Bac', 'Bac +1', 'Bac +2', 'Bac +3'].map((niveau) => (
          <label key={niveau} className="flex items-center text-sm mb-1 gap-2">
            <input
              type="checkbox"
              checked={niveauRequis.includes(niveau)}
              onChange={() =>
                toggleValue(niveau, niveauRequis, setNiveauRequis)
              }
              className="accent-turquoise"
            />
            {niveau}
          </label>
        ))}
      </div>

      {/* Financement */}
      <div className="mb-6">
        <label className="block mb-1 font-semibold">Financement</label>
        {['CPF', 'Pôle emploi', 'Entreprise', 'Autofinancé'].map((f) => (
          <label key={f} className="flex items-center text-sm mb-1 gap-2">
            <input
              type="checkbox"
              checked={financement.includes(f)}
              onChange={() => toggleValue(f, financement, setFinancement)}
              className="accent-turquoise"
            />
            {f}
          </label>
        ))}
      </div>

      {/* Bouton Appliquer */}
      <div className="mt-8">
        <ButtonTurquoise
          className="w-full bg-turquoise text-WHITE font-semibold hover:bg-[#2ac7a8]"
          onClick={onCloseMobile}
        >
          Appliquer les filtres
        </ButtonTurquoise>
      </div>
    </div>
  );
};

export default TrainingFilters;
