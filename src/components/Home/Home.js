import React, {useState, useEffect} from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get('http://localhost:3004/users');
    setStudents(result.data.reverse());
  };

  const deleteStudent=async id=>{
    await axios.delete(`http://localhost:3004/users/${id}`);
    loadStudents();
  };
  return (
    <div className="container">
      <h1>Students Details List </h1>
      <div className="link">
      <Link className="link" className="addstudent" to="/students/add">Add Student</Link>
      </div>
      <div className="tablecontainer">
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>PhoneNo</th>
            <th>GPA</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
           students.map((student,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.phoneno}</td>
              <td>{student.gpa}</td>
              <td>
               
                <Link className="select" to={`/students/${student.id}`}>Select</Link>
                <Link className="edit" to={`/students/edit/${student.id}`}>Edit</Link>
                <Link className="delete" onClick={()=>deleteStudent(student.id)}>Delete</Link>
               
              </td>
            </tr>
           ))
         }
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Home;
