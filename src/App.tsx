import { useState } from 'react'
import './styles/App.scss'
import Header from './components/Header'
import Section from './components/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Section />
    </div>
  )
}

export default App
