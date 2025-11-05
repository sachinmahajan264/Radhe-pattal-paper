import React, { Component } from 'react'
import './Shopping.css';
import logo from './image/Grup.png'
import logo1 from './image/black wight.png'
import logo2 from './image/blue.png'
import logo3 from './image/jen.main.png'

class Shopping extends Component{
 

    submitform(){
    alert("Thanks to show may web page");
  }
  
   render(){

  return (<>

    
        <img src={logo} className='main1'/>
            <h1 className='hedding'>Start Shoping</h1>
            <h1>700-1700/-</h1>
      <div className='scroll'>

          <div className='f1'> 
             <img src={logo1} alt=""/> 
             <span value="700">Praise 700/- <a href="Greet.js">Buy Now</a></span>
           </div>
          
           <div className='f1'> 
              <img src={logo2} alt=""/>
              <span value="780">Praise 780/-</span>
           </div>
           
           <div className='f1'> 
              <img src={logo3} alt="" />
              <span value="900">Praise 900/-</span>
            </div>
          
           <div className='f1'> 
              <img src={logo1} alt="" />
              <span value="1150">Praise 1150/-</span>
            </div>
          
           <div className='f1'>
             <img src={logo2} alt="" />
             <span value="1599">Praise 1599/-</span>
            </div>
           
           <div className='f1'>
             <img src={logo3} alt=""/>
             <span value="1099">Praise 1099/-</span>
            </div>
        
       </div>
        <h1>1800-3500/-</h1>
         <div className='scroll'>

          <div className='f1'> 
             <img src={logo1} alt=""/> 
             <span value="2200">Praise 2200/-</span>
           </div>
          
           <div className='f1'> 
              <img src={logo2} alt=""/>
              <span value="2150">Praise 2150/-</span>
           </div>
           
           <div className='f1'> 
              <img src={logo3} alt="" />
              <span value="2599">Praise 2599/-</span>
              <span></span>
            </div>
          
           <div className='f1'> 
              <img src={logo1} alt="" />
              <span value="2100">Praise 2100/-</span>
            </div>
          
           <div className='f1'>
             <img src={logo2} alt="" />
             <span value="3000">Praise 3000/-</span>
            </div>
           
           <div className='f1'>
             <img src={logo3} alt=""/>
             <span value="3500">Praise 3500/-</span>
            </div>
        
       </div>

             <h1>3500-6000/-</h1>
           <div className='scroll'>

          <div className='f1'> 
             <img src={logo1} alt=""/> 
             <span value="700">Praise 700/-</span>
           </div>
          
           <div className='f1'> 
              <img src={logo2} alt=""/>
              <span value="780">Praise 780/-</span>
           </div>
           
           <div className='f1'> 
              <img src={logo3} alt="" />
              <span value="900">Praise 900/-</span>
            </div>
          
           <div className='f1'> 
              <img src={logo1} alt="" />
              <span value="1150">Praise 1150/-</span>
            </div>
          
           <div className='f1'>
             <img src={logo2} alt="" />
             <span value="1599">Praise 1599/-</span>
            </div>
           
           <div className='f1'>
             <img src={logo3} alt=""/>
             <span value="1099">Praise 1099/-</span>
            </div>
        
       </div>
      
             
    <form className='sign '>
     
          <div className='text'>
              <p>Sign Up</p>
              Enter your Email ID
          </div>
          <form className='email' onSubmit={this.submitform.bind()}>
            <div className='tera'>
            <textarea/>
            </div>dv
            <div className=''>
               <button type='submit'>Done</button>
            </div>
          </form>
       
       </form>
       <div className="footer">
        <div className="footertext">
            <h2>Trends</h2>
            <p>Service</p>
            <p>Customer</p>
            <p>Satisfaction</p>
        </div>
        <div className="footertext">
            <h2>About Us</h2>
            <p>Address : At, Post Bambhada<br/> Dist.Burhanpur<br/>(MP) BURHANPUR</p>
            <p>Service</p>
            <p>Customer</p>
            <p>satisfation</p>
            
        </div>
        <div className="footertext">
            <h2>Contect</h2>
            <p>6268998244</p>
            <p>Costomer</p>
            <p>Comming Up</p>
            <p>New Arrival</p>

        </div>
        <div className="footertext">
            <h2>Trending</h2>
            <p>Service</p>
            <p>Customer</p>
            <p>Shops</p>
           
        </div>
    </div>
 </> )
}
}

export default Shopping
