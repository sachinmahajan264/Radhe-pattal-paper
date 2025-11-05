import React from 'react'
import syst from './image/system.png'
import './Home.css'
import { Component } from 'react'
class Home extends Component {
 
  submitform(){
    alert("Thanks to show may web page");
  }
 
render(){


 
  return (
  <div className='Background'>
   
<div className='Homepage'>   
        <div className='form' onSubmit={this.submitform.bind()}>
        <form>
          Enter your Name<br/>
          <input type='text' name='text' required/><br/>
          <br/>
          Enter your Last name<br/>
          <input type='email' name='email'  required/><br/><br/>
          Enter your date of Birth<br/>
          <input type='date'name='date' required/><br/><br/>
          <button type='submit'>Login</button>
          <button type='Reset'>cansel</button>
          </form>
        </div>
    <div className='information'>
      <p className='hh'>Anyting's Possible</p>
      <p className='d'>When you have the</p>
      <p className='h1'>talent</p>
      <p className='longtext'>Find Skilled Condidates ,in-demand Jobs and the Solution You need to help tyou do your best work yet</p>
    </div>
</div> 
  </div> 
  )
}
}

export default Home

