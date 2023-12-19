import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
function CartPage() {
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
                <div className="tCart">
                    <div className="imgName">
                        <img src="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1704067200&Signature=lh~PSVZ4f5ZBRG-rmhpB1xLYGKIBAd81IXbhcYnS~V44M0jORkEENiphfnBIuZ8HN3qV~oc8qjaRcCDvVcO~aYRGbqeeooZT9qKWUVN-rREEc8qg0DIM5ezUf3SeKFoD6sQEVqlP5tIsts3Yjxd2SnADQg1yY3Kp0rdYkhYAle2g66hRUHcEY8uEc~qDbUqkwEcZWmc3fThKuaC8prsuA9tBfg4u6A7vMKcyQzwBpXCz6M1O5z7-Rsxvif~yrARPwHBT95bfLuBn56geI9UxcW1u3rxwAJ1smK~CVJ-TT9~eppiifbINmOVPVZgNEOL8CiKTcZo3sN3zAnHCb9pwdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <p>LCD Monitor</p>
                    </div>
                    <div className="price">
                        $650
                    </div>
                    <div className="count">
                        3
                        <div className="incDec">
                        <i class="fa-solid fa-chevron-up"></i>
                        <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="totalPrice">
                        $650
                    </div>
                </div>
                



            </div>
    </div>
  )
}

export default CartPage