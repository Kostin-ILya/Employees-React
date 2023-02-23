import { configureStore } from '@reduxjs/toolkit'

import reducer from './employeesSlice'

const store = configureStore({
  name: 'employees',
  reducer,
})

export default store
