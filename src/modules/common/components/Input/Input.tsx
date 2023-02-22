interface IInput {
  type: string
  name: string
  pattern: string
  title: string
  value: string
  required: boolean
  border: string
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({
  type,
  name,
  pattern,
  title,
  value,
  required,
  border,
  onChange,
  placeholder,
}: IInput) => {
  const style = {
    border: `${border}`,
  }

  return (
    <input
      style={style}
      onChange={onChange}
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      value={value}
      placeholder={placeholder}
      required={required}
    />
  )
}
