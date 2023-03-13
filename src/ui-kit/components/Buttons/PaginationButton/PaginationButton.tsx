import { memo } from 'react';
import { Theme } from 'constans/types';
import { ICONS } from 'ui-kit/icons';

import s from './PaginationButton.module.scss';

interface PaginationButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  icon?: 'left' | 'right' | undefined;
  number?: number;
  active?: boolean;
  theme?: Theme;
}

export const PaginationButton = memo(
  ({
    className = '',
    type = 'button',
    disabled,
    onClick,
    icon,
    number,
    active = false,
    theme = 'dark',
  }: PaginationButtonProps) => {
    const objectIcons = {
      left: <ICONS.CHEVRON_LEFT className={`${s[`icon--${theme}`]}`} />,
      right: <ICONS.CHEVRON_RIGHT className={`${s[`icon--${theme}`]}`} />,
    };
    return (
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`${
          active ? s[`buttonActive--${theme}`] : s[`button--${theme}`]
        } ${className}`}
      >
        {icon && objectIcons[icon]}
        {number && number}
      </button>
    );
  }
);

PaginationButton.displayName = 'PaginationButton';
