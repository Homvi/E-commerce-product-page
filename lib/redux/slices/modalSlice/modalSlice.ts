/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: ModalSliceState = {
  value: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    closeModal: (state) => {
      state.value = null
    },
     // Use the PayloadAction type to declare the contents of `action.payload`
     changeImage: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

/* Types */
export interface ModalSliceState {
  value: number | null
}
