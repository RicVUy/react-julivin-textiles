import React, {useState} from 'react'
import ProductCard from './ProductCard'



function ProductContainer({products,cart,setCart}) {
  
    
  return (
    <div>
      <div>
       <ProductCard products={products} cart={cart} setCart={setCart}/>
       </div>
      
      </div>
  )
}

export default ProductContainer