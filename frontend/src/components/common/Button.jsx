// src/components/common/Button.jsx
import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const variants = {
    primary: 'bg-linear-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg hover:scale-105',
    secondary: 'border-2 border-primary-300 text-primary-700 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50',
    outline: 'border-2 border-neutral-300 text-neutral-700 hover:border-primary-500 hover:text-primary-600',
    ghost: 'text-neutral-600 hover:bg-neutral-100 hover:text-primary-600',
    danger: 'bg-error text-white hover:bg-error/90',
    success: 'bg-success text-white hover:bg-success/90',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={baseClasses}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;