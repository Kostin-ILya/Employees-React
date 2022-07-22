import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

function App() {
  const data = [
    { name: 'John Smith', salary: 1000, increase: false, star: false, id: 1 },
    { name: 'Alex Black', salary: 1750, increase: false, star: false, id: 2 },
    { name: 'Samantha Fox', salary: 3000, increase: true, star: true, id: 3 },
  ]

  return (
    <div className="app">
      <AppInfo name="alex" surname="smith" data={{ age: 30 }} />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  )
}

export default App
