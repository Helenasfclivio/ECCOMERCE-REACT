import React, { createContext } from 'react'
import { ItemListContainer } from './itemListContainer/ItemListcontainer'
import { fetchProductos } from './fetch/fetchproductos'

const Appprov = () => {


    const contextApp = createContext ([])
  return (
    <div>
      <contextApp.Provider value={{fetchProductos,hola}}>
    <ItemListContainer />
      </contextApp.Provider>
    </div>
  )
  console.log(contextApp);
}

export default Appprov
