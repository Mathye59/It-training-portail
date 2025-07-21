import { useNavigate } from 'react-router-dom';

export default function BtnContact() {
  const navigate = useNavigate();

  const handleClick2 = () => {
    navigate('/contact');
  };

  return (
    <button
      id="contact-footer-btn"
      onClick={handleClick2}
      className="bg-greenIT text-blueDarkIT font-semibold px-6 py-3 rounded-md hover:bg-greenIT-dark transition"
    >
      Contactez notre équipe
    </button>
  );
}
