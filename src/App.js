import React, {useState, useEffect} from 'react';
import ProductContainer from './components/ProductContainer';
import CartCard from './components/CartCard';
function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/Products")
        .then(r => r.json())
        .then(setProducts) 
  }, []);

  
  return (
    <div>
    <h1>Shopping Cart</h1>
    <div>
      <h2>Products</h2>
      <ul>
        <ProductContainer products={products} cart={cart} setCart={setCart}/>
      </ul>
    </div>
    <div>
        <CartCard cart={cart}/>
      </div>
  
  </div>
   
  );
}

export default App;
