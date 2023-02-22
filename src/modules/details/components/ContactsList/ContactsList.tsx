import { useAppSelector } from '@hooks/hook'

import { ContactListItem } from '../ContactListItem/ContactListItem'

import css from './ContactsList.module.css'

export const ContactsList: React.FC = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts)
  const filter = useAppSelector((state) => state.filter)

  return (
    <ul className={css.contacts}>
      {contacts.map(
        ({ id, name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) && (
            <ContactListItem key={id} id={id} name={name} number={number} />
          )
      )}
    </ul>
  )
}
