import { useEffect } from 'react';
import s from './Modal.module.scss';

interface ModalProps {
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

export const Modal = ({
  onClick,
  title1,
  title2,
  subtitle,
  link,
  image,
  icon,
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
      <div className={s.modal}>
        <button type='button' className={s.closeModalBtn} onClick={onClick}>
          {/* <CloseModal /> */}
        </button>
        {/* <div className={s.imgThumb}> */}
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={image.className}
        />
        {/* </div> */}
        <p className={title1.className}>{title1.text}</p>
        <p className={title2.className}>{title2.text}</p>
        <p className={subtitle.className}>
          {subtitle.text}
          <span>
            <a className={link.className} href=''>
              {link.text}
            </a>
          </span>
        </p>

        <div className={s.btnContainer}>
          {button}
          {/* <button className={s.btn} type='button' onClick={onClick}>
            no
          </button> */}
        </div>
      </div>
    </div>
  );
};
