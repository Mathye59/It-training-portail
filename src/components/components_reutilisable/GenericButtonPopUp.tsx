import React, { useEffect, useState } from 'react';
import GenericButton from './GenericButton';

type BtnPopupProps = {
  buttonText: string;
  popupText: React.ReactNode; // string ou JSX
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  fontStyle?: string;
  borderSize?: string; // "border" | "border-2" | etc.
  className?: string; // padding etc.
  widthClass?: string; // ex: "max-w-lg"
  heightClass?: string; // ex: "h-auto"
};

const BtnPopup: React.FC<BtnPopupProps> = ({
  buttonText,
  popupText,
  bgColor,
  textColor,
  borderColor,
  hoverBorderColor,
  fontStyle,
  borderSize = 'border',
  className = 'px-6 py-2',
  widthClass = 'max-w-md',
  heightClass = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fermer sur "Escape"
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <GenericButton
        text={buttonText}
        bgColor={bgColor}
        textColor={textColor}
        borderColor={borderColor}
        borderSize={borderSize}
        hoverBorderColor={hoverBorderColor}
        fontStyle={fontStyle}
        className={className}
        onClick={() => setIsOpen(true)} // 👈 pas de link=null
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 pt-10"
          onClick={() => setIsOpen(false)} // clic sur overlay -> ferme
          role="dialog"
          aria-modal="true"
        >
          <div
            className={[
              'bg-white p-14 rounded-2xl shadow-xl w-full mx-4 relative',
              widthClass,
              heightClass,
              'dark:bg-blueDarkIT dark:text-white',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={(e) => e.stopPropagation()} // bloquer le clic intérieur
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              aria-label="Fermer"
            >
              ×
            </button>

            <div className="text-gray-800 dark:text-white">{popupText}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default BtnPopup;
