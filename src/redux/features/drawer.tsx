import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DrawerState {
  value: boolean
}

const initialState: DrawerState = {
  value: true,
}

export const drawerSlice = createSlice({
  name: 'Drawer',
  initialState,
  reducers: {
    drawerState: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {drawerState}  = drawerSlice.actions

export default drawerSlice.reducer