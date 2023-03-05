import { memo } from "react"
import {Item} from "./Item"



 export const ItemList = memo(  ( { productos } ) => {
        console.log('Render ItemList')
        return (
            productos.map(producto =>   <Item key={producto.id}   producto={producto}/> )
        )
    }
)

