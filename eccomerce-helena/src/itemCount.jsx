import React from "react"
import { useState } from "react"

 export const ItemCount = ({initial=1, stock=10, onAdd}) => {
    const [ count, setCount] = useState(initial)

    const handleSuma = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const handleRestar = () =>{
        if(count > initial){
            setCount(count - 1)
        }
    }

    const handleOnAdd = ()=>{
        onAdd(count)        
    }

  return (
    <div  >
        <div >
            <div>
            <button  onClick={handleSuma}> + </button>

            </div>
            <div>
            <center>
            <label>{count}</label>

            </center> 
 
            </div>
            <div className="col">
            <button onClick={handleRestar }> - </button>

            </div>
        </div>
        <div>
            <button onClick={handleOnAdd}>Agregar al carrito</button>
        </div>


    </div>
  )
}

