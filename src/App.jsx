import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/Sidebar";

function App() {


  return (
    <>
    <div className='tarefaPagina'>
    <Sidebar />
      <div className='container'>
        <div className='containerTitulo'>
           <h1 className='titulo'>Minha Lista</h1>
           <button className='btn'>Nova</button>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default App
