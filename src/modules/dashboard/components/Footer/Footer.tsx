import React from 'react'

interface FooterProps {
  text: string
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer>
      <p>{text}</p>
    </footer>
  )
}

export default Footer
