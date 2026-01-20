import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AppLayout from './layouts/AppLayout'
import Container from './layouts/Container'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppLayout>
    <Container>
    
      <Navbar/>
      <Home/>
    
    </Container>
    </AppLayout>
      
    </>
  )
}

export default App
