import { Section, ContactForm, ContactsList, Filter } from './modules/index'
import image from './assets/logo.svg'

import { useAppSelector } from './hooks/hook'

export const App = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts)

  return (
    <main className="app-wrapper">
      <Section title="Phonebook">
        <ContactForm />
        <img src={image} alt="" />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <p>There are no contacts yet...</p>
        )}
      </Section>
    </main>
  )
}
