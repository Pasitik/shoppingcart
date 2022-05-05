import React from 'react'
import "./products.css"

const Product = (props) => {
  return (
    <div>
        <div>
            <h1>Items</h1>
        </div>
        <div className="shop"> 
        {props.pro.map((item) =>(
              <div className="card">
                  <div key={item.id} className="item-image">
                      <img src={item.image} alt={item.name} height="300" width="300" />
                  </div>
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">{item.price}</div>
                  <div className="item-button"><button>Add to Cart</button></div>
              </div>
        ))}

        </div>
    </div>
  )
}

export default Product
