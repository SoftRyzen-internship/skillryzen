import s from './Input.module.scss';

interface IProps {
  className?: string;
  name: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  icon?: JSX.Element;
  button?: boolean;
}

export const Input = ({
  className,
  name,
  placeholder,
  type,
  icon,
  onChange,
  value,
  button,
}: IProps) => {
  return (
    <label className={s.inputContainer}>
      <input
        className={`${s.input} ${className && className}`}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      {button && (
        <button className={icon ? s.iconVisible : s.iconHidden} type='button'>
          {icon ? <div className={s.icon}>{icon}</div> : null}
        </button>
      )}
    </label>
  );
};
