/* Instruments */
import { cartSlice, modalSlice } from './slices'

export const reducer = {
  cart: cartSlice.reducer,
  modal: modalSlice.reducer,
}
