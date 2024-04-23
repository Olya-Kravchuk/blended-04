import { Text, GridItem, Grid, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filterSlice';

export const TodoList = () => {
  const toDos = useSelector(state => state.toDo.todos.items);
  console.log(toDos);

  const filter = useSelector(selectFilter);

  const filteredTodos = toDos.filter(toDo =>
    toDo.text.toLowerCase().includes(filter.toLowerCase()),
  );
  console.log(filteredTodos);

  return (
    <>
      {filteredTodos.length === 0 ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {filteredTodos.map(({ text, id }, index) => (
            <GridItem key={id}>
              <Todo text={text} counter={index + 1} id={id} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};