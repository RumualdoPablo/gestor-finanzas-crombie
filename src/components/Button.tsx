import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" {...props}>
      {children}
    </button>
  );
};

export default Button;