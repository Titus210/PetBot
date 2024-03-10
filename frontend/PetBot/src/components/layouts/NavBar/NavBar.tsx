import React from 'react'
import Logo from '../../../assets/logo/Logo'
const NavBar = () => {
  return (
    <>
    <nav className="px-2 py-4">
        <div className="logo">
                <Logo/>
        </div>
         <div className="navlist">
            <ul className="">
                <li>Home</li>
                <li>chat</li>
                <li>services</li>
            </ul> 
         </div>
    </nav>
    </>
  )
}
export default NavBar