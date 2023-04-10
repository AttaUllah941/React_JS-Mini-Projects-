import React from 'react'
import Navbar from '../components/Navbar' ;
import '../Assets/css/services.css'

function Services() {

     return (
    <div>
     <Navbar/>
     
     <div className="about-section">
  <h1>About Us </h1>
  <p>We are here to serve you .</p>
  <p>if you any problem regarding our service , kindly don't hesitate to Contact us .</p>
</div>

<h2 style={{textAlign:'center'}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png" alt="Jane" style={{width:'100%'}} />
      <div className="container">
        <h2>Roman Khan</h2>
        <p className="title">DIGITAL MARKETER</p>
        <p>Hi , This is me Roman khan a Sales man in AJshop , with 1+ year of Experience</p>
        <p>romankhan@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

 

  <div className="column">
    <div className="card">
      <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhvH9_WdWsYvrceOrsdvW6XcyBcZEXQtYluNrlh7Nxg&s" alt="Mike" style={{width:'100%'}}/>
      <div className="container">
        <h2>Sara Khan</h2>
        <p className="title">SEO </p>
        <p>Hi , i am Sara Khan a SEO in AJshop with 2+ years of Experience</p>
        <p>sarakhan123@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  
  <div className="column">
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJxavVQXHlKEamILZ2o62NKQEeqG_KIw28A&usqp=CAU" alt="John" style={{width:'100%'}} />
      <div className="container">
        <h2>Ahmad Khan</h2>
        <p className="title">Mechanics</p>
        <p>i am Ahmad khan , a Mechanics in AJshop since 3 years</p>
        <p>ahmadkhan@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>


       

   </div>

  )
}

export default Services ;