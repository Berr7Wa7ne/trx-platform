// components/Input.tsx
'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
}

export function Input({ 
  label, 
  error, 
  className = '', 
  type = 'text',
  showPasswordToggle = false,
  ...props 
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  
  const isPasswordField = type === 'password' || showPasswordToggle;
  const inputType = isPasswordField && showPassword ? 'text' : type;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-[16px] font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          className={`w-full px-4 py-3 ${isPasswordField ? 'pr-12' : ''} border border-gray-300 rounded-lg text-sm text-black
            focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent
            placeholder:text-gray-400
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? 'border-red-500' : ''}
            ${className}`}
          {...props}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}