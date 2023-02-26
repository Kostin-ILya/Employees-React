import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux/'

import { deleteEmployee, filteredEmployees } from '../../store/employeesSlice'

import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = () => {
  const dispatch = useDispatch()
  const employees = useSelector(filteredEmployees)

  const onDeleteEmp = useCallback((id) => {
    dispatch(deleteEmployee(id))
  }, [])

  return (
    <ul className="app-list list-group">
      {employees.length ? (
        employees.map(({ id, ...props }) => (
          <EmployeesListItem
            key={id}
            id={id}
            onDeleteEmp={onDeleteEmp}
            {...props}
          />
        ))
      ) : (
        <h2 style={{ textAlign: 'center' }}>No employees found</h2>
      )}
    </ul>
  )
}

export default EmployeesList
