import { useState } from 'react'

import './employees-add-form.css'

const EmployeesAddForm = ({ onAddItem }) => {
  const [employee, setEmployee] = useState({ name: '', salary: '' })
  const { name, salary } = employee

  const onInputValueChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()

    if (name.length > 2 && salary.length > 2) {
      onAddItem(name, salary)
    }

    setEmployee({
      name: '',
      salary: '',
    })
  }

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          value={name}
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          onChange={onInputValueChange}
        />
        <input
          type="number"
          name="salary"
          value={salary}
          className="form-control new-post-label"
          placeholder="З/П в $?"
          onChange={onInputValueChange}
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  )
}

export default EmployeesAddForm
