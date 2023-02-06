import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchProductos } from "../fetch/fetchProductos"


export const ItemListContainer = ({ saludo }) => {
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const { idCategoria } = useParams()

  useEffect(()=>{
    if (idCategoria) {
      fetchProductos()
        .then(res => {      
          setProductos(res.filter(producto => producto.categoria === idCategoria))
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))      
    } else {
      fetchProductos()
        .then(res => {      
          setProductos(res)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
      
    }
  }, [idCategoria])

 


  console.log(idCategoria)

  return (
    
         loading 
          ? 
            <h2>cargando productos...</h2> 
          : 
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }} >
           { productos.map(producto =>   (
                <div key={producto.id} className='bikini' >
                  
                    <div className='NOMBRE'>
                       {producto.name}
                    </div>
                    <div className='NOMBRE'>
                      <img src={producto.foto} alt='foto' className="imaa"/>
                      categoria:{producto.categoria}<br/>
                    ${producto.price}
                    </div>
                    <div className='card-footer'>
                    <Link to={`/detalle/${producto.id}`}> <button>Detalle</button>  </Link>
                    </div>
               

                </div>
              )
            )}

            
          </div>

  )
}
