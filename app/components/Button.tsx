import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  loading = false,
  className = '', 
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = "w-full px-6 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-[#00506F] hover:bg-teal-800 text-white focus:ring-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed",
    secondary: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-400"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
