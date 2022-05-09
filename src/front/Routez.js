import React, {useState} from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './home'
import Product from './Product'

const Routez = (props) => {
  const[cart, setCart]=useState([])
  const Items = props.product; 
  
  const addToCart=(item)=>{
    if(cart.indexOf(item)!==-1)return;
      setCart([...cart, item]); 
    
    console.log(cart)

}
   
  return (
    <div> 
       <Product pro={Items} myCart={addToCart}/>
    </div>
  )
}

export default Routez
