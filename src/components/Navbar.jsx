import React from 'react'
import './components.css'
// import { Button } from 'bootstrap'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar2'>
        <div className='links'>
          <img className="logo" src="./img/logo.png"></img>
          <div className='links'>
            <div>Home</div>
            <div>Work</div>
            <div>Studio</div>
            <div>works</div>
       
          </div>
        </div>
        <div className='icons'>
          <img className='search' src='./img/search.png'></img>
          <button className='hirebutton'>hire now</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
