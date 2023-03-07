import { configureStore, createSlice } from '@reduxjs/toolkit'

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
      state.id = action.payload.id
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    updateCredentials: (state, action) => {
        state.email = action.payload.email
        state.password = action.payload.password
    },
    updateProfile: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    authFailed: (state) => {
      state.isAuth = false
      state.isRemember = false
    },
    resetState: (state, action) => {
      state.email = ''
      state.firstName = ''
      state.lastName =  ''
      state.isAuth = !action.payload.isAuth
    },
    rememberState: (state) => {
      state.isRemember = !state.isRemember
    },
    editState: (state) => {
      state.isEdit = !state.isEdit
    },
  }
})


export const {authSuccessful, authFailed, resetState, updateCredentials, updateProfile, editState, rememberState} =  loginSlice.actions

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer
  }
})


