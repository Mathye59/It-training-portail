import { Link } from 'react-router-dom';

export default function GenericButton({
  text,
  to,
  color = 'bg-blueIT',
  textColor = 'text-white',
}) {
  return (
    <Link
      to={to}
      className={`px-6 py-3 rounded-md font-semibold ${color} ${textColor} hover:opacity-90 transition`}
    >
      {text}
    </Link>
  );
}
