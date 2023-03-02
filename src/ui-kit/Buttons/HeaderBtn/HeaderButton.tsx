import { Theme } from 'modules/common/types';
import s from './HeaderButton.module.scss';

interface HeaderButtonProps {
  icon: JSX.Element;
  IndicatorNumber?: number;
  IndicatorColor?: 'green' | 'yellow';
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  popupContent?: React.ReactNode;
  theme: Theme;
}

export const HeaderButton = ({
  icon,
  IndicatorNumber,
  IndicatorColor,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  popupContent,
  theme,
}: HeaderButtonProps) => {
  return (
    <div
      className={className ? `${s.container} ${className}` : s.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={`${s[`button--${theme}`]}`}
        type='button'
        onClick={onClick}
      >
        {icon}
      </button>
      {IndicatorNumber ? (
        <div className={`${s[`indicator--${IndicatorColor}`]}`}>
          {IndicatorNumber}
        </div>
      ) : null}
      {popupContent ? <div className={s.popup}>{popupContent}</div> : null}
    </div>
  );
};
