import './Cl.css';
import { Link } from 'react-router-dom';
import magic from './image/magic main.png'



import { Component } from "react";

class Cl  extends Component
{
 
    render(){
               
         return(
        <>  
           <div className="navbar">
             <img src={magic} className='magic'/>
             
                <Link to="">Home</Link>
                <Link to="/Shopping">Shopping</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/Services">Services</Link>
               
             </div> 
           </> )
        }   
    }
export default Cl