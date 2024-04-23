import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filteredTodos, selectFilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(filteredTodos(e.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
      onChange={handleFilter}
    />
  );
};