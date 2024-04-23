import { FiSearch } from 'react-icons/fi';
import { addTodos } from 'reduxTodo/todoSlice';
import { useDispatch } from 'react-redux';
import style from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.elements.search.value.trim()    

    dispatch(addTodos({text: value, id: nanoid()}))
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
