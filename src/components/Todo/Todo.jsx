import { Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { deleteTodos } from 'reduxTodo/todoSlice';
import { useDispatch } from 'react-redux';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{counter}
      </Text>

      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => dispatch(deleteTodos(id))}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};