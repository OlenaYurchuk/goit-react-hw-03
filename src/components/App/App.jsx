// import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
// import css from './App.module.css'
import initialContacts from '../../data/contacts.json'
import { useState } from 'react'

function App() {
  const [contacts, setContacts] = useState(initialContacts)
  const [searchItem, setSearchItem] = useState('');

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchItem.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox value={searchItem} onSearch={setSearchItem} />
      <ContactList contacts={visibleContacts} />
    </div>
  )
}

export default App
