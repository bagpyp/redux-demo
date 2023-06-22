import './App.css'
import { useSelector } from 'react-redux'

export default function App() {
  const pizza = useSelector((state) => {
    return state.pizza
  })

  return (
    <div className="App">
      <h1>Pizza</h1>

      {pizza.toppings}
    </div>
  )
}
