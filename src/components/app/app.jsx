import { useMemo, useState } from 'react'
import generateId from '../../services/services'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import MemoForm from '../employees-add-form/employees-add-form'

import employeesData from '../../server/server'
import './app.css'
import SetDataContext from '../../context/context'

const App = () => {
  const [data, setData] = useState(employeesData)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const onAddItem = (name, salary) => {
    const newItem = {
      name,
      salary: +salary,
      increase: false,
      rise: false,
      id: generateId(),
    }

    setData((prevData) => [...prevData, newItem])
  }

  const onDeleteItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id))
  }

  const onToggleProp = (id, prop) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      })
    )
  }

  const onChangeSalary = (id, value) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            salary: value.slice(0, -1).replace(/\D/gi, ''),
          }
        }
        return item
      })
    )
  }

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

  const setDataFn = useMemo(() => ({
    onDeleteItem,
    onToggleProp,
    onChangeSalary,
  }))

  const increaseQuantity = data.filter((item) => item.increase).length
  const visibleData = filterItems(searchItem(data, search), filter)

  return (
    <SetDataContext.Provider value={setDataFn}>
      <div className="app">
        <AppInfo
          itemsQuantity={data.length}
          increaseQuantity={increaseQuantity}
        />

        <div className="search-panel">
          <SearchPanel search={search} onUpdateSearch={onUpdateSearch} />
          <AppFilter filter={filter} onUpdateFilter={onUpdateFilter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDeleteItem={onDeleteItem}
          onToggleProp={onToggleProp}
          onChangeSalary={onChangeSalary}
        />

        <MemoForm onAddItem={onAddItem} />
      </div>
    </SetDataContext.Provider>
  )
}

export default App
