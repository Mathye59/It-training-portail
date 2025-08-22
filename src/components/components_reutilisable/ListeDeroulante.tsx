import React, { useEffect, useState } from 'react';
import { AsyncDropdownProps, Option } from './types';

/**
 * Hook pour "debouncer" une valeur : évite de faire une requête à chaque frappe
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Composant Liste déroulante asynchrone
 */
const ListeDeroulante: React.FC<AsyncDropdownProps> = ({
  label,
  placeholder,
  value,
  onChange,
  loadOptions,
  multiple = false, // par défaut : non multiple
  debounceMs = 300,
}) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedQuery = useDebounce(searchQuery, debounceMs);

  /**
   * Chargement des options (appelé à chaque changement de query)
   */
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    loadOptions(debouncedQuery)
      .then((opts) => {
        if (isMounted) setOptions(opts);
      })
      .catch((err) => {
        console.error('Erreur lors du chargement des options :', err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [debouncedQuery, loadOptions]);

  /**
   * Gestion du changement (mode simple uniquement)
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      (opt) => String(opt.value) === e.target.value
    );
    onChange(selectedOption || null);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-semibold text-white">
          {label}
        </label>
      )}

      {/* Champ de recherche */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Rechercher..."
        className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-blueDarkIT focus:outline-none focus:ring-2 focus:ring-turquoise"
      />

      {/* Select : simple (non multiple) */}
      <select
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-blueDarkIT"
        value={value ? String(value.value) : ''}
        onChange={handleChange}
      >
        <option value="">{loading ? 'Chargement…' : placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListeDeroulante;
