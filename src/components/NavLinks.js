import React from 'react'
import {Route, Link} from 'react-router-dom';

const NavLinks = (props) => {

  return (
    <span className="navLinks">
      <Link to='/'>Home </Link><br></br>
      <Link to='/rescues'> Our current Rescue Centers </Link><br></br>
      <Link to='/rescues/new'>Join the Network! - Add Rescue</Link><br></br>
    </span>

  )
}

export default NavLinks;