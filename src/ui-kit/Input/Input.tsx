import s from './Input.module.scss';

interface IProps {
  className?: string;
  name: string;
  placeholder: string;
  type?: string;
  icon?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input = ({
  className,
  name,
  placeholder,
  type,
  icon,
  onChange,
  value,
}: IProps) => {
  return (
    <div className={s.inputContainer}>
      <input
        className={className ? className : s.input}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      <button className={icon ? s.iconVisible : s.iconHidden} type='button'>
        <img className={s.icon} src={icon} alt='Icon Search' />
      </button>
    </div>
  );
};
