import { memo } from "react"
import { Link } from "react-router-dom"

 export const Item =  memo(  ({producto}) => {
    console.log('Render ITEM')
    return (
      <div className='card w-25 mt-2' >
                    <Link to={`/detalle/${producto.id}`}>
                      <div >
                        Nombre: {producto.name}
                      </div>
                      <div >
                        <img src={producto.foto} alt='foto' />
                        Categoria: {producto.categoria}<br/>
                        Precio: {producto.price}
                      </div>
                      <div >
                      </div>
                    </Link>
  
                  </div>
    )
  }

)
