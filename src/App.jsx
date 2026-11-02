import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>React App</h1>
      <p>A basic React app powered by Node.js and Vite.</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </button>
    </main>
  )
}

export default App
