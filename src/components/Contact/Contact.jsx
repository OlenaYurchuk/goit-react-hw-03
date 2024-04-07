import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

export default function Contact({ contact: { name, number } }) {
  return (
    <div className={css.wrap}>
      <div>
        <p><FaUser /> {name}</p>
        <p><FaPhone /> {number}</p>
      </div>
      <button className={css.btn}>Delete</button>
    </div>
  )
}