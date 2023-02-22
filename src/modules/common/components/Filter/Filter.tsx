import css from './Filter.module.css'
import { setFilter } from '@redux/filterSlice/filterSlice'

import { useAppSelector, useAppDispatch } from '@hooks/hook'

export const Filter = () => {
  const filter = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <label className={css.inputWrapper}>
      Find contacts by name
      <input
        onChange={handleChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Contact will contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        required
      />
    </label>
  )
}
