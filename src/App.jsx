import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <Header />
      <Jumbotron />
    </div>
  )
}

export default App
