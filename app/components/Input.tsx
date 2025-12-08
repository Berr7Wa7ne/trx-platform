import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || props.name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          appearance-none relative block w-full px-4 py-3 
          border ${error ? "border-red-500" : "border-gray-300 dark:border-gray-600"} 
          placeholder-gray-500 dark:placeholder-gray-400 
          text-gray-900 dark:text-white 
          rounded-lg 
          focus:outline-none focus:ring-2 
          ${error ? "focus:ring-red-500" : "focus:ring-indigo-500"} 
          focus:border-transparent 
          dark:bg-gray-700 
          transition duration-150
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}

