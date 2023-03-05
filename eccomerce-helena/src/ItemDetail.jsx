import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "./CartContext"
import {ItemCount} from "./itemCount"


const Componente = ()=> {
    return (
        <div style={{
            height: '100vh',
            width: '50vw',
            backgroundColor: 'grey',
            display: 'absolute',
            float: 'right'
        }}>
            contenido carrito
            <Link to="/cart" >Completar la compra</Link>
        </div>
    )
}



 export const ItemDetail = ({ producto }) => {
    const [isCount, setIsCount] = useState(true)
    const [cart, setCart] = useState(false)

    const { agregarCarrito } = useCartContext()

    const onAdd = (cant)=>{
        console.log(cant)
        agregarCarrito( { ...producto, cantidad: cant } )
        setIsCount(false)
    }  

    const handleCart = () => {
        setCart(!cart)
    }
    return (
        <div>
            <div> 
                <div> 
                    {/* <TextComponent3 stock={1} /> */}
                    <img src = {producto.foto} className='w-50'/>
                    <h2>Nombre: {producto.name}</h2> 
                    <h4>Categoría {producto.categoria}</h4> 
                    <h4>Precio {producto.price}</h4>
                        
                </div>
                <div className="col-6">
                    <button onClick={handleCart}>carrito</button>
                    {
                        isCount ? 
                            <ItemCount initial={1} stock={30} onAdd={onAdd} />                        
                        :
                            <>
                                <Link  to='/cart'>
                                    Ir a Cart
                                </Link>
                                <Link  to='/'>
                                    Ir a Home
                                </Link>

                            </>
                    }   
                    {
                        cart && <Componente />
                    }
                </div>
            </div>
        </div>
    )
}

