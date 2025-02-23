import React, {useState} from 'react'
import './App.css'
import ToDo from './toDo.jsx'
import Timer from './Timer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <h1>To-Do-Ro</h1>
        </nav>
      </header>
      <Timer />
      <ToDo />
    </>
  )
}

export default App
