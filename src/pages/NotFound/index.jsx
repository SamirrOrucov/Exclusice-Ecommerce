import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.scss"
function NotFound() {
  return (
    <div id='notFound'>
            <div className="pageLink">
                <NavLink to={"/"}>Home</NavLink> / <NavLink className={"pageYouIn"} to={"/*"}>404 Error</NavLink>
            </div>
        <div className="notFound_container">
            <div className="text_container">
            <p className='head'>404 Not Found</p>
            <p>Your visited page not found. You may go home page.</p>

            </div>
            <Link to={"/"}><button>Back to Home page</button></Link>


        </div>
        
    </div>
  )
}

export default NotFound