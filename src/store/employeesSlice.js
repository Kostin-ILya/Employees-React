import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const employeesAdapter = createEntityAdapter({})

const fetchEmployees = createAsyncThunk(
  'employess/fetchEmployees',
  async () => {
    try {
      const res = await toast.promise(
        axios('https://63f64498ab76703b15bbfcf3.mockapi.io/users'),
        {
          pending: 'Loading of employees...',
          success: 'Employees are loaded',
          error: 'Data loading error',
        }
      )
      return res.data
    } catch (e) {
      throw e
    }
  }
)

const employeesSlice = createSlice({
  name: 'employees',
  initialState: employeesAdapter.getInitialState({
    dataLoadingStatus: 'idl',
  }),
  reducers: {
    addEmployee: employeesAdapter.addOne,
    deleteEmployee: employeesAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.dataLoadingStatus = 'loading'
      })
      .addCase(fetchEmployees.fulfilled, employeesAdapter.setAll)
      .addCase(fetchEmployees.rejected, (state) => {
        state.dataLoadingStatus = 'error'
      })
  },
})

export const { getEmployees, addEmployee, deleteEmployee } =
  employeesSlice.actions

export { fetchEmployees }
export default employeesSlice.reducer
