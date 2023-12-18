import React from 'react'
import {Link} from 'react-router-dom'
import "./index.scss"
function NavbarTop() {
  return (
   <div className="upper_navbar">
    <div className="upper_navbar_container">
    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
     <Link to={"https://www.amazon.in/"}>Shop Now</Link>
     <div className="upper_navbar_container_select_div">
     <select name="" id="">
         <option value="">English</option>
         <option value="">Russian</option>
         <option value="">Chinese</option>
     </select>
     </div>
    </div>
 </div>
  )
}

export default NavbarTop