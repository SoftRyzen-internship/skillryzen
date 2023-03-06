import { useEffect } from 'react';
import s from './Modal.module.scss';

interface ModalProps {
  onClick: () => void;
  text: string;
}

export const Modal = ({ onClick, text }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button type='button' className={s.closeModalBtn} onClick={onClick}>
          {/* <CloseModal /> */}
        </button>
        <p className={s.text}>{text}</p>
        <div className={s.btnContainer}>
          <button className={s.btn} type='button' onClick={onClick}>
            no
          </button>
        </div>
      </div>
    </div>
  );
};
