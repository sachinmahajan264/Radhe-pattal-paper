import './App.css';
import { Component } from 'react';
import Cl from './Cl';
import Contenar from './component/Contenar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shopping from './Shopping'
import Home from './Home';
import Contact from './Contact';


 export default class App extends Component{
render(){
  return(
    <div>
      <Cl/>
      
      <div>
      <Routes>
         <Route path='' element={<Home/>}/>
        <Route path='/Shopping' element={<Shopping/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  </div>
  )
}






 }
//   constructor(props){
//     super(props);

  


//     this.state={
//       isNextpage: false,
//       name: null,
//       email: null,
//       password: null,
//       showpassword: false

//     };
//   }
//   submitHendler=(event)=>{
  
//     let name=event.target.name.value;
//     let email=event.target.email.value;
//     let password=event.target.password.value;

//     this.setState({name,email,password,isNextpage: true})

    
//   }
//   onclicpassword =()=>{
//     this.setState({showpassword : ! this.state.showpassword})
//   }
//   render(){
//     return(
//       <div>
//       {
//          this.state.isNextpage ?
//         <Greet name={this.state.name} email={this.state.email}/> 
//         :< Ragistration 
//         submit={this.submitHendler}
//         showpassword={this.state.showpassword}
//         click={this.onclicpassword}
//         /> 
//       }
//       </div>
//     )
//   }
// }














//  constructor(props){
//   super(props);
//   this.props=props;
//   this.state={
//     classs: [
//       { 
        
//         name: 'sakshi Gupte',
//         age: 26
//       },
//       { 
        
//         name: 'rupali prabha',
//         age: 25
//       },
//       { 
        
//         name: 'Naveen',
//         age: 45
//       },
//       { 
        
//         name: 'hemant',
//         age:  34
//       },
//       {
      
//         name: 'rahul',
//         age: 50
//       }
//       ],
//       isShow : true,
      
//   };


//  }
//      toggleClick(){

//         this.setState({isShow: !this.state.isShow})
     

//       }
//       removeclick=(parsonsIndex)=>{
//       let datacopy= this.state.classs;
//     console.log(parsonsIndex)

     
//       }
//     render(){
//          let parsons;
//       if(this.state.isShow)
//         {
//        parsons = this.state.classs.map((t, index)=>{
//         return(
//          < Cl
//           key={index}
//           name={t.name} 
//           id={t.id}
//           age={t.age}
//            remove={this.removeclick.bind(index)}
//             />
//         )

//       }
    
//     )}else{
//       parsons =" ";
//     }
  
    

//       return(
//       <div className='data'>
//         <button onClick={this.toggleClick.bind(this)}> Toggle</button>
//           {parsons}
//        </div>
//       )
        
      
//     }
  
   


