/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: CartSliceState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    deleteItem: (state) => {
      state.value = 0
    },
     // Use the PayloadAction type to declare the contents of `action.payload`
     incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

/* Types */
export interface CartSliceState {
  value: number
}
