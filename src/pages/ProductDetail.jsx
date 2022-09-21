import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';



import { ShoppingProductContext } from '../App';
import useFetch from '../hooks/useFetch';
import API from '../api';
import { categorie } from '../constans';
import Counter from '../components/Counter/Counter';

import {BiArrowBack} from "react-icons/bi"
import "../components/DetailPage/Detailpage.css"
import { motion } from 'framer-motion';
function ProductDetail() {
  const {categorie} = useParams();
  const [ product , setProduct] = useContext(ShoppingProductContext);
    console.log(product);
  //const { id: productId } = useParams();
  const [products,productError,productLoading] = useFetch(API[categorie])




  return (
    <motion.div className='detail'>
   <Link className='detail--back' 
     
      intial={{left: 3}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.8} }}
    to="/"><BiArrowBack /></Link>

      {productLoading && <p>Loading...</p>}
      {productError && <p>Something went wrong...</p>}
      {products && (
        <div className='detail-content'>

          <img  className='detail__content--foto' src="../assets/img/pizza.png" alt="" />
          <h2 className='detail__content--title'>Pizza American</h2>
          <p className='detail__content--info'> tomaten, sla, kip</p>
          <price className='detail__content--price'>3.5</price>

        </div>
      )}

    {/*<Counter/>*/}
    </motion.div>

  );
}

export default ProductDetail 
               
                       