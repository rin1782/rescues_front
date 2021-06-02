import React from 'react'
import {Route, Link} from 'react-router-dom';

const NavLinks = (props) => {

  return (
    <div className="navLinks">
      <Link to='/' style={{color:'whitesmoke'}}>Home </Link><br></br>
      <Link to='/rescues' style={{color:'whitesmoke'}}> Our current Rescue Centers </Link><br></br>
      <Link to='/rescues/new' style={{color:'whitesmoke'}}>Join the Network! - Add Rescue</Link><br></br>
    </div>

  )
}

export default NavLinks;