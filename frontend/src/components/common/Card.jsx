import React from 'react';

const Card = ({
  children,
  variant = 'default',
  padding = 'lg',
  className = '',
  hover = false,
  onClick,
}) => {
  const variants = {
    default: 'bg-white',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50',
    outline: 'border-2 border-neutral-200 bg-white',
    glass: 'bg-white/80 backdrop-blur-sm',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';

  return (
    <div
      className={`rounded-2xl shadow-lg ${variants[variant]} ${paddings[padding]} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;