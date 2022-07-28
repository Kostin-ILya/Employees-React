import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
  static searchItem(dataArr, str) {
    if (str.length === 0) {
      return dataArr
    }

    return dataArr.filter(
      (item) => item.name.toLowerCase().indexOf(str.toLowerCase()) > -1
    )
  }

  static filterItems(dataArr, filter) {
    switch (filter) {
      case 'rised':
        return dataArr.filter((item) => item.rise)
      case 'more1000':
        return dataArr.filter((item) => item.salary > 1500)
      default:
        return dataArr
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'John Smith',
          salary: 800,
          increase: false,
          rise: false,
          id: 1,
        },
        {
          name: 'Alex Black',
          salary: 1750,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: 'Samantha Fox',
          salary: 3000,
          increase: true,
          rise: true,
          id: 3,
        },
      ],
      search: '',
      filter: 'all',
    }
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      }),
    }))
  }

  onAddItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: uuidv4(),
    }

    this.setState((prevState) => ({
      data: [...prevState.data, newItem],
    }))
  }

  onDeleteItem = (id) => {
    const { data } = this.state
    this.setState({
      data: data.filter((item) => item.id !== id),
    })
  }

  onUpdateSearch = (search) => {
    this.setState({ search })
  }

  onUpdateFilter = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { data, search, filter } = this.state
    const increaseQuantity = data.filter(
      (item) => item.increase === true
    ).length
    const visibleData = App.filterItems(App.searchItem(data, search), filter)

    return (
      <div className="app">
        <AppInfo
          itemsQuantity={data.length}
          increaseQuantity={increaseQuantity}
        />

        <div className="search-panel">
          <SearchPanel search={search} onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDeleteItem={this.onDeleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAddItem={this.onAddItem} />
      </div>
    )
  }
}

export default App

// onToggleIncrease = (id) => {
//   this.setState(({ data }) => ({
//     data: data.map((item) => {
//       if (item.id === id) {
//         return { ...item, increase: !item.increase }
//       }
//       return item
//     }),
//   }))
// }

// onToggleRise = (id) => {
//   this.setState(({ data }) => ({
//     data: data.map((item) => {
//       if (item.id === id) {
//         return { ...item, rise: !item.rise }
//       }
//       return item
//     }),
//   }))
// }
