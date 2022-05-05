import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './home'
import Product from './Product'

const Routez = (props) => {
  const Items = props.product;
  return (
    <div> 
       <Product pro={Items}/>
    </div>
  )
}

export default Routez
