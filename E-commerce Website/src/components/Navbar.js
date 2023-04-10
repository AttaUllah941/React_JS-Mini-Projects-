import React from 'react' ;
import { NavLink } from 'react-router-dom';
import '../Assets/css/navbar.css' ;
import { useContext } from 'react';
import user from '../RouterPractice/Shop'




function Navbar() {
  const value = useContext(user) ;

  return (
    <>

    <div className='header'>

    <div className='navbar' style={{display:'flex' , justifyContent:'space-evenly'}}>

    <h1> AJshop </h1>
    <div>
   <img src='https://img.freepik.com/premium-vector/realistic-empty-supermarket-shopping-cart-isolated-white_53562-6809.jpg' width='60px' height='60px' style={{borderRadius:'50px'}} />  <span> +3 {value} </span>
   </div>
    <ul className='navbar_list'>
      <li> <NavLink to='/'>Home </NavLink> </li>
      <li> <NavLink to='/Login'>Login </NavLink> </li>
      <li> <NavLink to='/Shop'>Shop</NavLink> </li>
      <li> <NavLink to='/Services'> About Us  </NavLink> </li>
      
    </ul>
    </div>

    </div>
    </>
  )
}

export default Navbar ;