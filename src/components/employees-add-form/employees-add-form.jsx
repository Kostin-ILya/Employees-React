import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import generateId from '../../services/services'
import './employees-add-form.css'

import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { addEmployee } from '../../store/employeesSlice'
import SetDataContext from '../../context/context'

const EmployeesAddForm = () => {
  const dispatch = useContext(SetDataContext)
  const dispatch1 = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({ mode: 'onBlur' })

  const onSubmit = ({ name, salary }) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: generateId(),
    }

    dispatch({ type: 'add', payload: { newItem } })
    dispatch1(addEmployee(newItem))
    reset()
  }

  return (
    <div className="app-add-form">
      <label htmlFor="name">Добавьте нового сотрудника</label>

      <form className="add-form d-flex" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="name"
          className="form-control new-post-label"
          style={{ border: errors?.name ? '3px solid red' : null }}
          type="text"
          placeholder="Как его зовут?"
          {...register('name', {
            required: 'Укажите имя',
            minLength: { value: 2, message: 'Минимум 2 символа' },
          })}
        />

        <input
          className="form-control new-post-label"
          style={{ border: errors?.salary ? '3px solid red' : null }}
          placeholder="З/П в $?"
          {...register('salary', {
            required: 'Укажите зарплату',
            minLength: { value: 3, message: 'Минимум 3 цифры' },
          })}
        />

        <button
          type="submit"
          className="btn btn-outline-light"
          disabled={!isValid || isSubmitting}
        >
          Добавить
        </button>
      </form>
      <div className="errors__wrapper">
        <div>{errors?.name && errors?.name?.message} </div>
        <div>{errors?.salary && errors?.salary?.message}</div>
      </div>
    </div>
  )
}

export default EmployeesAddForm
