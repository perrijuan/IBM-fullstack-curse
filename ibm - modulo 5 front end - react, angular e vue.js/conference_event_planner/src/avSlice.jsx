
import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "",
        name: "Projetores",
        cost: 200,
        quantity: 0,
    },
    {
        img: "",
        name: "Caixa de Som",
        cost: 35,
        quantity: 0,
    },
    {
        img: "",
        name: "Microfones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "",
        name: "Quadros Brancos",
        cost: 80,
        quantity: 0,
    },

    {
        img: "",
        name: "Sinalização",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;