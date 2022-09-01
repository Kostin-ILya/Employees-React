import { useContext, useRef } from 'react'

import clsx from 'clsx'

import './employees-list-item.css'
import SetDataContext from '../../context/context'

const EmployeesListItem = ({ id, name, salary, increase, rise }) => {
  const context = useContext(SetDataContext)
  const { onDeleteItem, onToggleProp, onChangeSalary } = context

  const salaryInputRef = useRef(null)

  const classNames = clsx('list-group-item d-flex justify-content-between', {
    increase,
    like: rise,
  })

  const spaceHandler = (e) => {
    if (e.code === 'Space') {
      e.preventDefault()

      onToggleProp(id, e.currentTarget.dataset.toggle)
    }
  }

  return (
    <li className={classNames}>
      <span
        data-toggle="rise"
        tabIndex={0}
        className="list-group-item-label"
        onClick={(e) => {
          onToggleProp(id, e.currentTarget.dataset.toggle)
        }}
        onKeyDown={spaceHandler}
      >
        {name}
      </span>
      <input
        ref={salaryInputRef}
        type="text"
        className="list-group-item-input"
        value={`${salary}$`}
        onChange={(e) => {
          onChangeSalary(id, e.target.value)
        }}
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
          onClick={(e) => {
            onToggleProp(id, e.currentTarget.dataset.toggle)
          }}
        >
          <i className="fa fa-dollar-sign" />
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={() => {
            onDeleteItem(id)
          }}
        >
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  )
}

export default EmployeesListItem
