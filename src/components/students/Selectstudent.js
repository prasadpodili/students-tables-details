import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';


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
    const res = await axios.get(`/users/${id}`);
    setStudent(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4 text-light">Student id:{id}</h1>
      <hr />
      <div className="details">
        <ul className="list-group w-50">
          <li className="list-group-item">Name:{' ' + student.firstname}</li>
          <li className="list-group-item">Username:{' ' + student.lastname}</li>
          <li className="list-group-item">Email:{' ' + student.address}</li>
          <li className="list-group-item">Phone:{' ' + student.phoneno}</li>
          <li className="list-group-item">Website:{' ' + student.gpa}</li>
        </ul>
      </div>
      <div className="py-4">
        <Link className="btn btn-primary " to="/">back to home</Link>
      </div>
    </div>
  );
};

export default Student;
