import { useEffect, useState } from 'react';

export default function Catalogue() {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/themes')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // ✅ vérifie ce que tu reçois
        setThemes(data['hydra:member']); // pour API Platform
      })
      .catch((error) => console.error('Erreur API:', error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Nos thèmes</h2>
      <ul className="list-disc ml-6">
        {themes.map((theme) => (
          <li key={theme.id}>{theme.nom}</li>
        ))}
      </ul>
    </div>
  );
}
