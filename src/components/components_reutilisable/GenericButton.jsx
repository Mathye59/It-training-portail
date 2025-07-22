import { useNavigate } from 'react-router-dom';

export default function GenericButton({ text, bgColor, textColor, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${bgColor} ${textColor} font-semibold px-6 py-2 rounded-xl hover:scale-105 transition`}
    >
      {text}
    </button>
  );
}
