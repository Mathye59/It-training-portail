import React from 'react';
import GenericButton from './GenericButton';

const BtnContact: React.FC = () => {
  return (
    <div className="text-center text-white">
      <GenericButton
        text="Contacter notre équipe"
        bgColor="bg-greenIT hover:bg-greenIT-dark"
        textColor="text-blueDarkIT"
        link="/Contact" // vérifie la casse exacte de ta route
      />
    </div>
  );
};

export default BtnContact;
