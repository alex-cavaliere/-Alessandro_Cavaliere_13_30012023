import { configureStore, createAction, createSlice } from '@reduxjs/toolkit'

// Action Creator

//export const userLogin = createAction('user/auth')

// Reducer 

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isRemember: false
  },
  reducers: {
    authSuccessful: (state, action) => {
      state.isAuth = true
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    updateCredentials: (state, action) => {
        state.email = action.payload.email
        state.password = action.payload.password
    },
    authFailed: (state) => {
      state.isAuth = false
    },
    resetState: (state, action) => {
      action.payload.email = ''
      action.payload.firstName = ''
      action.payload.lastName = ''
      action.payload.isAuth = false
    },
    rememberState: (state) => {
      state.isRemember = !state.isRemember
    }
  }
})
export const {authSuccessful, authFailed, resetState, updateCredentials, rememberState} =  loginSlice.actions

export const store = configureStore({
  reducer: {
  login: loginSlice.reducer
  }
})


