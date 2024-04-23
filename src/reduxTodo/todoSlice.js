import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: { items: [] },
};

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos.items.push(action.payload);
    },
    deleteTodos: (state, action) => {
      state.todos.items = state.todos.items.filter(
        todo => todo.id !== action.payload,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodos, deleteTodos } = toDoSlice.actions;

export default toDoSlice.reducer;