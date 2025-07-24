import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const ButtonTurquoise: React.FC<Props> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-turquoise2 text-white px-6 py-2 rounded-md text-sm hover:bg-turquoise3 transition ${className}`}
  >
    {children}
  </button>
);

export default ButtonTurquoise;
