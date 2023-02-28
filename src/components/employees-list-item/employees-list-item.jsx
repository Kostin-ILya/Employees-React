import { useDispatch } from 'react-redux'
import { useRef, useState } from 'react'
import clsx from 'clsx'

import { changeSalary, toggleProp } from '../../store/employeesSlice'

import styles from './employees-list-item.module.scss'

const EmployeesListItem = ({
  id,
  name,
  salary: salaryDB,
  increase,
  rise,
  onDeleteEmp,
}) => {
  const [salary, setSalary] = useState(salaryDB)
  const dispatch = useDispatch()
  const salaryInputRef = useRef(null)

  const onTogglePropHandler = (e, prop) => {
    dispatch(
      toggleProp({
        id,
        prop: e.currentTarget.dataset.toggle,
        value: !prop,
      })
    )
  }

  const spaceHandler = (e) => {
    if (e.code === 'Space') {
      e.preventDefault()

      onTogglePropHandler(e, rise)
    }
  }

  return (
    <li
      className={clsx(styles.listGroupItem, {
        increase,
        rise,
      })}
    >
      <span
        data-toggle="rise"
        tabIndex={0}
        className="list-group-item-label"
        onClick={(e) => onTogglePropHandler(e, rise)}
        onKeyDown={spaceHandler}
      >
        {name}
      </span>
      <input
        ref={salaryInputRef}
        type="text"
        className="list-group-item-input"
        value={`${salary}$`}
        onChange={(e) => setSalary(e.target.value.slice(0, -1))}
        onBlur={(e) =>
          salary !== salaryDB &&
          dispatch(changeSalary({ id, newSalary: e.target.value.slice(0, -1) }))
        }
        onFocus={() => {
          salaryInputRef.current.setSelectionRange(
            0,
            salaryInputRef.current.value.length - 1
          )
        }}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          data-toggle="increase"
          className={`${styles.btnCookie} btn-sm`}
          onClick={(e) => onTogglePropHandler(e, increase)}
        >
          <i className="fa fa-dollar-sign" />
        </button>

        <button
          type="button"
          className={`${styles.btnTrash} btn-sm`}
          onClick={() => onDeleteEmp(id)}
        >
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  )
}

export default EmployeesListItem
