import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Basculer le thème"
      className="ml-3 rounded-xl border-1 px-3 py-2 text-sm transition
                 border-zinc-300 dark:border-zinc-700
                 bg-white dark:bg-blueDarkIT
                 text-blueDarkIT dark:text-white"
    >
      {isDark ? '🌙 Sombre' : '☀️ Clair'}
    </button>
  );  
}
