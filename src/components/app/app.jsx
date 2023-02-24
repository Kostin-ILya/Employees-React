import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import Spinner from '../Spinner/Spinner'

import SetDataContext from '../../context/context'

import {
  deleteEmployee,
  fetchEmployees,
  // selectAll as selectAllEmployees,
  filteredEmployees,
} from '../../store/employeesSlice'

import './app.css'
import errorImg from '../Spinner/fail.png'

const App = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //   data: employeesData.employess,
  // })
  // const { data } = state

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEmployees())
  }, [])

  const employees = useSelector(filteredEmployees)

  const loadingStatus = useSelector(
    (state) => state.employees.dataLoadingStatus
  )

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const onUpdateSearch = (activeSearch) => {
    setSearch(activeSearch)
  }

  const onUpdateFilter = (activeFilter) => {
    setFilter(activeFilter)
  }

  const searchItem = (dataArr, currentSearch) => {
    if (currentSearch.length === 0) {
      return dataArr
    }

    return dataArr.filter((item) =>
      item.name.toLowerCase().includes(currentSearch.toLowerCase())
    )
  }

  const filterItems = (dataArr, currentFilter) => {
    switch (currentFilter) {
      case 'rised':
        return dataArr.filter((item) => item.rise)
      case 'more1000':
        return dataArr.filter((item) => item.salary > 1000)
      default:
        return dataArr
    }
  }

  const increaseQuantity = employees.filter((item) => item.increase).length
  const visibleData = filterItems(searchItem(employees, search), filter)

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
    <SetDataContext.Provider value={dispatch}>
      <div className="app">
        <AppInfo
          itemsQuantity={employees.length}
          increaseQuantity={increaseQuantity}
        />

        <div className="search-panel">
          <SearchPanel search={search} onUpdateSearch={onUpdateSearch} />
          <AppFilter filter={filter} onUpdateFilter={onUpdateFilter} />
        </div>

        <EmployeesList data={employees} />

        <EmployeesAddForm />
      </div>
    </SetDataContext.Provider>
  )
}

export default App
