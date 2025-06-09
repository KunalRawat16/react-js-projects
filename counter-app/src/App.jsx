import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () =>{
    setCount(count+1)
  }

   const decrease = () =>{
    setCount(count-1)
  }

  return (
    <>
    <h1>Counter App</h1>
    <h3>counter value {count} </h3>
    <button onClick={increase}>increase {count}</button>
    <br />
    <br />
    <button onClick={decrease}>decrease {count}</button>

    </>
  )
}

export default App
