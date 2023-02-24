import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const employeesAdapter = createEntityAdapter({})

const fetchEmployees = createAsyncThunk(
  'employess/fetchEmployees',
  async () => {
    const res = await toast.promise(
      axios('https://63f64498ab76703b15bbfcf3.mockapi.io/users'),
      {
        pending: 'Loading of employees...',
        success: 'Employees are loaded',
        error: 'Data loading error',
      }
    )
    return res.data
  }
)

const addEmployee = createAsyncThunk(
  'employess/addEmployee',
  async (newEmp) => {
    const res = await toast.promise(
      axios.post('https://63f64498ab76703b15bbfcf3.mockapi.io/users', newEmp),
      {
        pending: 'Adding an employee...',
        success: 'Employees are added',
        error: 'Error adding an employee',
      }
    )
    return res.data
  }
)
const deleteEmployee = createAsyncThunk(
  'employess/deleteEmployee',
  async (id) => {
    const res = await toast.promise(
      axios.delete(`https://63f64498ab76703b15bbfcf3.mockapi.io/users/${id}`),
      {
        pending: 'Deleting  an employee...',
        success: 'Employees are deleted',
        error: 'Error deleting an employee',
      }
    )
    return res.data.id
  }
)

const employeesSlice = createSlice({
  name: 'employees',
  initialState: employeesAdapter.getInitialState({
    dataLoadingStatus: 'idl',
  }),
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.dataLoadingStatus = 'loading'
      })
      .addCase(fetchEmployees.fulfilled, (state, { payload }) => {
        state.dataLoadingStatus = 'idle'
        employeesAdapter.setAll(state, payload)
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.dataLoadingStatus = 'error'
      })
      .addCase(addEmployee.fulfilled, employeesAdapter.addOne)
      .addCase(deleteEmployee.fulfilled, employeesAdapter.removeOne)
  },
})

const { selectAll } = employeesAdapter.getSelectors((state) => state.employees)

const filteredEmployees = createSelector(
  selectAll,
  (state) => state.filters.activeFilter,
  (state) => state.filters.activeSearch,
  (employees, filter, search) => {
    let data = []
    switch (filter) {
      case 'rised':
        data = employees.filter((item) => item.rise)
        break
      case 'more1000':
        data = employees.filter((item) => item.salary > 1000)
        break
      default:
        data = employees
    }

    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    return data
  }
)

export { fetchEmployees, addEmployee, deleteEmployee, filteredEmployees }
export default employeesSlice.reducer
