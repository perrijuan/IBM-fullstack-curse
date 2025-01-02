import { createSlice } from "@reduxjs/toolkit";
export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "",
      name: "Sala de Conferências (Capacidade:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "",
      name: "Auditório (Capacidade:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "",
      name: "Sala de Apresentação (Capacidade:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "",
      name: "Sala de Reuniões Grande (Capacidade:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "",
      name: "Sala de Reuniões Pequena (Capacidade:5)",
      cost: 1100,
      quantity: 0,
    },
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditório (Capacidade:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});
export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;