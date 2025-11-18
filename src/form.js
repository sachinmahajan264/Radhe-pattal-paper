import React, {Component} from "react";
import './form.css'
import styled from "styled-components";
import { getDatabase,ref,set} from 'firebase/database'
import { app } from "./Firebase";
import userEvent from "@testing-library/user-event";


const Formdata=styled.div`
 background-color: aquamarine;
height: auto;
width:400px;
margin: auto;
padding: 5px;
`;
const indianStates = [
"Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
"Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
"Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
"Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
"Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
"Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
"Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
"Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];
const gender=['Male','Female','Other'];
const db=getDatabase(app);

class Form extends Component{
  constructor(props){
    super(props);
   
    this.state={
        name:'',
        lastname:'',
        fathername:'',
        mothername:'',
        email:'',
        birthdate:'',
        state:'',
        gender:'',
        number:'',

    }
  }
    
  onsubmitform = (e) => {
  e.preventDefault();

  const {
    name,
    lastname,
    fathername,
    mothername,
    email,
    birthdate,
    state,
    gender,
    number,
  } = this.state;

 
  const userId = new Date();
 
  const username= this.state.name +" "+this.state.lastname+" ";

const userRef = ref(db,username + userId);

  // Save data to Firebase
  set( userRef, {
    name,
    userId,
    lastname,
    fathername,
    mothername,
    email,
    birthdate,
    state,
    gender,
    number,
  })
    .then(() => {
      alert("Form submitted successfully!");
      this.setState({
        name: '',
        lastname: '',
        fathername: '',
        mothername: '',
        email: '',
        birthdate: '',
        number: '',
        state: '',
        gender: '',
      });
    })
    .catch((error) => {
      console.error("Error saving data:", error);
      alert("Failed to submit form. Please try again.");
    });
};
    
    onChengeForm=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    };
    render(){

    const buttons= {
    width:"40%",
    marginLeft:"10px"
    }

    
        return(
            <Formdata>
            <form onSubmit={this.onsubmitform}>
                <label htmlFor="name">FirstName</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" onChange={this.onChengeForm} value={this.state.name}/>
                <label htmlFor="lastname">LastName</label>
                <input type="text" name="lastname" id="lastname" placeholder="Enter last name" onChange={this.onChengeForm}value={this.state.lastname}/>
                <label htmlFor="fathername">FatherName</label>
                <input type="text" name="fathername" id="fathername" placeholder="Enter father name" onChange={this.onChengeForm} value={this.state.fathername}/>
                <label htmlFor="mothername">MotherName</label>
                <input type="text" name="mothername" id="mothername" placeholder="Enter mother name" onChange={this.onChengeForm} value={this.state.mothername}/><br/>
                <label htmlFor="birthdate">Date of Birth</label><br/>
                <input type="date" name="birthdate" id="birthdate" onChange={this.onChengeForm} value={this.state.birthdate}/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={this.onChengeForm} value={this.state.email}/>
                <label htmlFor="state">State</label><br/>
                <select style={{width:"90%"}} name="state" onChange={this.onChengeForm} value={this.state.state}>
                <option value=''>Select state</option>
                  {indianStates.map((g, index) => (
                    <option key={index} value={g}>{g}</option>
                     ))}
                </select>
                <label htmlFor="gender">Gender</label><br/>
                <select name="gender" style={{width:"90%"}} onChange={this.onChengeForm} value={this.state.gender}>
                    <option value=''>Select gender</option>
                    {gender.map((g,index)=>(
                    <option key={index} value={g}>{g}</option>
                    ))}
                </select>
                <label htmlFor="number">Contect Nomber :</label>
                <input type="number" name="number" id="number" onChange={this.onChengeForm} value={this.state.number} maxLength={10}/><br/><br/>

                <button type="reset" style={buttons}>Reset</button>
                <button type="submit" style={buttons}>Submit</button>
                
            </form>
            </Formdata>
        )
    }
}

export default Form;