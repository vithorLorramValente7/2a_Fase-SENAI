import { useState } from 'react'
import './App.css'
import HomePages from './pages/HomePages'



function App() {
  const [homePage, setHomePage] = useState(true)

  return (
    <>
     
     
     
      <button>a</button>
{homePage && <HomePages/>}





    </>
  )
}

export default App
