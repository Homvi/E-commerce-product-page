/* Instruments */
import { cartSlice, modalSlice, menuSlice } from './slices'

export const reducer = {
  cart: cartSlice.reducer,
  modal: modalSlice.reducer,
  menu: menuSlice.reducer,
}
