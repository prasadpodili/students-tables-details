import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddStudent = (props) => {
    let history=useHistory();
    const [student,setStudent]=useState({
      firstname:"",
      lastname:"",
      address:"",
      phoneno:"",
      gpa:""  
    });
    const {firstname,lastname,address,phoneno,gpa}=student;
    const onInputChange=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    };
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post('/users',student);
        history.push("/");
    };
  return(
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
         <h1 className="text-center mb-4 text-light">Add A Student</h1>
        <form class="was-validated" onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
                <input 
                    type="text"
                    id="fname"
                    className="form-control form-control-lg"
                    placeholder="enter firstname"
                    name="firstname"
                    value={firstname}
                    onChange={e=>onInputChange(e)}
                    required
                />
               
                </div>
                <div className="form-group">    
                <input 
                    type="text"
                    id="lname"
                    className="form-control form-control-lg"
                    placeholder="enter lastname"
                    name="lastname"
                    value={lastname}
                    onChange={e=>onInputChange(e)}
                    required
                />
               
                </div>
                <div className="form-group">
                <input 
                    type="text"
                    id="55d"
                    className="form-control form-control-lg"
                    placeholder="enter address"
                    name="address"
                    value={address}
                    onChange={e=>onInputChange(e)}
                    required
                />
               
                </div>
                <div className="form-group">
                <input 
                    type="numeric"
                    id="mob"
                    className="form-control form-control-lg"
                    placeholder="enter phone no.."
                    name="phoneno"
                    value={phoneno}
                    onChange={e=>onInputChange(e)}
                    required
                />
               
                </div>
                <div className="form-group">
                <input 
                    type="text"
                    id="gpa"
                    className="form-control form-control-lg"
                    placeholder="enter gpa"
                    name="gpa"
                    value={gpa}
                    onChange={e=>onInputChange(e)}
                    required
                />
                </div>
            <button className="btn btn-warning btn-block w-50 mx-auto">Add</button>
            
        </form>
        </div>
    </div>
   );

 }

export default AddStudent;