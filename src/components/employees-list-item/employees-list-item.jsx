import { Component } from 'react'
import clsx from 'clsx'

import './employees-list-item.css'

class EmployeesListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      increase: this.props.increase,
      star: this.props.star,
    }
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }))
  }

  onRise = () => {
    this.setState(({ star }) => ({
      star: !star,
    }))
  }

  render() {
    const { name, salary } = this.props
    const { increase, star } = this.state

    const classNames = clsx('list-group-item d-flex justify-content-between', {
      increase: increase,
      like: star,
    })

    return (
      <li className={classNames}>
        <span className='list-group-item-label' onClick={this.onRise}>
          {name}
        </span>
        <input
          type='text'
          className='list-group-item-input'
          defaultValue={salary + '$'}
        />
        <div className='d-flex justify-content-center align-items-center'>
          <button
            type='button'
            className='btn-cookie btn-sm'
            onClick={this.onIncrease}
          >
            <i className='fas fa-cookie'></i>
          </button>

          <button type='button' className='btn-trash btn-sm '>
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    )
  }
}

export default EmployeesListItem

// const classNames = objstr({
//   'list-group-item d-flex justify-content-between': true,
//   'increase': increase,
//   'like': star,
// })

// Работа с классами без библиотек
// const classNames =
//   increase && star
//     ? 'list-group-item d-flex justify-content-between increase like'
//     : increase
//     ? 'list-group-item d-flex justify-content-between increase'
//     : star
//     ? 'list-group-item d-flex justify-content-between like'
//     : 'list-group-item d-flex justify-content-between '

/*   let classNames
    if (increase && star) {
      classNames =
        'list-group-item d-flex justify-content-between increase like'
    } else if (increase) {
      classNames = 'list-group-item d-flex justify-content-between increase'
    } else if (star) {
      classNames = 'list-group-item d-flex justify-content-between like'
    } else {
      classNames = 'list-group-item d-flex justify-content-between '
    } */

// let classes = 'list-group-item d-flex justify-content-between'
// if (increase) {
//   classes += ' increase'
// }
