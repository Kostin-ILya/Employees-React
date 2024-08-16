import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import Spinner from '../Spinner/Spinner'

import { fetchEmployees, selectLoadingStatus } from '../../store/employeesSlice'

import errorImg from '../Spinner/fail.png'

import styles from './app.module.scss'

const App = () => {
  const loadingStatus = useSelector(selectLoadingStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [])

  if (loadingStatus === 'loading') return <Spinner />
  if (loadingStatus === 'error')
    return <img className={styles.error} src={errorImg} alt="error" />

  return (
    <div className={styles.app}>
      <AppInfo />
      <div className={styles.searchPanel}>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList />
      <EmployeesAddForm />
    </div>
  )
}

export default App
