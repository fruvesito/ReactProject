import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Formulario from './Components/Formulario'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Formulario />
    <Footer />
  </React.StrictMode>,
)
