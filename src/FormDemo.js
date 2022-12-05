import React from 'react';
import { Form } from 'react-bootstrap';

class FormDemo extends React.Component{
    constructor(){
         super();
         this.state={
            fname:"",
            lname:"",
            gender:"",
            dob:"",
         }
         
    }
    handlechange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handlesubmit=(event)=>{
        event.preventDefault();
        console.log('F Name:',this.state.fname);
        console.log('L Name:',this.state.lname);
        console.log('DOB:',this.state.dob);
        console.log('Gender:',this.state.gender);



        

    }
render(){
    
    const mystyle={
        color:"white",
        background color:"blue",
        padding:"10px",
        fontFamily:"Ariel"
    };

    return(
       <div style={{display:'block,
       width:500,
       padding:50'}}>

        <Form onSubmit={this.handlesubmit}>
        <Form.Group>
        <Form.Label for='fname'>Job Application Form </Form.Label>
       </Form.Group>
        
        <Form.Group>
             <Form.Label for='fname'>First Name</Form.Label>
             <Form.Control type='text'name='fname'id='name'value={this.state.fname}required pattern='[a-zA-Z]+' onChange={this.handlechange}/>
         </Form.Group>            

            
            <div>
                <label for='lname'>Last Name</label>
                <input type='text'classname="name.input name='lname'id='name'value={this.state.lname}required pattern='[a-zA-Z]+' onChange={this.handlechange}/>


            </div>

            <div>
                <label for='gender'>Gender </label>

                <Form.check inline label="1" type='radio' name='gender'id='gender'value={this.state.gender="Male"}required onChange={this.handlechange}/><label>Male</label>
                <Form.check inline label="2" type='radio' name='gender'id='gender'value={this.state.gender="Female"}required onChange={this.handlechange}/><label>Female</label>
                
            </div>
            <div>
                <label for='dob'>DOB</label>
                <input type='date' name='dob'id='dob'value={this.state.dob}required onChange={this.handlechange}/>

               
            </div>
            <div>
                <label for='exp'>Exp</label>
                <input type='number'name='exp'id='exp' value={this.state.exp}required onChange={this.handlechange}/>

            </div>
            <div>
                <label for='ph'>PH</label>
                <input type='text' name='Ph'id='ph' value={this.state.ph}required onchange={this.handlechange}/>
            </div>
            <div>
            <label for='email'>EMAIL</label>
                <input type='text' name='email'id='email' value={this.state.email}required onchange={this.handlechange}/>
            

            </div>
            <div>
            <label for='addr'>ADDR</label>
                <input type='text' name='addr'id='addr' value={this.state.addr}required onchange={this.handlechange}/>

            </div>
            
            <div>
                <button for='submit'>Submit</button>
            </div>
        </Form>

    );

}
    }
export default FormDemo;