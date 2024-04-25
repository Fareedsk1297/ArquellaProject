import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: any = {value:{}  };

export const sessionSlice = createSlice({
  name: 'Session',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    Session_Reducer_SetToken: (state:any, action: any) => {
    console.log(action.payload.data.access_token)
    state.value = action.payload;
    }
  },
})

export const {  Session_Reducer_SetToken } = sessionSlice.actions
export default sessionSlice.reducer


