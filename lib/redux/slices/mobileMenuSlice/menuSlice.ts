/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: MobileMenuSliceState = {
  value: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,

  reducers: {
    closeMenu: (state) => {
      state.value = false
    },
    openMenu: (state) => {
      state.value = true
    },
  },
})

/* Types */
export interface MobileMenuSliceState {
  value: boolean
}
