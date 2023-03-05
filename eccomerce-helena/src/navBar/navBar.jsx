import React from "react";
import { Link} from 'react-router-dom'
import { ItemListContainer } from "../itemListContainer/ItemListcontainer";

const Navbar = () =>
{
  return (

    <div className="men">
<img src="Free_Sample_By_Wix22222.jpg" className='LOGO' alt="" />

<Link to={'/categoria/mantecas'} className= 'home'>MANTECAS CORPORALES</Link>
<Link to={'/categoria/exfoliante'} className='home'>EXFOLIANTES </Link>
<Link to={'/cart'}>CARRITO</Link>
 

        
    <button >
    <img src="bolso.png" alt="" />
  </button>


    </div>
  )
}

export default Navbar