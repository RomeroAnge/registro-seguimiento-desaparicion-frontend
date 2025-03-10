import React from 'react';

export function Button({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-gray-100",
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6 text-lg",
    icon: "h-10 w-10",
  };
  
  const variantStyle = variants[variant] || variants.default;
  const sizeStyle = sizes[size] || sizes.default;
  
  return (
    <button 
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
