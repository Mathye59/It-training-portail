import { useState, useEffect } from 'react';
import GenericButton from './GenericButton';

export default function BtnPopup({
  buttonText,
  popupText,
  bgColor,
  textColor,
  borderColor,
  borderSize,
  hoverBorderColor,
  fontStyle,
  className = 'px-6 py-2',
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Fermer la popup en cliquant hors de la fenêtre ou sur "Escape"
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.id === 'overlay') {
        setIsOpen(false);
      }
    };

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKey);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        <GenericButton
          text={buttonText}
          link={null}
          bgColor={bgColor}
          textColor={textColor}
          borderColor={borderColor}
          borderSize={borderSize}
          hoverBorderColor={hoverBorderColor}
          fontStyle={fontStyle}
          className={className}
        />
      </div>

      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
        >
          <div
            className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full mx-4 relative  ${width} ${height}"
            onClick={(e) => e.stopPropagation()} // empêcher fermeture si clic dans la fenêtre
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            <div className="text-gray-800">{popupText}</div>
          </div>
        </div>
      )}
    </>
  );
}
