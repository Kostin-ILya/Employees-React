import { useDispatch, useSelector } from 'react-redux'

import { activeSearchChanged } from '../../store/filtersSlice'
import './search-panel.css'

const SearchPanel = () => {
  const dispatch = useDispatch()
  const search = useSelector((state) => state.filters.activeSearch)

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={search}
      onChange={(e) => {
        dispatch(activeSearchChanged(e.target.value))
      }}
    />
  )
}

export default SearchPanel
