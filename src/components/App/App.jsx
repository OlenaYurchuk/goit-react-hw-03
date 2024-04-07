// import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
// import css from './App.module.css'
import contacts from '../../data/contacts.json'

function App() {

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
