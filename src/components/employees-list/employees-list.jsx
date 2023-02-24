import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux/'

import { deleteEmployee } from '../../store/employeesSlice'

import EmployeesListItem from '../employees-list-item/employees-list-item'
import Spinner from '../Spinner/Spinner'

import './employees-list.css'

const EmployeesList = ({ data }) => {
  const dispatch = useDispatch()
  const loadingStatus = useSelector(
    (state) => state.employees.dataLoadingStatus
  )

  const onDeleteEmp = useCallback((id) => {
    dispatch(deleteEmployee(id))
  }, [])

  if (loadingStatus === 'loading') return <Spinner />
  // else if (loadingStatus === 'error') return <img src={fail} alt="error" />

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
