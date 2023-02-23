import { useCallback } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

import { deleteEmployee } from '../../store/employeesSlice'

import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({ data }) => {
  const dispatch1 = useDispatch()

  const onDeleteEmp = useCallback((id) => {
    dispatch1(deleteEmployee(id))
  }, [])

  const elements = data.map((item) => {
    const { id, ...props } = item

    return (
      <EmployeesListItem
        key={id}
        id={id}
        onDeleteEmp={onDeleteEmp}
        {...props}
      />
    )
  })

  return <ul className="app-list list-group">{elements}</ul>
}

export default EmployeesList
