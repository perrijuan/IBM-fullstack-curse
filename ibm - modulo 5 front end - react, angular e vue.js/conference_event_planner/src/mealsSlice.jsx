import { createSlice } from '@reduxjs/toolkit';
export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    { name: 'Café da Manhã', cost: 50, selected: false },
{ name: 'Chá da Tarde', cost: 25, selected: false },
{ name: 'Almoço', cost: 65, selected: false },
{ name: 'Jantar', cost: 70, selected: false },
   
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
        state[action.payload].selected = !state[action.payload].selected;
  },
  },
});
export const { toggleMealSelection } = mealsSlice.actions;
export default mealsSlice.reducer;