import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'

import { activeFilterChanged } from '../../store/filtersSlice'

import styles from './app-filter.module.scss'

const btns = [
  { name: 'all', label: 'Все сотрудники' },
  { name: 'rised', label: ' На повышение' },
  { name: 'more1000', label: 'З/П больше 1000$' },
]

const AppFilter = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector((state) => state.filters.activeFilter)

  return (
    <div
      className={styles.btnGroup}
      onClick={(e) => {
        dispatch(activeFilterChanged(e.target.name))
      }}
    >
      {btns.map(({ name, label }) => (
        <button
          type="button"
          key={name}
          name={name}
          className={clsx(
            'btn',
            name === activeFilter ? 'btn-light' : 'btn-outline-light'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default AppFilter
