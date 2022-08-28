import { Component } from 'react'

import './employees-add-form.css'

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      salary: '',
    }
  }

  onInputValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmitForm = (e) => {
    e.preventDefault()

    const { name, salary } = this.state
    if (name.length > 3 && salary.length > 2) {
      this.props.onAddItem(name, salary)
    }

    this.setState({
      name: '',
      salary: '',
    })
  }

  render() {
    const { name, salary } = this.state

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmitForm}>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            onChange={this.onInputValueChange}
          />
          <input
            type="number"
            name="salary"
            value={salary}
            className="form-control new-post-label"
            placeholder="З/П в $?"
            onChange={this.onInputValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm
