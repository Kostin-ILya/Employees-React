const reducer = (state, action) => {
  switch (action.type) {
    case 'delete': {
      return {
        data: state.data.filter((item) => item.id !== action.payload.id),
      }
    }
    case 'add': {
      return {
        data: [...state.data, action.payload.newItem],
      }
    }
    case 'toggleProp': {
      const { id, prop } = action.payload

      return {
        data: state.data.map((item) => {
          if (item.id === id) {
            return { ...item, [prop]: !item[prop] }
          }
          return item
        }),
      }
    }
    case 'changeSalary': {
      const { id, salary } = action.payload

      return {
        data: state.data.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              salary: +salary.slice(0, -1),
            }
          }
          return item
        }),
      }
    }
    default:
      return state
  }
}

export default reducer
