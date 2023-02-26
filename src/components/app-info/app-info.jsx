import { useSelector } from 'react-redux/es/exports'

import { filteredEmployees } from '../../store/employeesSlice'

import './app-info.css'

const AppInfo = () => {
  const employees = useSelector(filteredEmployees)

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Microsoft</h1>
      <h2>Общее количество сотрудников: {employees.length}</h2>
      <h2>Премию получат: {employees.filter((emp) => emp.increase).length}</h2>
    </div>
  )
}

export default AppInfo
