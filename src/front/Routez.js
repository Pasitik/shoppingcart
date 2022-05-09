import React, {useState} from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './home'
import Product from './Product'
import Header from './header'

const Routez = (props) => {
  const[cart, setCart]=useState([])
  const Items = props.product; 
  
  const addToCart=(item)=>{
    if(cart.indexOf(item)!==-1)return;
      setCart([...cart, item]); 
    
    console.log(cart)

} 
const items=cart.length;
   
  return (
    <div> 
        <Header myItems={items} />
       <Product pro={Items} myCart={addToCart}/>
    </div>
  )
}

export default Routez
