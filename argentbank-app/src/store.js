import { configureStore, createAction, createSlice } from '@reduxjs/toolkit'

// Action Creator

//export const userLogin = createAction('user/auth')

// Reducer 

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    authSucces: false
  },
  reducers: {
    authSuccessful: (state) => {
        state.authSucces = true
    },
    authFailed: (state, action) => {
      state.authSucces = false
      state.email = action.payload
    }
  }
})
export const {authSuccessful, authFailed} =  loginSlice.actions

export const store = configureStore({
  reducer: {
  login: loginSlice.reducer
  }
})


