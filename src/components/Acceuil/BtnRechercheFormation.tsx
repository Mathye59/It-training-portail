import React from 'react';
import GenericButton from '../components_reutilisable/GenericButton';

const BtnRechercheFormation: React.FC = () => {
  return (
    <div className="text-center text-white">
      <GenericButton
        text="Rechercher une formation"
        bgColor="bg-greenIT hover:bg-greenIT-dark"
        textColor="text-blueDarkIT"
        link="/Catalogue" // ⚠️ mets la même casse que ta <Route path="...">
      />
    </div>
  );
};

export default BtnRechercheFormation;
