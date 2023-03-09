import { memo } from 'react';

import s from './CopyButton.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export const CopyButton = memo(
  ({ type = 'button', onClick, className }: ButtonProps) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${s.copyBtn} ${className}
      }`}
      >
        Copy
      </button>
    );
  }
);
