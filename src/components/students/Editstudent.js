import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';


const EditStudent = (props) => {
    let history=useHistory();
    const{id}=useParams();
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
    useEffect(()=>{
        loadStudent();
    },[]);
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`/users/${id}`,student);
        history.push("/");
    };

    const loadStudent=async ()=>{
        const result=await axios.get(`/users/${id}`);
        setStudent(result.data);
    };

  return(
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
         <h1 className="text-center mb-4 text-light">Edit A Student</h1>
        <form class="was-validated" onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
                <input 
                    type="text"
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
                    type="text"
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
                    className="form-control form-control-lg"
                    placeholder="enter gpa"
                    name="gpa"
                    value={gpa}
                    onChange={e=>onInputChange(e)}
                    required
                />
                </div>
            <button className="btn btn-warning btn-block w-50 mx-auto">Update</button>
            
            
        </form>
        </div>
    </div>
   );

 }
export default EditStudent;