import { useState, useContext, useRef } from 'react'

import SetDataContext from '../../context/context'
import './employees-add-form.css'

const EmployeesAddForm = () => {
  const [employee, setEmployee] = useState({ name: '', salary: '' })
  const { name, salary } = employee

  const dispatch = useContext(SetDataContext)

  const nameRef = useRef()
  const salaryRef = useRef()

  const onInputValueChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    nameRef.current.style.border = ''
    salaryRef.current.style.border = ''

    if (!(name.length > 2)) {
      nameRef.current.style.border = '3px solid red'
    }
    if (!(salary.length > 2)) {
      salaryRef.current.style.border = '3px solid red'
    }

    if (name.length > 2 && salary.length > 2) {
      dispatch({ type: 'add', payload: { name, salary } })

      setEmployee({
        name: '',
        salary: '',
      })
    }
  }

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex" onSubmit={onSubmitForm}>
        <input
          ref={nameRef}
          type="text"
          name="name"
          value={name}
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          onChange={onInputValueChange}
        />
        <input
          ref={salaryRef}
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
