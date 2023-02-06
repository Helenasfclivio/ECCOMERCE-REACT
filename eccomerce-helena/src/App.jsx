import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './itemListContainer/ItemListcontainer'
import ItemDetail from './itemListContainer/itemDetailcontainer/itemDetailContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
<div className="App">
      <div className='men'>
    

<img src="Free_Sample_By_Wix22222.jpg" className='LOGO' alt="" />
        <ul className="menu-horizontal">
      <li>
        <a className='productos' href="#">P R O D U C T O S </a>
        <ul className="menu-vertical">
            <li><button>CREMAS HIDRATANTES</button></li>
            <li><button>MANTECAS CORPORALES</button> </li>
            <li> <button>EXFOLIANTES</button></li>
            <li> <button>JABONES</button></li>
            <li><button>ACCESORIOS</button></li>
        </ ul>
    </li>

    </ul>
    <button >
    <img src="bolso.png" alt="" />{count}
  </button>
      </div>
<BrowserRouter>
               
                    <div>
                        <Routes>
                            <Route  path='/' element={ <ItemListContainer saludo='soy ItemList Container' /> } />
                            <Route  path='/categoria/:idCategoria' element={ <ItemListContainer saludo='soy ItemList Container' /> } />
                            <Route  path='/detalle/:idProducto' element={ <ItemDetail /> } />

                            <Route path='*' element={ <Navigate to='/' /> } />
                        </Routes>
                    </div>
            </BrowserRouter>
            </div>
)}export default App