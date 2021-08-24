import React from 'react'
import './topbar.scss';

export default function Topbar() {
    return (
        <div className="AppFeatures">
            <div className="wrapper">
      <div className="left">
        <span className="logo1">Lark</span>
      </div>
      <div className="right">
     <span className="logo">Calculator</span>
     <span className="log">|</span>     
     <span className="logo">Rock Paper Scissors</span>
     <span className="log">|</span>   
     <span className="logo">2048</span>
     <span className="log">|</span>   
     <span className="logo">Dictionary</span>
     <span className="log">|</span>  
     <a href="https://www.instagram.com/xy.shrey/"><i class="fab fa-instagram"></i></a>
   

     </div>
     </div>
    </div>
    )
}
