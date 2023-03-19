import { useEffect } from 'react';
import { useThemeContext } from 'context/themeContext';

import { useSelector } from 'react-redux';
import { getIsClickLogOut } from 'redux/authSlice/authSelectors';

import { IThemeContext } from 'constans/types';
import { ICONS } from 'ui-kit/icons';
import s from './Modal.module.scss';

interface ModalProps {
  isShowModal: boolean;
  onClick: () => void;
  isCloseIcon?: boolean;
  children?: JSX.Element;
}

export const Modal = ({
  isShowModal,
  onClick,
  isCloseIcon,
  children,
}: ModalProps) => {
  const { theme }: IThemeContext = useThemeContext();

  const isClickLogOut = useSelector(getIsClickLogOut);

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
    <div
      className={theme === 'dark' ? s.backdropDark : s.backdropLight}
      onClick={isCloseIcon && handleBackdropClick}
    >
      <div
        className={`${theme === 'dark' ? s.modalDark : s.modalLight} ${
          (isShowModal || isClickLogOut) && s.fadeIn
        }`}
      >
        {isCloseIcon && (
          <button
            type='button'
            className={
              theme === 'dark' ? s.closeModalBtnDark : s.closeModalBtnLight
            }
            onClick={onClick}
          >
            <ICONS.CROSS_SMALL />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
