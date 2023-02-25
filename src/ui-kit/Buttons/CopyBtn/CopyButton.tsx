import s from './CopyButton.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit';
  onClick: () => void;
}

export const CopyButton = ({ type = 'button', onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.copyBtn} 
      }`}
    >
      Copy
    </button>
  );
};
