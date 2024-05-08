import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: { items: [] },
  currentToDo: null,
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
    addCurrentToDo: (state, action) => {
      state.currentToDo = action.payload;
    },
    updateToDo: (state, action) => {
      state.todos.items = state.todos.items.map(todo => 
        todo.id === state.currentToDo.id ? {...todo, text: action.payload} : todo
      )
    }
  },
  selectors: {
    selectCurrentToDo: state => state.currentToDo
  }
});

// Action creators are generated for each case reducer function
export const { addTodos, deleteTodos, addCurrentToDo, updateToDo } = toDoSlice.actions;
export const {selectCurrentToDo} = toDoSlice.selectors;
export default toDoSlice.reducer;