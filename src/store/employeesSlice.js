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
    return toast
      .promise(axios('https://63f64498ab76703b15bbfcf3.mockapi.io/users'), {
        pending: 'Loading of employees...',
        success: 'Employees are loaded',
        error: 'Data loading error',
      })
      .then((res) => res.data)
      .catch(errorHandler)
  }
)

const addEmployee = createAsyncThunk(
  'employess/addEmployee',
  async (newEmp) => {
    return toast
      .promise(
        axios.post('https://63f64498ab76703b15bbfcf3.mockapi.io/users', newEmp),
        {
          pending: 'Adding an employee...',
          success: 'Employees are added',
          error: 'Error adding an employee',
        }
      )
      .then((res) => res.data)
      .catch(errorHandler)
  }
)
const deleteEmployee = createAsyncThunk(
  'employess/deleteEmployee',
  async (id) => {
    return toast
      .promise(
        axios.delete(`https://63f64498ab76703b15bbfcf3.mockapi.io/users/${id}`),
        {
          pending: 'Deleting  an employee...',
          success: 'Employees are deleted',
          error: 'Error deleting an employee',
        }
      )
      .then((res) => res.data.id)
      .catch(errorHandler)
  }
)

const changeSalary = createAsyncThunk(
  'employess/changeSalary',
  async ({ id, newSalary }) => {
    return toast
      .promise(
        axios.put(`https://63f64498ab76703b15bbfcf3.mockapi.io/users/${id}`, {
          salary: newSalary,
        }),
        {
          pending: 'Changing a salary...',
          success: 'Salary changed',
          error: 'Data loading error',
        }
      )
      .then(() => ({ id, newSalary }))
      .catch(errorHandler)
  }
)
const toggleProp = createAsyncThunk(
  'employess/toggleProp',
  async ({ id, prop, value }) => {
    return toast
      .promise(
        axios.put(`https://63f64498ab76703b15bbfcf3.mockapi.io/users/${id}`, {
          [prop]: value,
        }),
        {
          pending: 'Changing a property...',
          success: `Employee ${
            prop === 'rise' ? 'promotion ' : 'bonus'
          } changed!`,
          error: 'Data loading error',
        }
      )
      .then(() => ({ id, prop, value }))
      .catch(errorHandler)
  }
)

const errorHandler = (error) => {
  console.log(error.toJSON())
  throw error
}

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
      .addCase(
        toggleProp.fulfilled,
        (state, { payload: { id, prop, value } }) => {
          employeesAdapter.updateOne(state, {
            id,
            changes: { [prop]: value },
          })
        }
      )
      .addCase(
        changeSalary.fulfilled,
        (state, { payload: { id, newSalary } }) => {
          employeesAdapter.updateOne(state, {
            id,
            changes: { salary: newSalary },
          })
        }
      )
      .addDefaultCase(() => {})
  },
})

const { selectAll } = employeesAdapter.getSelectors((state) => state.employees)

const selectLoadingStatus = (state) => state.employees.dataLoadingStatus

const filteredEmployees = createSelector(
  selectAll,
  (state) => state.filters.activeFilter,
  (state) => state.filters.activeSearch,
  (employees, filter, search) => {
    const filtered = employees.filter((item) => {
      if (filter === 'rised') return item.rise
      if (filter === 'more1000') return item.salary > 1000
      return true
    })

    return search
      ? filtered.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : filtered
  }
)

export {
  fetchEmployees,
  addEmployee,
  deleteEmployee,
  filteredEmployees,
  changeSalary,
  toggleProp,
  selectLoadingStatus,
}
export default employeesSlice.reducer
