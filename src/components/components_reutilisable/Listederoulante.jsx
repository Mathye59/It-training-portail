import React, { useEffect, useMemo, useState } from 'react';
import Dropdown, { Option } from './Dropdown';

type AsyncDropdownProps = {
  label?: string;
  placeholder?: string;
  value: string | number | null | (string | number)[];
  onChange: (value: any) => void;
  /**
   * Fonction qui va chercher les options (éventuellement selon un terme de recherche)
   */
  loadOptions: (query?: string) => Promise<Option[]>;
  multiple?: boolean;
  debounceMs?: number;
};

export default function AsyncDropdown({
  label,
  placeholder,
  value,
  onChange,
  loadOptions,
  multiple,
  debounceMs = 300,
}: AsyncDropdownProps) {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState('');

  const debouncedQuery = useDebounce(q, debounceMs);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    loadOptions(debouncedQuery)
      .then((opts) => {
        if (isMounted) setOptions(opts);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [debouncedQuery, loadOptions]);

  return (
    <div>
      {label && (
        <label className="block mb-1 text-sm font-medium text-blueDarkIT">
          {label}
        </label>
      )}

      {/* Champ de recherche (optionnel) */}
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Rechercher…"
        className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-blueDarkIT focus:outline-none focus:ring-2 focus:ring-cyanIT"
      />

      <Dropdown
        options={options}
        value={value}
        onChange={onChange}
        multiple={multiple}
        placeholder={loading ? 'Chargement…' : placeholder}
      />
    </div>
  );
}

/* ----------- Hook de debounce ----------- */
function useDebounce<T>(value: T, delay: Number) {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}