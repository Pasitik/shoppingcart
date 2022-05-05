import logo from './logo.svg';
import './App.css';
import Home from './front/home';
import Header from './front/header'
import data from './back/data/data';
import Routez from './front/Routez'
import Product from './front/Product'
import {BrowserRouter as Router} from 'react-router-dom'

function App() { 

const productItem=data.productItems;


  return (
    <Router>
        <Header/>
        <Routez product={productItem}/>
    </Router>
  );
}

export default App;
