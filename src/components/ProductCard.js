import React from 'react'
import Product from './Product'

function ProductCard({products,setCart,cart}) {

    const productList = products.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
     ))
    
  return (
    
       
           
        <div  className="card-container">
     
       {productList}
    
    </div>
  )
}

export default ProductCard


