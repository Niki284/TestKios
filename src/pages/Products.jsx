import React, { useState } from 'react'
import { categorie } from '../utils/constants'
import useFetch from '../hooks/useFetch';
import { Product } from './Product';
//import { API_FOOD_URL } from '../api';
import List from '../components/List';
import helper from '../utils/helper'


 const Products = () => {
     
    return (
      <div>
          <List/>
          <Product/>
      </div>
    )
}
export default Products;