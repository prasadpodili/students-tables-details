import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom';
import './Addstudent.css';

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
        await axios.put(`http://localhost:3004/users/${id}`,student);
        history.push("/");
    };

    const loadStudent=async ()=>{
        const result=await axios.get(`http://localhost:3004/users/${id}`);
        setStudent(result.data);
    };

  return(
    <div className="container">
         <h1>Edit A Student</h1>
        <form onSubmit={e=>onSubmit(e)}>
            <div className="form">
                <input 
                    type="text"
                    className="inputs"
                    placeholder="enter firstname"
                    name="firstname"
                    value={firstname}
                    onChange={e=>onInputChange(e)}

                />
                <input 
                    type="text"
                    className="inputs"
                    placeholder="enter lastname"
                    name="lastname"
                    value={lastname}
                    onChange={e=>onInputChange(e)}

                />
                <input 
                    type="text"
                    className="inputs"
                    placeholder="enter address"
                    name="address"
                    value={address}
                    onChange={e=>onInputChange(e)}

                />
                <input 
                    type="text"
                    className="inputs"
                    placeholder="enter phone no.."
                    name="phoneno"
                    value={phoneno}
                    onChange={e=>onInputChange(e)}
                />
                <input 
                    type="text"
                    className="inputs"
                    placeholder="enter gpa"
                    name="gpa"
                    value={gpa}
                    onChange={e=>onInputChange(e)}

                />
                <div className="add"><button className="add">Update</button></div>
            </div>
            
            
        </form>
    </div>
   );

 }
export default EditStudent;