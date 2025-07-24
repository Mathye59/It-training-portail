import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const ButtonRoseClair: React.FC<Props> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`border border-finlandais bg-transparent text-finlandais px-6 py-2 rounded-md text-sm hover:bg-roseclair transition ${className}`}
  >
    {children}
  </button>
);

export default ButtonRoseClair;
