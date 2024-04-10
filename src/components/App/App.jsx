import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import initialContacts from '../../data/contacts.json'
import { useState } from 'react'

function App() {
  const [contacts, setContacts] = useState(initialContacts)
  const [searchItem, setSearchItem] = useState('');

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    });
  }

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== contactId)
    })
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={searchItem} onSearch={setSearchItem} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App
