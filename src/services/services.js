const generateId = () =>
  Math.random().toString(16).slice(2, 10) + new Date().getTime().toString(36)

export default generateId
