import { useEffect } from 'react';
import { ICONS } from 'ui-kit/icons';
import s from './Modal.module.scss';

interface ModalProps {
  isShowModal: boolean;
  onClick: () => void;
  isCloseIcon?: boolean;
  children: JSX.Element;
}

export const Modal = ({
  isShowModal,
  onClick,
  isCloseIcon,
  children,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isCloseIcon) return;

      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCloseIcon, onClick]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return (
    <div className={s.backdrop} onClick={isCloseIcon && handleBackdropClick}>
      <div className={`${s.modal} ${isShowModal ? s.fadeIn : s.fadeOut}`}>
        {isCloseIcon && (
          <button type='button' className={s.closeModalBtn} onClick={onClick}>
            <ICONS.CROSS_SMALL />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
