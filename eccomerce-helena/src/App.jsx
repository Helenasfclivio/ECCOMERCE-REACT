import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './itemListContainer/ItemListcontainer'
import Navbar from './navBar/navBar'
import './App.css'
import {CartContainer} from './cartContainer/cartContainer'
import {ItemDetail} from './ItemDetail'



function App() {
  const [count, setCount] = useState(0)



  return (

    



<BrowserRouter>
               
                    <div>
                      <Navbar />
                        <Routes>
                            <Route  path='/' element={ <ItemListContainer saludo='soy ItemList Container' /> } />
                            <Route  path='/categoria/:idCategoria' element={ <ItemListContainer saludo='soy ItemList Container' /> } />
                            <Route  path='/detalle/:idProducto' element={ <ItemDetail /> } />
                            <Route path='/cart' element={ <CartContainer saludo="hola soy cart" /> } />
                        </Routes>
                    </div>
            </BrowserRouter>

            
)}export default App