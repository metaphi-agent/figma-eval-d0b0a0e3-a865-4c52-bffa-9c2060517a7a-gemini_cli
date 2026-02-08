import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-white border border-transparent hover:opacity-90',
    secondary: 'bg-secondary text-black border border-transparent', 
    outline: 'bg-transparent text-black border border-gray-400 hover:border-black hover:text-primary',
    text: 'bg-transparent text-black hover:underline p-0 h-auto border-none shadow-none',
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm h-10',
    md: 'px-8 py-3 text-base h-12',
    lg: 'px-12 py-4 text-base h-14',
  };

  return (
    <button
      className={cn(
        'rounded flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        variant !== 'text' ? sizes[size] : '',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
