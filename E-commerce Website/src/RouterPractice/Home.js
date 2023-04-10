import React from 'react' ;
import Navbar from '../components/Navbar';
import '../Assets/css/home.css' ;
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Navbar/>
    <>
    <div className='home' style={{display:'flex' , justifyContent:'space-between' , color: 'white'}}>

      <div className='info' style={{marginLeft:'50px' , marginRight:'180px' , lineHeight:'2' , marginBottom:'0px'}}>
       <h2 style={{fontFamily:'-moz-initial' , color:'brown'}}> Smarter & Faster</h2>
       <p> You are Welcome here . All the laptops you want are available . Is a keyword representing the largest minimal content contribution of the grid items occupying the grid track. For example, if the first element of the grid track contains the sentence "Repetitio est mater studiorum" and the second element contains the sentence "Dum spiro, spero", minimal content contribution will be defined by the size of the largest word among all of the sentences in the grid elements - "studiorum". </p>
       <Link to='/Login'>
       <button  style={{width:'150px' , height:'40px' , marginLeft:'200px' , backgroundColor:'greenyellow', borderRadius:'10px'}}> Login Here </button>
       </Link>
      </div>

      <div>
      <img src='https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80' style={{width:'500px' , height:'520px' , marginRight:'35px' , marginTop:'15px' }}/>
      </div>
    </div>
    </>
    
    
    </>

  )
}

export default Home ;