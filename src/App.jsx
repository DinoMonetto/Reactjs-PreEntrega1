import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from '/.components/NavBar/NavBar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>MiniMercado</h1>
      <div className="card">
        <NavBar/>
      </div>
    </>
  )
}

export default App
