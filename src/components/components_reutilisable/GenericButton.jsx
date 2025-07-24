import { useNavigate } from 'react-router-dom';

export default function GenericButton({
  text,
  bgColor,
  textColor,
  link,
  borderColor,
  borderSize= "px-2 py-2",
  hoverBorderColor,
  fontStyle = 'font-semibold text-base',
  className = 'px-6 py-2',
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
      className={`border ${borderColor} ${borderSize} ${hoverBorderColor} ${bgColor} ${textColor} ${fontStyle} ${className}  rounded-xl hover:scale-105 transition`}
    >
      {text}
    </button>
  );
}
