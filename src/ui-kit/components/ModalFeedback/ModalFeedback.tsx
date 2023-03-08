import { useEffect } from 'react';
import { ICONS } from 'ui-kit/icons';
import s from './ModalFeedback.module.scss';

interface ModalProps {
  isShowModal: boolean;
  onClick: () => void;
  title1?: { text: string; className: string };
  title2?: { text: string; className: string };
  subtitle?: { text: string; className: string };
  link?: { text: string; className: string };
  image?: {
    src: string;
    alt: string;
    width: string;
    height: string;
    className: string;
  };
  icon?: JSX.Element;
  button?: JSX.Element;
}

export const ModalFeedback = ({
  isShowModal,
  onClick,
  title1,
  title2,
  button,
}: ModalProps) => {
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
      <div className={`${s.modal} ${isShowModal ? s.fadeIn : s.fadeOut}`}>
        <button type='button' className={s.closeModalBtn} onClick={onClick}>
          <ICONS.CROSS_SMALL />
        </button>
        <ICONS.CHECK_VALIDATION className={s.checkValidation} />
        <p className={title1.className}>{title1.text}</p>
        <p className={title2.className}>{title2.text}</p>

        <div className={s.btnContainer}>{button}</div>
      </div>
    </div>
  );
};
