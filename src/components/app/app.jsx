import { useState } from 'react'
import generateId from '../../services/services'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

const App = () => {
  const [state, setState] = useState({
    data: [
      {
        name: 'John Smith',
        salary: 800,
        increase: false,
        rise: false,
        id: generateId(),
      },
      {
        name: 'Alex Black',
        salary: 1750,
        increase: false,
        rise: false,
        id: generateId(),
      },
      {
        name: 'Samantha Fox',
        salary: 3000,
        increase: true,
        rise: true,
        id: generateId(),
      },
    ],
    search: '',
    filter: 'all',
  })

  const { data, search, filter } = state

  const searchItem = (dataArr, str) => {
    if (str.length === 0) {
      return dataArr
    }

    return dataArr.filter(
      (item) => item.name.toLowerCase().indexOf(str.toLowerCase()) > -1
    )
  }

  const filterItems = (dataArr, activeFilter) => {
    switch (activeFilter) {
      case 'rised':
        return dataArr.filter((item) => item.rise)
      case 'more1000':
        return dataArr.filter((item) => item.salary > 1000)
      default:
        return dataArr
    }
  }

  const onToggleProp = (id, prop) => {
    setState((prevState) => ({
      ...prevState,
      data: prevState.data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      }),
    }))
  }

  const onChangeSalary = (id, value) => {
    setState((prevState) => ({
      ...prevState,
      data: prevState.data.map((item) => {
        if (item.id === id) {
          return { ...item, salary: +value.slice(0, -1) }
        }
        return item
      }),
    }))
  }

  const onAddItem = (name, salary) => {
    const newItem = {
      name,
      salary: +salary,
      increase: false,
      rise: false,
      id: generateId(),
    }

    setState((prevState) => ({
      ...prevState,
      data: [...prevState.data, newItem],
    }))
  }

  const onDeleteItem = (id) => {
    setState((prevState) => ({
      ...prevState,
      data: prevState.data.filter((item) => item.id !== id),
    }))
  }

  const onUpdateSearch = (activeSearch) => {
    setState((prevState) => ({
      ...prevState,
      search: activeSearch,
    }))
  }

  const onUpdateFilter = (activeFilter) => {
    setState((prevState) => ({
      ...prevState,
      filter: activeFilter,
    }))
  }

  const increaseQuantity = data.filter((item) => item.increase).length
  const visibleData = filterItems(searchItem(data, search), filter)

  return (
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
      <EmployeesAddForm onAddItem={onAddItem} />
    </div>
  )
}

export default App
