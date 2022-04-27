import React from 'react'
import { Link } from 'react-router-dom' 
import Home from "./home"
import '../App.css'

const Header = () => {
  return (
      <header className="header">
        <div className="logo">
            <h1>
                <Link to="/" exact>Headset Shop</Link>
            </h1>
        </div>
        <div className="header-links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/cart"><i class="fas fa-shopping-cart"/></Link></li>
            </ul>
        </div>
      </header>
  )
}

export default Header;
