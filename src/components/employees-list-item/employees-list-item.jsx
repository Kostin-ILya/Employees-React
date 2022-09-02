import { useContext, useRef } from 'react'

import clsx from 'clsx'

import './employees-list-item.css'
import SetDataContext from '../../context/context'

const EmployeesListItem = ({ id, name, salary, increase, rise }) => {
  const dispatch = useContext(SetDataContext)

  const salaryInputRef = useRef(null)

  const onToggleProp = (e) => {
    dispatch({
      type: 'toggleProp',
      payload: { id, prop: e.currentTarget.dataset.toggle },
    })
  }

  const onDeleteItem = () => {
    dispatch({ type: 'delete', payload: { id } })
  }

  const onChangeSalary = (e) => {
    dispatch({ type: 'changeSalary', payload: { id, salary: e.target.value } })
  }

  const spaceHandler = (e) => {
    if (e.code === 'Space') {
      e.preventDefault()

      onToggleProp(e)
    }
  }

  const classNames = clsx('list-group-item d-flex justify-content-between', {
    increase,
    like: rise,
  })

  return (
    <li className={classNames}>
      <span
        data-toggle="rise"
        tabIndex={0}
        className="list-group-item-label"
        onClick={onToggleProp}
        onKeyDown={spaceHandler}
      >
        {name}
      </span>
      <input
        ref={salaryInputRef}
        type="text"
        className="list-group-item-input"
        value={`${salary}$`}
        onChange={onChangeSalary}
        onFocus={() => {
          const end = salaryInputRef.current.value.length - 1
          salaryInputRef.current.setSelectionRange(0, end)
        }}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          data-toggle="increase"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
        >
          <i className="fa fa-dollar-sign" />
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={onDeleteItem}
        >
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  )
}

export default EmployeesListItem
