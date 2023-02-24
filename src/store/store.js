import { configureStore } from '@reduxjs/toolkit'

import employeesReducer from './employeesSlice'
import filtersReducer from './filtersSlice'

const store = configureStore({
  name: 'employees',
  reducer: { employees: employeesReducer, filters: filtersReducer },
})

export default store
