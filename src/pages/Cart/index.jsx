import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import { BasketContext } from '../../context/basketContext'
function CartPage() {
    const {basket}=useContext(BasketContext)
  return (
    <div id='cart_container'>
        <div className="pageLink">
                <NavLink to={"/"}>Home</NavLink> / <NavLink className={"pageYouIn"} to={"/cart"}>Cart</NavLink>
            </div>
            <div className="cart_main">
                <div className="tHead">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                </div>
                {
                    basket.map(item=>
                        
                        <div className="tCart">
                    <div className="imgName">
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                    </div>
                    <div className="price">
                        {item.price}
                    </div>
                    <div className="count">
                        {item.count}
                        <div className="incDec">
                        <i class="fa-solid fa-chevron-up"></i>
                        <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="totalPrice">
                        {(item.price)*(item.count)}
                    </div>
                </div> 
                        )
                }
                
                



            </div>
    </div>
  )
}

export default CartPage