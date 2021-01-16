import React from 'react';


import './App.css';
import './assets/style.css' ;
import myimg from './imageInSrc.png';

function App() {
  return (
    <div className="appjsx">
     <h1 className={"title red"}> I'm raoudha dayki</h1>
      <br></br>
      <img src={myimg} alt="bootstraplogo" />
      <br></br>
      <img src="/imageInPublic.png" alt="jslogo" />
       <br></br>
      
      <video style={{width:320,height:240}} controls>
       <source src="myvedio.mp4" type="video/mp4"></source>
       </video>
    </div>
   
   
  );

}

export default App ;

