import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('josecesito')

  return (
    <>
      <div>hello world: {name}</div>
    </>
  )
}

export default App
