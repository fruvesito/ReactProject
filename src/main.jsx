import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import Fondo from './Components/Fondo'
import Vange from './Components/Vange'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Fondo />
    <Navbar />
    <Vange></Vange>
  </React.StrictMode>,
)
