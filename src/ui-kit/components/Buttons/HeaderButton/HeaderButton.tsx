import { memo } from 'react';
import { Theme } from 'constans/types';
import s from './HeaderButton.module.scss';

interface HeaderButtonProps {
  imgUrl?: string;
  icon?: JSX.Element;
  indicatorNumber?: number;
  indicatorColor?: 'green' | 'yellow';
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  popupContent?: React.ReactNode;
  theme?: Theme;
  title?: string;
}

export const HeaderButton = memo(
  ({
    imgUrl,
    icon,
    indicatorNumber,
    indicatorColor,
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    popupContent,
    theme = 'dark',
    title = '',
  }: HeaderButtonProps) => {
    return (
      <div
        title={title}
        className={className ? `${s.container} ${className}` : s.container}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <button
          className={`${s.button} ${s[`button--${theme}`]}`}
          type='button'
          onClick={onClick}
        >
          {imgUrl && (
            <img
              className={s.buttonImg}
              src={imgUrl}
              width={40}
              height={40}
              alt='button-image'
            />
          )}
          {icon && icon}
        </button>
        {indicatorNumber ? (
          <div
            className={`${s.indicator} ${s[`indicator--${indicatorColor}`]}`}
          >
            {indicatorNumber}
          </div>
        ) : null}
        {popupContent ? <div className={s.popup}>{popupContent}</div> : null}
      </div>
    );
  }
);

HeaderButton.displayName = 'HeaderButton';
