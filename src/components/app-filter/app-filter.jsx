import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import clsx from 'clsx'

import './app-filter.css'

class AppFilter extends Component {
  onFilterItems = (e) => {
    this.props.onUpdateFilter(e.target.name)
  }

  render() {
    const btnData = [
      { name: 'all', label: 'Все сотрудники' },
      { name: 'rised', label: ' На повышение' },
      { name: 'more1000', label: 'З/П больше 1000$' },
    ]

    const btns = btnData.map(({ name, label }) => {
      const active = this.props.filter === name
      const classes = clsx('btn', {
        'btn-light': active,
        'btn-outline-light': !active,
      })
      return (
        <button type="button" key={uuidv4()} name={name} className={classes}>
          {label}
        </button>
      )
    })

    return (
      <div className="btn-group" onClick={this.onFilterItems}>
        {/* <button type="button" name="all" className="btn btn-light">
          Все сотрудники
        </button>
        <button type="button" name="rised" className="btn btn-outline-light">
          На повышение
        </button>
        <button type="button" name="more1000" className="btn btn-outline-light">
          З/П больше 1000$
        </button> */}
        {btns}
      </div>
    )
  }
}

export default AppFilter
