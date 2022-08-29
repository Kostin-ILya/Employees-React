import clsx from 'clsx'
import generateId from '../../services/services'

import './app-filter.css'

const AppFilter = ({ filter, onUpdateFilter }) => {
  const btnsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rised', label: ' На повышение' },
    { name: 'more1000', label: 'З/П больше 1000$' },
  ]

  const btns = btnsData.map(({ name, label }) => {
    const active = filter === name
    const classNames = clsx('btn', {
      'btn-light': active,
      'btn-outline-light': !active,
    })

    return (
      <button
        type="button"
        key={generateId()}
        name={name}
        className={classNames}
      >
        {label}
      </button>
    )
  })

  return (
    <div
      className="btn-group"
      onClick={(e) => {
        onUpdateFilter(e.target.name)
      }}
    >
      {btns}
    </div>
  )
}

export default AppFilter
