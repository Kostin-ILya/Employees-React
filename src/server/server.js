import generateId from '../services/services'

const employeesData = [
  {
    name: 'John Smith',
    salary: 800,
    increase: false,
    rise: false,
    id: generateId(),
  },
  {
    name: 'Alex Black',
    salary: 1750,
    increase: false,
    rise: false,
    id: generateId(),
  },
  {
    name: 'Samantha Fox',
    salary: 3000,
    increase: true,
    rise: true,
    id: generateId(),
  },
]

export default employeesData
