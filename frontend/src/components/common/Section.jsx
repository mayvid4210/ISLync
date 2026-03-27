import React from 'react';
import Container from './Container';

const Section = ({
  children,
  className = '',
  background = 'white',
  spacing = 'lg',
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50',
    primary: 'bg-gradient-to-r from-primary-600 to-secondary-600',
  };

  const spacings = {
    sm: 'py-12',
    md: 'py-20',
    lg: 'py-28',
    xl: 'py-36',
  };

  return (
    <section className={`${backgrounds[background]} ${spacings[spacing]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;