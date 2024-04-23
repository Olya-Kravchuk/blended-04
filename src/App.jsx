import { Section, Container, Header, TodoList, Form, Filter } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form/>
          <Filter/>
          <TodoList/>
        </Container>
      </Section>
    </>
  );
};
