import React from 'react';
import CheckboxExample from '@ui-kit/Checkbox/example/CheckboxExample';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <CheckboxExample />
    </header>
  );
};
