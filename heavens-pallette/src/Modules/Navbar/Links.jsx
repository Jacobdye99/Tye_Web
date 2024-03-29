import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Links() {
  return (
    <div className='links_div'>
      <Link classname='link' style={{textDecoration: "none", color: "black"}} to = '/' >Home</Link>
      <Link classname='link' style={{textDecoration: "none", color: "black"}}  to = '/Gallery'>Gallery</Link>
      <Link classname='link' style={{textDecoration: "none", color: "black"}}  to = '/Shop'>Shop</Link>
      <Link classname='link' style={{textDecoration: "none", color: "black"}}  to = '/Contact'>Contact</Link>
      <Link classname='link' style={{textDecoration: "none", color: "black"}}   to = '/Cart'>Cart
      </Link>
    </div>
  )
}

// todo
//add font to links somehow
// add heavens palette logo photo

