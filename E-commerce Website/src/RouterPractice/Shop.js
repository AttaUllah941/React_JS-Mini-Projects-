import React, { createContext,  useState } from 'react' ;
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Allcards from '../components/Allcards';
import {BounceLoader} from 'react-spinners' ;
import '../Assets/css/shop.css' ;


 export const user = createContext() ;


function Shop() {

  const [data,setdata] = useState([]) ;
  const [loading,setloading] = useState(false) ;
  const [count,setcount] = useState(0) ;

  useEffect(function()
  {
    setloading(true)
   
  // const x = fetch('https://fake-e-commerce-api.onrender.com/product/category/Laptop/') ;
  const x = fetch('https://fake-e-commerce-api.onrender.com/product') ; 

  x.then(function(fetchdata){
    return fetchdata.json()
  }).then(function(res)
  {
    console.log(res)
    setdata(res) ;
    setloading(false)
    
    
  })
  },[]) ;

  
  return (
    <user.Provider value={count}>
    <div style={{backgroundColor:'#376F70'}}>
    <Navbar/>
    <div>
      <div>
        <ul style={{display:'grid' , gridTemplateColumns:'auto auto auto' , marginLeft:'90px' , }}>
           { loading && <BounceLoader size={40} color='red'  />}
        { data.map(function(item)
        {
          return <Allcards>
           
             <div className='cards'>
            <h3>{item.name}</h3>
           <img src={item.image} style={{width:'130px' , height:'130px'}}/> 
            <p>{item.price} $</p>
            <p>{item.quantity} Quantites</p>
            <p>{item.rate.rating} rating</p>
            {/* <h3 style={{}}> + {count}</h3> */}
            
            <button style={{width:'120px' , height:'30px' , backgroundColor:'seagreen' , borderRadius:'10px'}} onClick={()=> setcount(count+1)} > ADD TO CART</button>
            <button style={{width:'90px' , height:'30px' , backgroundColor:'seagreen' , borderRadius:'10px'}} onClick={()=> setcount(count-1)} > Remove</button>
           
            </div>
           
           
            </Allcards>
           
            
          
        }) }
        </ul>
      </div>

       </div>
    </div>
    </user.Provider>
  )
}

export default Shop ;