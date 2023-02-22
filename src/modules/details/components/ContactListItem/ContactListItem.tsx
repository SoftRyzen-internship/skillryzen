import { FC } from 'react'

import { useAppDispatch } from '@hooks/hook'
import { deleteContact } from '@redux/contactsSlice/contactsSlice'

import css from './ContactListItem.module.css'

interface IItem {
  id: string
  name: string
  number: string
}

export const ContactListItem: FC<IItem> = ({ id, name, number }) => {
  const dispatch = useAppDispatch()

  return (
    <li className={css.contact}>
      {name}: {number}
      <button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </li>
  )
}
