import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux/'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { deleteEmployee, filteredEmployees } from '../../store/employeesSlice'

import EmployeesListItem from '../employees-list-item/employees-list-item'

import styles from './employees-list.module.scss'

const EmployeesList = () => {
  const dispatch = useDispatch()
  const employees = useSelector(filteredEmployees)

  const onDeleteEmp = useCallback((id) => {
    dispatch(deleteEmployee(id))
  }, [])

  return (
    <TransitionGroup component="ul" className={styles.list}>
      {employees.length ? (
        employees.map(({ id, ...props }) => (
          <CSSTransition key={id} timeout={300} classNames="item">
            <EmployeesListItem id={id} onDeleteEmp={onDeleteEmp} {...props} />
          </CSSTransition>
        ))
      ) : (
        <CSSTransition timeout={300} classNames="item">
          <h2 style={{ textAlign: 'center' }}>No employees found</h2>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

export default EmployeesList
