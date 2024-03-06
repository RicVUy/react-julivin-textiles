import React from 'react'

function CartCard({cart}) {
    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + parseFloat(product.price), 0);
      };

  return (
    <div>
         <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
    </div>
  )
}

export default CartCard