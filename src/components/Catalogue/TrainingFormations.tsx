import React, { useEffect, useMemo, useState } from 'react';
import AppPagination from '../components_reutilisable/Pagination';
import { Link, useSearchParams } from 'react-router-dom';

type Formation = {
  id: string;
  titre: string;
  prix: number | string;
  description: string;
  diplomeObtenu: string;
  minRequis: string;
  image: string;
  prochaineSession?: string;
  etatSession?: string;
};

type Props = {
  filters: any; // { prixMax?: number, search?: string, ... }
};

const ITEMS_PER_PAGE = 5;

// ---- utils ------------------------------------------------------------------
const toNumber = (v: number | string) =>
  typeof v === 'number'
    ? v
    : Number(
        String(v)
          .replace(/[^\d.,-]/g, '')
          .replace(',', '.')
      );

const getHydra = async (res: Response) => {
  const data = await res.json();
  return Array.isArray(data) ? data : data['hydra:member'] || [];
};

const dedupeById = <T extends { id: string }>(arr: T[]): T[] =>
  Object.values(
    arr.reduce<Record<string, T>>((acc, x) => ((acc[x.id] = x), acc), {})
  );

// Construit les params communs (prix, autres filtres) – sans "search"
const buildCommonParams = (filters: any): string => {
  const params = new URLSearchParams();

  if (filters.prixMax != null)
    params.append('prix[lte]', String(filters.prixMax));

  filters?.diplomeObtenu?.forEach((val: string) =>
    params.append('diplomeObtenu[]', val)
  );
  filters?.minRequis?.forEach((val: string) =>
    params.append('minRequis[]', val)
  );
  filters?.financement?.forEach((val: string) =>
    params.append('financement[]', val)
  );

  if (filters.lieu?.label) params.append('lieu', filters.lieu.label);

  const s = params.toString();
  return s ? `&${s}` : '';
};

// ---- component --------------------------------------------------------------
const TrainingFormations: React.FC<Props> = ({ filters }) => {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // lire aussi ?search=... si la page est appelée depuis la barre du header
  const [sp] = useSearchParams();
  const searchFromUrl = sp.get('search') ?? '';
  const search = (filters.search ?? searchFromUrl).trim();

  const prixMax: number = filters.prixMax ?? 5000;

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const common = buildCommonParams({ ...filters, search: undefined }); // sans "search"

        if (search) {
          const q = encodeURIComponent(search);

          // 3 requêtes en parallèle (titre, sous-thème, thème) + filtres communs (dont prix ≤)
          const [r1, r2, r3] = await Promise.all([
            fetch(`${apiUrl}/formations?titre[partial]=${q}${common}`, {
              headers: { Accept: 'application/json' },
            }),
            fetch(
              `${apiUrl}/formations?sousThemes.nom[partial]=${q}${common}`,
              { headers: { Accept: 'application/json' } }
            ),
            fetch(
              `${apiUrl}/formations?sousThemes.theme.nom[partial]=${q}${common}`,
              { headers: { Accept: 'application/json' } }
            ),
          ]);

          const [A, B, C] = await Promise.all([
            getHydra(r1),
            getHydra(r2),
            getHydra(r3),
          ]);
          const merged = dedupeById<Formation>([...A, ...B, ...C]);

          // Ceinture & bretelles : on réapplique prix ≤ client-side au cas où
          setFormations(merged.filter((f) => toNumber(f.prix) <= prixMax));
        } else {
          // pas de recherche: liste classique avec filtres communs
          const p = buildCommonParams({ ...filters, search: undefined }).slice(
            1
          ); // retire le '&' initial
          const url = `${apiUrl}/formations${p ? `?${p}` : ''}`;
          const res = await fetch(url, {
            headers: { Accept: 'application/json' },
          });
          const list = await getHydra(res);
          setFormations(list);
        }

        setCurrentPage(1); // revenir à la page 1 à chaque modif de filtres/recherche
      } catch (err) {
        console.error('Erreur lors de la récupération des formations :', err);
        setFormations([]);
      }
    };

    fetchFormations();
  }, [filters, search, prixMax, sp]);

  // Liste finale paginée (on garde une passe prix ≤ au cas où le back n’ait pas filtré)
  const source = useMemo(
    () => formations.filter((f) => toNumber(f.prix) <= prixMax),
    [formations, prixMax]
  );

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentFormations = source.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(source.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      {source.length === 0 ? (
        <h1 className="text-center text-gray-500 dark:text-white">
          Aucune formation ne correspond à votre recherche.
        </h1>
      ) : (
        <>
          {currentFormations.map((formation) => (
            <Link
              key={formation.id}
              to={`/Formation/${formation.id}`}
              className="relative flex flex-col items-center bg-white border border-turquoise rounded-lg hover:shadow-boxShadowTurquoise lg:flex-row xl:max-w-[800px] lg:max-w-[700px] sm:max-w-[450px] sm:min-h-48 w-full mx-auto hover:bg-roseclair transition dark:bg-blueIT dark:text-white dark:border-greenIT dark:hover:bg-blueIT/95"
            >
              {/* Badges */}
              <div className="absolute flex flex-col items-end md:flex-row top-2 right-1 gap-1 text-xs text-white text-right">
                {formation.prochaineSession && (
                  <span className="bg-finlandais px-2 py-1 rounded-md mr-1 w-fit h-fit">
                    Prochaine session : {formation.prochaineSession}
                  </span>
                )}
                {formation.etatSession && (
                  <span
                    className={`px-2 py-1 rounded-md w-fit ${
                      formation.etatSession === 'Formation en cours'
                        ? 'bg-turquoise3'
                        : 'bg-finlandais'
                    }`}
                  >
                    {formation.etatSession === 'Formation en cours'
                      ? 'Session en cours'
                      : 'Session clôturée'}
                  </span>
                )}
              </div>

              {/* Image */}
              <img
                src={
                  formation.image && formation.image.trim() !== ''
                    ? formation.image
                    : '/images/formation-numerique-propriete-intellectuelle.jpg'
                }
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    '/images/formation-numerique-propriete-intellectuelle.jpg';
                }}
                alt={formation.titre}
                className="rounded-t-lg h-auto lg:max-h-48 object-cover"
              />

              {/* Texte */}
              <div className="flex flex-col justify-between p-4 leading-normal text-left w-80%">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-finlandais dark:text-white">
                  {formation.titre}
                </h5>
                <p className="mb-1 text-sm text-penn dark:text-white">
                  {formation.description}
                </p>
                <div>
                  <span className="text-xs text-yale m-2 dark:text-white/90">
                    <strong>Niveau minimum requis: </strong>
                    {formation.minRequis}
                  </span>
                  <span className="text-xs text-yale m-2 dark:text-white/90">
                    <strong>Niveau obtenu:</strong> {formation.diplomeObtenu}
                  </span>
                </div>
              </div>
            </Link>
          ))}

          <AppPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
};

export default TrainingFormations;
