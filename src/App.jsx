import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home'
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
        <Header/>
        <Home/>
    </div>
  )
}

export default App
