import React, { useContext } from 'react'
import { useState } from 'react';
import { BsFillBasket2Fill } from "react-icons/bs";
import { ShoppingProductContext } from '../../App';
import '../Checkout/Checkout.css'
import Counter from '../Counter/Counter';
function Checkout() {
    const [isOpen , setIsOpen ] = useState(false);
    const [producte , setProduct] = useContext(ShoppingProductContext);
    const items = Object.values(producte).reduce((sum , {amount}) => sum + amount , 0)
   
  return (
    
    <div className={`winkel ${isOpen ? "active": ''}`}>
          
              <button className='winkel--btn'  onClick={() => setIsOpen( !isOpen )}> <BsFillBasket2Fill/></button>
            <ul className='winkel__list'>
              
                {Object.values(producte).map(product =><li key={product.id} className='winkel__li'> {product.name} ({producte.amount})<Counter/>
                </li> )}
            </ul>
       
       </div>
  )
}

export default Checkout