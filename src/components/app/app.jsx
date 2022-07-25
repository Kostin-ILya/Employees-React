import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'John Smith',
          salary: 1000,
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

  addItem = (name, salary) => {
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

  deleteItem = (id) => {
    const { data } = this.state
    this.setState({
      data: data.filter((item) => item.id !== id),
    })
  }

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

  render() {
    const { data } = this.state
    const increaseQuantity = data.filter(
      (item) => item.increase === true
    ).length

    return (
      <div className="app">
        <AppInfo
          itemsQuantity={data.length}
          increaseQuantity={increaseQuantity}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={data}
          deleteItem={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App
