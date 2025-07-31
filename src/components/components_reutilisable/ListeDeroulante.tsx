import React, { useEffect, useState } from 'react';
import { AsyncDropdownProps, Option } from './types';

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export default function ListeDeroulante({
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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find(
      (opt) => String(opt.value) === e.target.value
    );
    onChange(selected || null);
  };

  return (
    <div>
      {label && (
        <label className="block mb-1 text-sm font-medium text-blueDarkIT">
          {label}
        </label>
      )}

      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Rechercher…"
        className="mb-2 w-full rounded-md border border-gray-300 px-3 py-2 text-blueDarkIT focus:outline-none focus:ring-2 focus:ring-cyanIT"
      />

      <select
        value={value ? String(value.value) : ''}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded-md text-blueDarkIT"
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
}
