import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function hov (){

  return (
    <div>

      <p>LOVE YOUR SKIN</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    
  
    <div className="App">
      <div className='men'>
    

<img src="Free_Sample_By_Wix22222.jpg" className='LOGO' alt="" />
        <ul class="menu-horizontal">
      <li>
        <a className='productos' href="#">P R O D U C T O S </a>
        <ul class="menu-vertical">
            <li><button>CREMAS HIDRATANTES</button></li>
            <li><button>MANTECAS CORPORALES</button> </li>
            <li> <button>EXFOLIANTES</button></li>
            <li> <button>JABONES</button></li>
            <li><button>ACCESORIOS</button></li>
        </ ul>
    </li>

    </ul>
    <button onClick={() => setCount((count) => count + 1)}className='botoncarrito'>
    <img src="bolso.png" alt="" />{count}
  </button>
      </div>
     


      <div className="card">

<img src="purple.jpg" alt="" className='watermelon' onMouseMove={hov} />
<img src="rosy.jpg" alt=""  className='watermelon'/>
<img src="bodyscrub.jpg" alt="" className='watermelon' />

       
      </div>
      <p className="read-the-docs">
      </p>
    </div>
  )
}

export default App

const productos = [
{nombre:'',precio:'',color:''}

]