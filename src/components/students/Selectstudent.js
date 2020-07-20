import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import './Selectstudent.css';

const Student = (props) => {
  const [student, setStudent] = useState({
    firstname: '',
    lastname: '',
    address: '',
    phoneno: '',
    gpa: '',
  });
  const {id} = useParams();
  useEffect(() => {
    loadStudent();
  }, []);
  const loadStudent = async () => {
    const res = await axios.get(`http://localhost:3004/users/${id}`);
    setStudent(res.data);
  };
  return (
    <div className="container">
      <h1>Student id:{id}</h1>
      <hr />
      <div className="details">
        <ul>
          <li>Name:{' ' + student.firstname}</li>
          <li>Username:{' ' + student.lastname}</li>
          <li>Email:{' ' + student.address}</li>
          <li>Phone:{' ' + student.phoneno}</li>
          <li>Website:{' ' + student.gpa}</li>
        </ul>
      </div>
      <div className="link">
        <Link className="back" to="/">back to home</Link>
      </div>
    </div>
  );
};

export default Student;
