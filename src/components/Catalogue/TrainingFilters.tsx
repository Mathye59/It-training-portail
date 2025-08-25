import React, { useEffect, useState } from 'react';
import ButtonTurquoise from '../components_reutilisable/ButtonTurquoise';
import ListeDeroulante from '../components_reutilisable/Listederoulante';
import { Option } from '../components_reutilisable/types';
import FilterRange from '../components_reutilisable/FilterRange';

type TrainingFiltersProps = {
  filters: any;
  setFilters: (filters: any) => void;
  onCloseMobile?: () => void;
  resetKey: number;
};

const TrainingFilters = ({
  filters,
  setFilters,
  resetKey,
  onCloseMobile,
}: TrainingFiltersProps) => {
  const [selectedLieu, setSelectedLieu] = useState<Option | null>(null);
  const [prixMax, setPrixMax] = useState<number>(5000);

  const [diplomeObtenu, setDiplomeObtenu] = useState<string[]>([]);
  const [minRequis, setMinRequis] = useState<string[]>([]);
  const [financement, setFinancement] = useState<string[]>([]);

  // ✅ Appliquer les filtres (à la main)
  const handleApplyFilters = () => {
    setFilters({
      lieu: selectedLieu,
      prixMax,
      diplomeObtenu,
      minRequis,
      financement,
    });

    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  // ✅ Réinitialiser visuellement ET côté API
  const handleResetFilters = () => {
    setSelectedLieu(null);
    setPrixMax(5000);
    setDiplomeObtenu([]);
    setMinRequis([]);
    setFinancement([]);

    setFilters({
      lieu: null,
      prixMax: 5000,
      diplomeObtenu: [],
      minRequis: [],
      financement: [],
    });

    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  // Reset automatique (ex: bouton externe)
  useEffect(() => {
    handleResetFilters();
  }, [resetKey]);

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
  const NIVEAUX_REQUIS = ['Brevet', 'Bac', 'Bac+1', 'Bac+2', 'Bac+3'] as const; //permet de cocher automatiquement les niveaux inférieurs
  function getInferiorLevels(niveau: string): string[] {
    const idx = NIVEAUX_REQUIS.indexOf(niveau as any);
    if (idx === -1) return [];
    return NIVEAUX_REQUIS.slice(0, idx + 1);
  }

  return (
    <div className="bg-finlandais text-white p-6 rounded-lg w-full md:w-64">
      <FilterRange
        label="Prix maximum"
        min={0}
        max={5000}
        value={prixMax}
        onChange={setPrixMax}
      />

      <div className="mb-6">
        <ListeDeroulante
          label="Lieu"
          placeholder="Sélectionner un lieu"
          value={selectedLieu}
          onChange={setSelectedLieu}
          loadOptions={fetchLieux}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-semibold">Niveau obtenu</label>
        {['Bac', 'Bac+2', 'Bac+3', 'Bac+4', 'Bac+5'].map((niveau) => (
          <label key={niveau} className="flex items-center text-sm mb-1 gap-2">
            <input
              type="checkbox"
              checked={diplomeObtenu.includes(niveau)}
              onChange={() =>
                toggleValue(niveau, diplomeObtenu, setDiplomeObtenu)
              }
              className="accent-turquoise"
            />
            {niveau}
          </label>
        ))}
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-semibold">Niveau requis</label>

        {NIVEAUX_REQUIS.map((niveau) => (
          <label key={niveau} className="flex items-center text-sm mb-1 gap-2">
            <input
              type="checkbox"
              checked={minRequis.includes(niveau)}
              onChange={() => {
                const levels = getInferiorLevels(niveau);
                const alreadySelected = minRequis.includes(niveau);

                if (alreadySelected) {
                  // Décoche : on enlève le niveau + tous les inférieurs
                  setMinRequis(minRequis.filter((n) => !levels.includes(n)));
                } else {
                  // Coche : on ajoute le niveau + tous les inférieurs
                  setMinRequis([...new Set([...minRequis, ...levels])]);
                }
              }}
              className="accent-turquoise"
            />
            {niveau}
          </label>
        ))}
      </div>

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

      <div className="mt-8">
        <ButtonTurquoise
          className="w-full bg-turquoise text-WHITE font-semibold hover:bg-[#2ac7a8]"
          onClick={handleApplyFilters}
        >
          Appliquer les filtres
        </ButtonTurquoise>
        <ButtonTurquoise
          onClick={handleResetFilters}
          className="w-full mt-4 bg-gray-200 text-black hover:bg-gray-300"
        >
          Réinitialiser les filtres
        </ButtonTurquoise>
      </div>
    </div>
  );
};

export default TrainingFilters;
