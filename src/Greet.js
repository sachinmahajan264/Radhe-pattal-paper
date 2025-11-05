import React,{Component} from "react";


export default function Greet(props){
    
    return(
        <div className="main">
            <h1>{props.name}</h1>
            <h1>Thank you for joining us.
                verfication sent to  
            </h1>
            <h3>{props.email}</h3>
        </div>
    )



    
}