import React from 'react'
import { Link } from 'react-router-dom' 
import '../App.css'

const Header = (props) => {
  return (
      <header className="header">
        <div className="logo">
            <h1>
                <Link to="/" exact className="links">Headset Shop</Link>
            </h1>
        </div>
        <div className="header-links">
            <ul>
                <li><Link to="/" className="links">Home</Link></li>
                <li><Link to="/signup" className="links">Signup</Link></li>
                <li><Link to="/cart" className="links"><i class="fas fa-shopping-cart"/><span>{props.myItems}</span></Link></li>
            </ul>
        </div>
      </header>
  )
}

export default Header;
