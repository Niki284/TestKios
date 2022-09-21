
import { Link } from 'react-router-dom'
import {categorie} from '../constans'
import "../components/categorie.css"
import { motion } from "framer-motion";
import Products from './Products';
const Home = () => {
  return (

    <motion.div 
    className='categorie'
    intial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.2} }}
    >
      <ul className='categorie--list'
      intial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 2} }}
      >
      {categorie.map((e)=>{
        const img = require(`../assets/img/${e.img}`);
        return <Link className='categorie--li' to={`/products/${e.slug}`}><li className='categorie--link'><img className='categorie--img' src={img} alt=""/>{e.name}</li></Link>})}
      </ul>
     
    </motion.div>
  )
}

export {Home}