import React from "react";
import { Link} from 'react-router-dom'
import { ItemListContainer } from "../itemListContainer/ItemListcontainer";

const Navbar = () =>
{
  return (

    <div className="men">
<img src="Free_Sample_By_Wix22222.jpg" className='LOGO' alt="" />
<Link to={'/'}>INICIO</Link>

<Link to={'/categoria/mantecas'}><button>MANTECAS CORPORALES</button></Link>
<Link to={'/categoria/exfoliante'}><button>EXFOLIANTES</button> </Link>


        
    <button >
    <img src="bolso.png" alt="" />
  </button>


<Link to={'/cart'}></Link>
    </div>
  )
}

export default Navbar