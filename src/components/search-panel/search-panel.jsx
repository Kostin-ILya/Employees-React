import { Component } from 'react'

import './search-panel.css'

class SearchPanel extends Component {
  onUpdateSearch = (e) => {
    const { onUpdateSearch } = this.props
    onUpdateSearch(e.target.value)
  }

  render() {
    const { str } = this.props
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={str}
        onChange={this.onUpdateSearch}
      />
    )
  }
}

export default SearchPanel
