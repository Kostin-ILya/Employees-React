import { useState, useReducer, useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import employeesData from '../../server/server'
import SetDataContext from '../../context/context'
import reducer from '../../reducer/reducer'

import {
  getEmployees,
  deleteEmployee,
  fetchEmployees,
} from '../../store/employeesSlice'

import './app.css'

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: employeesData.employess,
  })
  const { data } = state

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const dispatch2 = useDispatch()

  useEffect(() => {
    dispatch2(fetchEmployees())
  }, [])

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

  const increaseQuantity = data.filter((item) => item.increase).length
  const visibleData = filterItems(searchItem(data, search), filter)

  return (
    <SetDataContext.Provider value={dispatch}>
      <div className="app">
        <AppInfo
          itemsQuantity={data.length}
          increaseQuantity={increaseQuantity}
        />

        <div className="search-panel">
          <SearchPanel search={search} onUpdateSearch={onUpdateSearch} />
          <AppFilter filter={filter} onUpdateFilter={onUpdateFilter} />
        </div>

        <EmployeesList data={visibleData} />

        <EmployeesAddForm />
      </div>

      <button
        onClick={() => {
          dispatch2(deleteEmployee('3000b769leg7m679'))
          console.log(123)
        }}
      >
        32131231
      </button>
    </SetDataContext.Provider>
  )
}

export default App
