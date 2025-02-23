import React, {useState} from 'react'
import './App.css'
import ToDo from './toDo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>To-Do-Ro</nav>
      </header>

      <ToDo />
    </>
  )
}

export default App
