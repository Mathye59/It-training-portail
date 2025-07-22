import GenericButton from './components_reutilisable/GenericButton';

export default function BtnRechercheFormation() {
  return (
    <div className="text-center text-white">
      <GenericButton
        text="+800 formations IT actualisées"
        bgColor="bg-greenIT hover:bg-greenIT-dark"
        textColor="text-white"
        // link="/test-pre-requis"
      />
    </div>

export default function GenericButton({
  text,
  bgColor,
  textColor,
  link,
  borderColor,
  hoverBorderColor,
  fontStyle = 'font-semibold text-base',
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`border ${borderColor} ${hoverBorderColor} ${bgColor} ${textColor} ${fontStyle} px-6 py-2 rounded-xl hover:scale-105 transition`}
    >
      {text}
    </button>
  );
}




  );
}
