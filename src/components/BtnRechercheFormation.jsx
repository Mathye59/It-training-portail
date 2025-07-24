import GenericButton from './components_reutilisable/GenericButton';

export default function BtnRechercheFormation() {
  return (
    <div className="text-center text-white">
      <GenericButton
        text="Rechercher une formation"
        bgColor="bg-greenIT hover:bg-greenIT-dark"
        textColor="text-white"
        // link="/test-pre-requis"
      />
    </div>
    
  );
}
