import React, { useContext, useState } from 'react'
import { BiMinusCircle } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";
import styled from "styled-components";
import { ShoppingProductContext } from '../../App';
const Counter = ({product  , defaultAlmount = 0 }) => {
        const  [amount , setAmount] = useState(producte[product.id] ? producte[product.id].amount : defaultAlmount );

       const [producte , setProduct] = useContext(ShoppingProductContext);
        const setCardContex = (val) => {
            setAmount(val);
            setProduct({...producte, 
                [product.id] : {...producte , amount : val}})
        }

        const detractAmount = () => {
            if (amount <= 1) {
                return setCardContex(0);
            }
            return setCardContex(parseInt(amount) -1 );
        }
    
  return (
    
    <div>
        <button type="-" onClick={detractAmount}>
            <BiMinusCircle/>
        </button>
        <input value={amount} type="Number" onChange={e => setCardContex(e.target.value)} />

        <button type="+" onClick={() => setCardContex(parseInt(amount) + 1 )}>
            <BiPlusCircle/>
        </button>
    </div>
  )
}

export default Counter