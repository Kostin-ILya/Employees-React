import { useDispatch, useSelector } from 'react-redux'

import {
  activeSearchChanged,
  selectActiveSearch,
} from '../../store/filtersSlice'

const SearchPanel = () => {
  const dispatch = useDispatch()
  const search = useSelector(selectActiveSearch)

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
