import clsx from 'clsx'

import './employees-list-item.css'

function EmployeesListItem({
  name,
  salary,
  increase,
  rise,
  deleteItem,
  onToggleProp,
  onChangeSalary,
}) {
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
        role="button"
        className="list-group-item-label"
        onClick={onToggleProp}
        onKeyDown={spaceHandler}
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={`${salary}$`}
        onChange={onChangeSalary}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          data-toggle="increase"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
        >
          {/*  <i className="fas fa-cookie" /> */}
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
