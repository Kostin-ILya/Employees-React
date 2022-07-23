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
          star: false,
          id: 1,
        },
        {
          name: 'Alex Black',
          salary: 1750,
          increase: false,
          star: false,
          id: 2,
        },
        {
          name: 'Samantha Fox',
          salary: 3000,
          increase: true,
          star: true,
          id: 3,
        },
      ],
    }
  }

  deleteItem = (id) => {
    const { data } = this.state
    this.setState({
      data: data.filter((item) => item.id !== id),
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      star: false,
      id: uuidv4(),
    }

    this.setState((prevState) => ({
      data: [...prevState.data, newItem],
    }))
  }

  render() {
    const { data } = this.state
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )
  }
}

export default App
