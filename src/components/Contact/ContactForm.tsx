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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // traitement ou envoi backend ici
  };

  return (
    <div className="max-w-xl mx-auto border border-turquoise rounded-md p-8 bg-roseclair shadow-md  h-auto dark:bg-blueIT">
      <h2 className="text-center text-white bg-turquoise2 hover:bg-turquoise3 dark:hover-border-turquoise2 text-white transition py-2 rounded-md mb-6 font-semibold text-lg">
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
          className="w-full size-16 border border-finlandais rounded-md px-4 py-2 text-penn focus:outline-none focus:ring-2 focus:ring-finlandais dark:focus:ring-turquoise dark:border-turquoise dark:bg-blueDarkIT  dark:hover:bg-blueIT/95"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full size-16 border border-finlandais rounded-md px-4 py-2 text-penn focus:outline-none focus:ring-2 focus:ring-finlandais dark:focus:ring-turquoise dark:border-turquoise dark:bg-blueDarkIT  dark:hover:bg-blueIT/95"
          required
        />
        <input
          type="text"
          name="entreprise"
          value={formData.entreprise}
          onChange={handleChange}
          placeholder="Entreprise (facultatif)"
          className="w-full size-16 border border-finlandais rounded-md px-4 py-2 text-penn focus:outline-none focus:ring-2 focus:ring-finlandais dark:focus:ring-turquoise dark:border-turquoise dark:bg-blueDarkIT  dark:hover:bg-blueIT/95"
        />
        <input
          type="text"
          name="objet"
          value={formData.objet}
          onChange={handleChange}
          placeholder="Objet message"
          className="w-full size-16 border border-finlandais rounded-md px-4 py-2 text-penn focus:outline-none focus:ring-2 focus:ring-finlandais dark:focus:ring-turquoise dark:border-turquoise dark:bg-blueDarkIT  dark:hover:bg-blueIT/95"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Précisions sur la demande"
          rows={4}
          className="w-full h-80 border border-finlandais rounded-md px-4 py-2 text-penn focus:outline-none focus:ring-2 focus:ring-finlandais dark:focus:ring-turquoise dark:border-turquoise dark:bg-blueDarkIT  dark:hover:bg-blueIT/95"
          required
        />
        <div className="text-center pt-4 ">
          <ButtonTurquoise>Envoyer</ButtonTurquoise>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
