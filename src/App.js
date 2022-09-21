import './App.css';
import {Home} from './pages/Home';
import { Product } from './pages/Product';
import Products from './pages/Products'
import {Routes, Route, Link, Router, useLocation} from 'react-router-dom';
import {createContext, useEffect, useState} from 'react'
import { AnimatePresence } from 'framer-motion';
import Betaal from './pages/Betaal'
import BaseLayout from './layouts/BaseLayout';
import ProductDetail from './pages/ProductDetail';


 export const ShoppingProductContext = createContext();


function App() {
/*
  useEffect(() => {
    //save to localstore
  
  }, [producte]);
  */
  
  
  const location = useLocation();

  const [producte, setProduct] = useState({})
  return (
    <div>
        <AnimatePresence>
          
          <ShoppingProductContext.Provider value={[producte , setProduct]}>
             <Routes location={location} key={location.pathname}>
                <Route path="/" element={<BaseLayout/>}>
                  <Route index element={<Home />}/>
                  <Route path="products" element={<Products />}/>
                  <Route path="products/:categorie" element={<Product />}/>
                  <Route path="products/:categorie/:id" element={<ProductDetail />}/>
                  <Route path="afrekennen" element={<Betaal />}/>
                </Route>
              </Routes>
          </ShoppingProductContext.Provider>
             
        </AnimatePresence>
      
    </div>
  );
}

export default App;
