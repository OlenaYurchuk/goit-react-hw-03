import css from './SearchBox.module.css'

export default function SearchBox() {
  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input type="text" className={css.input} />
    </div>
  )
}