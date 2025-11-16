import './App.css';


class App extends Component{
render(){
  return(
    <div>
    
    </div>
  )
}
}














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
  
   


