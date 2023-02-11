let productos = [
    { id: '1' ,categoria: 'mantecas', name: "MANTECA CORPORAL CAFÉ",   price:2000, foto:'café.jpg' },
    { id: '2' ,categoria: 'mantecas', name: "MANTECA CORPORAL FRUTILLA", price: 2000, foto:'cottom.jpg' },
    { id: '3' ,categoria: 'mantecas', name: "MANTECA CORPORAL BANANA",    price: 2000, foto:'banana.jpg' },
  { id: '5' ,categoria: 'exfoliante', name: "EXFOLIANTE SANDÍA", price: 3000, foto:'matcha.jpg' },
    { id: '6' ,categoria: 'exfoliante', name: "EXFOLIANTE COCO", price: 3000, foto:'purple.jpg' },
    { id: '7' ,categoria: 'exfoliante', name: "EXFOLIANTE", price: 3000, foto:'rosy.jpg' }  
  ]

  export const fetchProductos = () => {
    return new Promise(( res, rej )=>{    
      setTimeout(()=>{
        res( productos )
      }, 500) 
   })
  
  } 
export const fetchExfoliantes= () => {
  return new Promise ((res,rej) =>{
    setTimeout (()=>{
      res( exfoliantes)
    },500)
  })
}