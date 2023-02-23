import { configureStore, createAction, createSlice } from '@reduxjs/toolkit'

// Action Creator

//export const userLogin = createAction('user/auth')

// Reducer 

const loginSlice = createSlice({
  name: 'login',
  initialState: {
  },
  reducers: {
    authSuccessful: (state, action) => {
        state.authSucces = true
        state.email = action.payload.email
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
    },
    authFailed: (state, action) => {
      state.authSucces = false
      state.error = action.payload
    },
    credentials: (state, action) => {
      state.email = action.payload.email
      state.password = action.payload.password
    },
    updateState: (state, action) => {
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    }
  }
})
export const {authSuccessful, authFailed, credentials, updateState} =  loginSlice.actions

export const store = configureStore({
  reducer: {
  login: loginSlice.reducer
  }
})


