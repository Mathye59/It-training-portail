import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const ButtonFinlandais: React.FC<Props> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-finlandais text-white px-6 py-2 rounded-md text-sm hover:bg-finlandaisfonce transition ${className}`}
  >
    {children}
  </button>
);

export default ButtonFinlandais;
