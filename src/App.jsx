import React from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar'
import Homepage from './components/Homepage/Homepage'

function App() {
  
  return (
    <div className="App">
     <Topbar/>
     <Homepage/>
      
     {/* <Contact/> */}
    </div>
  );
}

export default App;
