import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',

  initialState: {
    userData: null
  },

  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },

    removeUserData: (state) => {
      state.userData = null
    }
  },
})

// export actions
export const { setUserData, removeUserData } = userSlice.actions

// export reducer
export default userSlice.reducer