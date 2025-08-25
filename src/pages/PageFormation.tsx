import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormationCard from '../components/DetailsFormation/FormationCard.tsx';

const PageFormation: React.FC = () => {
  const { id } = useParams();
  const [formation, setFormation] = useState<any>(null);

  useEffect(() => {
    const fetchFormation = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/formations/${id}`, {
          headers: { Accept: 'application/json' },
        });
        const data = await response.json();
        console.log('Formation reçue :', data); // <== Ajoute ça pour debug
        setFormation(data);
      } catch (error) {
        console.error('Erreur lors du chargement de la formation', error);
      }
    };

    if (id) fetchFormation();
  }, [id]);

  if (!formation) {
    return <div className="text-center py-10">Chargement...</div>;
  }

  const defaultImage = '/images/formation-placeholder.jpg';

  const description = (
    <div className="text-sm text-penn space-y-2">
      <p>{formation.description}</p>
    </div>
  );

  return (
    <div className="bg-white text-penn min-h-screen flex justify-center items-center px-4 dark:bg-blueDarkIT dark:text-white">
      <div className="w-full max-w-4xl mx-2">
        <FormationCard
          title={formation.titre}
          description={description}
          image={
            formation.image && formation.image.trim() !== ''
              ? formation.image
              : defaultImage
          }
          dateProchaineSession={formation.prochaineSession}
          statutSession={formation.etatSession}
          niveau={formation.diplomeObtenu}
          prerequis={formation.minRequis}
          cout={`${formation.prix} €`}
          financement={
            Array.isArray(formation.financement)
              ? formation.financement.join(', ')
              : formation.financement
          }
          lieuSession={formation.lieu}
        />
      </div>
    </div>
  );
};

export default PageFormation;
