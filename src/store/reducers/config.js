import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coreSetting: [],
  tags: {},
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    getTags: (state, action) => {
      return { ...state, tags: action.payload }
    },
    getCoreSetting: (state, action) => {
      return { ...state, coreSetting: action.payload }
    },
  },
})

export const { getTags, getCoreSetting } = configSlice.actions

export default configSlice.reducer
