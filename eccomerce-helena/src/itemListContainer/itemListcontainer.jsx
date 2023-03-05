import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { collection,getDocs, getFirestore, query, where } from 'firebase/firestore'



export const ItemListContainer = ({ saludo }) => {
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const { idCategoria } = useParams()

      console.log(import.meta.env.VITE_NOMBRE)
    useEffect(()=>{
      setLoading(true)
      const db = getFirestore() 
      const queryCollections = collection(db, 'item')
  
      const queryFilter = idCategoria ? query(queryCollections, where('categoria','==', idCategoria) ) : queryCollections    
      
      getDocs(queryFilter)
      .then(resp => setProductos( resp.docs.map(product => ({ id: product.id, ...product.data() } ) )))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))    
    }, [idCategoria])
  
    
    return (
          
              loading 
              ? 
                  <Loading />
              : 
                  <>                      
                      <div style={{
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'wrap'
                      }} >
  
                          <ItemList productos={productos} />                    
                      </div>
                  </>
    )
  }
  


  