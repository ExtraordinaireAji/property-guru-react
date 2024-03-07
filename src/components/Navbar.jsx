import React from 'react'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <>
    <nav>
    <div className='navbar-cont'>
        <h1>Propery <span>Guru</span></h1>
    </div>
    <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Location</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
    </div>
    <div className='visit'>
        <a href="#">Book a free visit</a>
    </div>
    </nav>

    </>
  )
}

export default Navbar