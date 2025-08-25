import React, { useState } from 'react';
import ButtonTurquoise from '../components_reutilisable/ButtonTurquoise.tsx';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    objet: '',
    message: '',
  });

  const [consentement, setConsentement] = useState(false);
  const [formValid, setFormValid] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!consentement) {
      setFormValid(false);
      return;
    }

    setFormValid(true);
    console.log('Formulaire envoyé avec succès :', formData);

    // TODO : envoi des données vers ton backend ici
  };

  return (
    <div className="max-w-xl mx-auto border border-turquoise rounded-md p-8 bg-roseclair shadow-md h-auto dark:bg-blueIT">
      <h2 className="text-center text-white bg-turquoise2 hover:bg-turquoise3 text-white transition py-2 rounded-md mb-6 font-semibold text-lg">
        Formulaire contact
      </h2>
      <p className="text-center text-sm text-yale mb-6">
        Précisions du contenu à retrouver dans le message à envoyer
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 h-full">
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Nom Prénom"
          className="w-full size-16 border border-finlandais rounded-md px-4 py-2 text-penn focus:outline-none focus:ring-2 focus:ring-finlandais dark:focus:ring-turquoise dark:border-turquoise dark:bg-blueDarkIT dark:hover:bg-blueIT/95"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full size-16 border border-finlandais rounded-md px-4 py-2 text-penn focus:outline-none focus:ring-2 focus:ring-finlandais dark:focus:ring-turquoise dark:border-turquoise dark:bg-blueDarkIT dark:hover:bg-blueIT/95"
          required
        />
        <input
          type="text"
          name="entreprise"
          value={formData.entreprise}
          onChange={handleChange}
          placeholder="Entreprise (facultatif)"
          className="w-full size-16 border border-finlandais rounded-md px-4 py-2 text-penn focus:outline-none focus:ring-2 focus:ring-finlandais dark:focus:ring-turquoise dark:border-turquoise dark:bg-blueDarkIT dark:hover:bg-blueIT/95"
        />
        <input
          type="text"
          name="objet"
          value={formData.objet}
          onChange={handleChange}
          placeholder="Objet message"
          className="w-full size-16 border border-finlandais rounded-md px-4 py-2 text-penn focus:outline-none focus:ring-2 focus:ring-finlandais dark:focus:ring-turquoise dark:border-turquoise dark:bg-blueDarkIT dark:hover:bg-blueIT/95"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Précisions sur la demande"
          rows={4}
          className="w-full h-80 border border-finlandais rounded-md px-4 py-2 text-penn focus:outline-none focus:ring-2 focus:ring-finlandais dark:focus:ring-turquoise dark:border-turquoise dark:bg-blueDarkIT dark:hover:bg-blueIT/95"
          required
        />

        {/* Case à cocher de consentement */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={consentement}
            onChange={() => setConsentement((prev) => !prev)}
            className="accent-turquoise mt-1"
            id="consentement"
          />
          <label
            htmlFor="consentement"
            className="text-sm text-yale dark:text-white"
          >
            J’accepte que mes données soient utilisées pour être recontacté·e
            dans le cadre de ma demande.
          </label>
        </div>

        {/* Message d’erreur si case non cochée */}
        {!formValid && (
          <p className="text-red-600 text-sm mt-1">
            ⚠️ Vous devez accepter le traitement de vos données pour envoyer le
            formulaire.
          </p>
        )}

        <div className="text-center pt-4">
          <ButtonTurquoise>Envoyer</ButtonTurquoise>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
