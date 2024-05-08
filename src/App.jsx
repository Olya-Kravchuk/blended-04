import { Section, Container, Header, TodoList, Form, Filter, EditForm } from 'components';
import { useSelector } from 'react-redux';
import { selectCurrentToDo } from 'reduxTodo/todoSlice';

export const App = () => {
  const isEdit = useSelector(selectCurrentToDo)
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form/> : <EditForm/>}
          <Filter/>
          <TodoList/>
        </Container>
      </Section>
    </>
  );
};
