import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'  ;
import { Route , Routes } from 'react-router-dom';
import Home from './RouterPractice/Home';
import Services from './RouterPractice/Services';
import Shop from './RouterPractice/Shop';
import Allcards from './components/Allcards';
import Login from './RouterPractice/Login';



function App() {
  return (
    <div className="A">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/Login' element={<Login/>} /> 
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/Services' element={<Services/>} />
        

      
      </Routes>
      </BrowserRouter>
    
     </div>
  );
}

export default App;










