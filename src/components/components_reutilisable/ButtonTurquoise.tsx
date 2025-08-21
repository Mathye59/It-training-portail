import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const ButtonTurquoise: React.FC<Props> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`min-w-[150px] px-6 py-2 rounded-md text-sm text-white bg-turquoise2 hover:bg-turquoise3 dark:hover-border-turquoise2 transition ${className}`}
  >
    {children}
  </button>
);

export default ButtonTurquoise;
