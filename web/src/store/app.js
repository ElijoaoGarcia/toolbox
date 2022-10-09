import { configureStore } from '@reduxjs/toolkit'
import filesReducer from './reducers/files'

export const store = configureStore({
  reducer: {
    filesReducer
  }
})

export default store
