import { useState } from 'react'
import { BrowserRouter ,Route,Routes  } from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
