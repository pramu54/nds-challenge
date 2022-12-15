import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
  sidebarNarrowed: false
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = configureStore({reducer: changeState})
export default store