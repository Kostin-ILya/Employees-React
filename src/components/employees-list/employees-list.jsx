import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

function EmployeesList({ data, onDeleteItem, onToggleProp, onChangeSalary }) {
  const elements = data.map((item) => {
    const { id, ...props } = item

    return (
      <EmployeesListItem
        key={id}
        {...props}
        deleteItem={() => {
          onDeleteItem(id)
        }}
        onToggleProp={(e) => {
          onToggleProp(id, e.currentTarget.dataset.toggle)
        }}
        onChangeSalary={(e) => {
          onChangeSalary(id, e.target.value)
        }}
      />
    )
  })

  return <ul className="app-list list-group">{elements}</ul>
}

export default EmployeesList
