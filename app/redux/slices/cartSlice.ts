// slices/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, AddToCartAction } from './cartTypes';

const initialState: CartState = 0;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>): CartState => {
      return state + action.payload;
    },
    setCart: (state, action: PayloadAction<number>): CartState => {
      return action.payload; // Directly set the state to the payload value
    }
  }
});

export const { addToCart, setCart  } = cartSlice.actions;
export default cartSlice.reducer;
