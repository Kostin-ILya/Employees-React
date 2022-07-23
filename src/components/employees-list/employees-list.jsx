import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

function EmployeesList({ data, onDelete }) {
  const elements = data.map((item) => {
    const { id, ...props } = item

    return (
      <EmployeesListItem
        key={id}
        onDelete={() => {
          onDelete(id)
        }}
        {...props}
      />
    )
    /* return <EmployeesListItem name={item.name} salary={item.salary} /> 
    идентичные записи */
  })

  return <ul className="app-list list-group">{elements}</ul>
}

export default EmployeesList
