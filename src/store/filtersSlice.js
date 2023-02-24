import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { activeFilter: 'all', activeSearch: '' },
  reducers: {
    activeFilterChanged: (state, { payload }) => {
      state.activeFilter = payload
    },
    activeSearchChanged: (state, { payload }) => {
      state.activeSearch = payload
    },
  },
})

export const { activeFilterChanged, activeSearchChanged } = filtersSlice.actions

export default filtersSlice.reducer
