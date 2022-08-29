import './app-info.css'

const AppInfo = ({ itemsQuantity, increaseQuantity }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Microsoft</h1>
      <h2>Общее количество сотрудников: {itemsQuantity}</h2>
      <h2>Премию получат: {increaseQuantity}</h2>
    </div>
  )
}

export default AppInfo
