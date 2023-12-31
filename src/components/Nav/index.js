import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
      <Link to='/orders'>Order History</Link>
        &nbsp; | &nbsp;
      <Link to='/orders/new'>New order</Link>
    </nav>
  )
}

export default Navbar