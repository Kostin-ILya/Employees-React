import { useState, useReducer } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import employeesData from '../../server/server'
import SetDataContext from '../../context/context'
import reducer from '../../reducer/reducer'

import './app.css'

const App = () => {
  const [state, dispatch] = useReducer(reducer, { data: employeesData })
  const { data } = state

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

    return dataArr.filter(
      (item) =>
        item.name.toLowerCase().indexOf(currentSearch.toLowerCase()) > -1
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
    </SetDataContext.Provider>
  )
}

export default App
