import { useRef } from 'react'
import clsx from 'clsx'

import './employees-list-item.css'

const EmployeesListItem = ({
  name,
  salary,
  increase,
  rise,
  deleteItem,
  onToggleProp,
  onChangeSalary,
}) => {
  const salaryRef = useRef(null)

  const classNames = clsx('list-group-item d-flex justify-content-between', {
    increase,
    like: rise,
  })

  const spaceHandler = (e) => {
    if (e.code === 'Space') {
      e.preventDefault()

      onToggleProp(e)
    }
  }

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
        ref={salaryRef}
        type="text"
        className="list-group-item-input"
        value={salary + '$'}
        onChange={onChangeSalary}
        onFocus={() => {
          const end = salaryRef.current.value.length - 1
          salaryRef.current.setSelectionRange(0, end)
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
          onClick={deleteItem}
        >
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  )
}

export default EmployeesListItem
