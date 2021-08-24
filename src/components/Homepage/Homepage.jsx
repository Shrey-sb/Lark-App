import React from 'react'
import Calculator from '../Calculator/Calculator';
import Rps from '../Rps/Rps';
import Tw048 from '../Tw048/Tw048';
import './homepage.scss';
import Diction from '../Diction/Diction';

export default function Homepage() {
    return (
     
        <div  class="container">
          <div class="row">
          <Calculator/> 
          </div>
          <div class="row">
          <Rps/>   
          </div>
          <div class="row">
          <Tw048/>   
          </div>    
          <div class="row"id="style-4">
          <Diction/>  
          </div>
         
    </div>
    
    )
}

