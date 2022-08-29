import './search-panel.css'

const SearchPanel = ({ str, onUpdateSearch }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={str}
      onChange={(e) => {
        onUpdateSearch(e.target.value)
      }}
    />
  )
}

export default SearchPanel
