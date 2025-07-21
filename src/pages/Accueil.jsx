export default function Accueil() {
  return (
    <main className="pt-32 px-4 md:px-16 font-roboto text-blueDarkIT">
      {/* Présentation IT-Training */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Présentation IT-Training</h2>
        <p className="max-w-xl mx-auto mb-6">
          IT-Training est un organisme de formation professionnelle...
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-greenIT text-white px-4 py-2 rounded-full shadow">
            Boutons recherches formation
          </button>
          <button className="bg-violetIT text-white px-4 py-2 rounded-full shadow">
            Test Prérequis
          </button>
        </div>
      </section>

      {/* Pourquoi IT-Training */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-8">Pourquoi IT-Training?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="border-2 border-cyanIT p-4 rounded-md w-64">
            +800 formations IT actualisées
          </div>
          <div className="border-2 border-cyanIT p-4 rounded-md w-64">
            Sessions inter & intra sur mesure
          </div>
          <div className="border-2 border-cyanIT p-4 rounded-md w-64">
            Suivi de qualité et logistique en temps réel
          </div>
        </div>
      </section>

      {/* Formations populaires */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-8">Formations populaires</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-violetIT text-white px-6 py-2 rounded-full">
            Réseaux
          </button>
          <button className="bg-violetIT text-white px-6 py-2 rounded-full">
            Développement web
          </button>
          <button className="bg-violetIT text-white px-6 py-2 rounded-full">
            Cybersécurité
          </button>
          <button className="bg-violetIT text-white px-6 py-2 rounded-full">
            Systèmes
          </button>
        </div>
      </section>

      {/* Témoignages */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-8">Témoignages</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="border-2 border-cyanIT bg-pink-50 p-6 rounded-md w-64">
            “Témoignage”
          </div>
          <div className="border-2 border-cyanIT bg-pink-50 p-6 rounded-md w-64">
            “Témoignage”
          </div>
          <div className="border-2 border-cyanIT bg-pink-50 p-6 rounded-md w-64">
            “Témoignage”
          </div>
        </div>
      </section>
    </main>
  );
}
