import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import Spinner from '../Spinner/Spinner'

import { fetchEmployees } from '../../store/employeesSlice'

import './app.css'
import errorImg from '../Spinner/fail.png'

const App = () => {
  const loadingStatus = useSelector(
    (state) => state.employees.dataLoadingStatus
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [])

  if (loadingStatus === 'loading') return <Spinner />
  if (loadingStatus === 'error')
    return (
      <img
        style={{ margin: '50vh auto', display: 'block', width: 300 }}
        src={errorImg}
        alt="error"
      />
    )

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList />
      <EmployeesAddForm />
    </div>
  )
}

export default App
