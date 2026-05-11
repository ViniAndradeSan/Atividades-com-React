  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from './assets/vite.svg'
  import heroImg from './assets/hero.png'
  import './App.css'
  import Cabecalho from './components/Cabecalho'
  import Letreiro from './components/letreiro'

  function App() {
    return (
       <>
        <Cabecalho />
        <div>
          <h1>Ola mundo</h1>
        </div>
       </>
    )
  }


  export default App
