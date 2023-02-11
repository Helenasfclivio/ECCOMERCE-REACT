import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './itemListContainer/ItemListcontainer'
import ItemDetail from './itemListContainer/itemDetailcontainer/itemDetailContainer'
import Navbar from './navBar/navBar'
import './App.css'

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
                            <Route  path='/' element={ <ItemListContainer saludo='soy ItemList Container' /> } />
                            <Route path='*' element={ <Navigate to='/' /> } />
                        </Routes>
                    </div>
            </BrowserRouter>

            
)}export default App