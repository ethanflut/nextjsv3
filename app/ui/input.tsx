import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-indigo-500"
      {...props}
    />
  );
};
