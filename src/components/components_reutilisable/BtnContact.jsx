import GenericButton from '../components_reutilisable/GenericButton';

export default function BtnContact() {
  return (
    <div className="text-center text-white">
      <GenericButton
        text="Contacter notre équipe"
        bgColor="bg-greenIT hover:bg-greenIT-dark"
        textColor="text-blueDarkIT"
        link="/Contact"
      />
    </div>
  );
}
