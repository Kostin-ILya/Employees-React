import { createSlice } from '@reduxjs/toolkit'

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

export const selectActiveSearch = (state) => state.filters.search
export const selectActiveFilter = (state) => state.filters.filter

export const { activeFilterChanged, activeSearchChanged } = filtersSlice.actions

export default filtersSlice.reducer
