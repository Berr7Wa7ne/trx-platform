import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = false,
  onClick,
}: CardProps) {
  const baseStyles = "bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6";
  const hoverStyles = hover
    ? "cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
    : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

