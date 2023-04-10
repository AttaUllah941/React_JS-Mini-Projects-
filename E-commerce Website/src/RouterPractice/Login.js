import React from 'react' ;
import Navbar from '../components/Navbar';
import { useState } from 'react';
import '../Assets/css/login.css' ;
import {   useNavigate} from 'react-router-dom';


function Login() {
    
    const [email,setemail] = useState('') ;
    const Navigate = useNavigate()
    const [password , setpassword] = useState('') ;

    function FormHandler( event)
    {
      event.preventDefault();
     

      if(email.length <= 5 || password.length <= 5)
      {
        alert('Enter valid Login info')
      }
      else
      {
        Navigate('/Shop')
      }
    }

    
    
   
  
    

  return (
    <div className='loginsection'>
     <Navbar/>

    <div className='form' >
        <form className='login_form' onSubmit={FormHandler}>
            <h1> Welcome to Ajshop</h1>

            <label  > Enter your Email Address</label> <br></br>
            <input type='email' placeholder='Enter your Email' onChange={event =>setemail(event.target.value) }/>  <br></br>

    <div className='password' style={{marginTop:'17px'}}>
                <label > Enter Your Password</label><br></br>
            <input type='password' placeholder='Enter your Password' onChange={event =>setpassword(event.target.value) }/> <br></br>
            </div>

            <p style={{marginLeft:'12%'}}>Remember Me </p>

            <button id='btn'  >Login</button>

        </form>
    </div>
    
   
    </div>
  )
}

export default Login ;