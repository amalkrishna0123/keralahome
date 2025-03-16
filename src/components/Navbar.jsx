import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      <header className='fixed top-0 left-0 right-0 py-5 z-[999] px-2 lg:px-10'>
        <nav>
            <div className='w-[100px] h-auto'>
                <img src={logo} alt="" className='w-full h-full object-contain drop-shadow-sm'/>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
