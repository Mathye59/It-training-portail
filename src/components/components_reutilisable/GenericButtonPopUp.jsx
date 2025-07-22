import { useState, useRef, useEffect } from 'react';
import GenericButton from './GenericButton';

export default function BtnPopup({
  buttonText,
  popupText,
  bgColor,
  textColor,
  borderColor,
  hoverBorderColor,
  fontStyle,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  // Fermer la popup si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <div onClick={handleButtonClick}>
        <GenericButton
          text={buttonText}
          link={null} // désactive la navigation
          bgColor={bgColor}
          textColor={textColor}
          borderColor={borderColor}
          hoverBorderColor={hoverBorderColor}
          fontStyle={fontStyle}
        />
      </div>

      {isOpen && (
        <div
          ref={popupRef}
          className="absolute top-full left-0 mt-2 p-4 bg-white border border-gray-300 rounded shadow-md w-64 z-50"
        >
          {popupText}
        </div>
      )}
    </div>
  );
}
