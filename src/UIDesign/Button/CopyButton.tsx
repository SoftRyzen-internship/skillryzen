import s from './style/CopyButton.module.scss'

interface ButtonProps {
  type: 'button' | 'submit'
  onClick: () => void
}

const CopyButton = ({ type = 'button', onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${s.copyButton} 
      }`}
    >
      Copy
    </button>
  )
}

export default CopyButton
