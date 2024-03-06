import React from 'react'

function Product({product, cart, setCart}) {

    const {
        name,
        image,
        color,
        size,
        productdesc,
        price,
        inventory
    } = product

    
      const addToCart = (product) => {
        setCart([...cart, product]);
      };

      function handleAddToCart() {
        addToCart(product)
      }   
  return (
    
       
           
        <div className='card'>
     
        <h3>Product</h3>
          
          <img className="card-image" src={image} alt={name} />
          <div className="card-content">  
          <h4>{name}</h4>
          <p>{color}</p>
          <p>{size}</p>
          <p>{productdesc}</p>
          <p>Price: {price}</p>
          <p>Inventory: {inventory}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        
    </div>
    
    
    </div>
  )
}
 

export default Product