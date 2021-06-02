import React from 'react'
import {Route, Link} from 'react-router-dom';

const NavLinks = (props) => {

  return (
    <span>
      <Link to='/'>Home </Link><br></br>
      <Link to='/rescues'>Rescues </Link><br></br>
      <Link to='/rescues/new'> New Rescue</Link>
    </span>

  )
}

export default NavLinks;