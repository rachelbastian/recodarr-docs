import React from 'react';
import { cn } from '../../lib/utils';

export function Button({ 
  className, 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
  
  const variants = {
    default: "bg-primary text-white hover:bg-primary-dark",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-input bg-background hover:bg-slate-100",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
    ghost: "hover:bg-slate-100",
    link: "text-primary underline-offset-4 hover:underline"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-sm",
    lg: "h-12 rounded-md px-8",
    icon: "h-10 w-10"
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 