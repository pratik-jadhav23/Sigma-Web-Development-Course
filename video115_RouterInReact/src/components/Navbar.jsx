import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login"><li>Login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/user"><li>User</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
