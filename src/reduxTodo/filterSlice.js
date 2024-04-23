import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
   name: 'filter',
   initialState: '',
   reducers: {
     filteredTodos: (_, action) => {
       return action.payload;
     },
   },
});

export const { filteredTodos } = filterSlice.actions;
export default filterSlice.reducer;
export const selectFilter = state => state.filter;