import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

function App() {
  const some = [
    { name: 'John Smith', salary: 1000 },
    { name: 'Alex Martin', salary: 1750 },
    { name: 'Samantha Fox', salary: 3000, increase: true },
  ]

  return (
    <div className='app'>
      <AppInfo name='alex' surname='smith' data={{ age: 30 }} />

      <div className='search-panel'>
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={some} />
      <EmployeesAddForm />
    </div>
  )
}

export default App
