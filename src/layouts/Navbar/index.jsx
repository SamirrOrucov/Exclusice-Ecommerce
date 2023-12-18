import React from 'react'
import {Link} from 'react-router-dom'
import "./index.scss"
import NavbarTop from '../../components/NavbarComp/NavbarTop'
import NavbarMain from '../../components/NavbarComp/NavbarMain'
function Navbar() {
  return (
    <div id='navbar_container'>
       <NavbarTop/>
       <NavbarMain/>
       

    </div>
  )
}

export default Navbar