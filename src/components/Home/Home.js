import React, {useState, useEffect} from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get('/users');
    setStudents(result.data.reverse());
  };

  const deleteStudent=async id=>{
    await axios.delete(`/users/${id}`);
    loadStudents();
  };
  return (
    <div className="container">
    <div className="py-4">
      <h1 className="text-center mb-4 text-light">Students Details List </h1>
      <div className="text-center mb-4">
      <Link className="w-35 mx-auto shadow btn btn-info " to="/students/add">Add Student</Link>
      </div>
      <div className="py-4">
      <table class="table table-bordered shadow">
        <thead class="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">PhoneNo</th>
            <th scope="col">GPA</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
           students.map((student,index)=>(
            <tr className="text-light">
              <td scope="row">{index+1}</td>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.phoneno}</td>
              <td>{student.gpa}</td>
              <td>
               
                <Link class="btn btn-primary mr-2" to={`/students/${student.id}`}>Select</Link>
                <Link class="btn btn-secondary mr-2" to={`/students/edit/${student.id}`}>Edit</Link>
                <Link class="btn btn-danger" onClick={()=>deleteStudent(student.id)}>Delete</Link>
               
              </td>
            </tr>
           ))
         }
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
};

export default Home;
