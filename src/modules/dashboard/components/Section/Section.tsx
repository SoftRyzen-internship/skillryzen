import React, { FC } from 'react'

interface ISection {
  title: string
  children: React.ReactNode
}

export const Section: FC<ISection> = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
)
