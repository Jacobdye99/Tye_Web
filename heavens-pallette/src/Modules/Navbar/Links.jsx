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
      <Link classname='link' style={{textDecoration: "none", color: "black"}}   to = '/Cart'> <img height="50rem" width="50rem" src="      https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/220f6753-6f05-4ddc-b597-2da49613c109/dh54gn7-b94ea9d3-d231-462f-9839-9fcaf79c9006.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyMGY2NzUzLTZmMDUtNGRkYy1iNTk3LTJkYTQ5NjEzYzEwOVwvZGg1NGduNy1iOTRlYTlkMy1kMjMxLTQ2MmYtOTgzOS05ZmNhZjc5YzkwMDYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.znSsys0Dd5dpVE5oUgtatTi-bCVIF7yG6e1CP5TaQkw" alt="Cart" />
      </Link>
    </div>
  )
}

// todo
//add font to links somehow
// add heavens palette logo photo

