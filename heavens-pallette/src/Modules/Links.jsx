import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div>
      <Link to = '/' >Home</Link>
      <Link to = '/Gallery'>Gallery</Link>
      <Link to = '/Shop'>Shop</Link>
      <Link to = '/Cart'>Cart</Link>
      <Link to = '/Contact'>Contact</Link>
    </div>
  )
}
