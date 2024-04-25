import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter'
import  drawerReducer  from './features/drawer'
import  sessionReducer  from './features/SessionReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    drawerState : drawerReducer,
    Session_Reducer_SetToken:sessionReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch