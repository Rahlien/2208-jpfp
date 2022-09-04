import React, { useState } from 'react';
import { addNewStudent } from '../features/studentsSlice';
import { useDispatch } from 'react-redux';
import SelectCampus from './SelectCampus';

const NewStudent = ()=> {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gpa: undefined,
    imageUrl: undefined,
    campusId: undefined,
  })

  const dispatch = useDispatch();

  const handleChange = (props) => (e) => {
    setForm({
      ...form,
      [props]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewStudent(form));
  }


  return (
    <form id='student-form' onSubmit={handleSubmit}>
      <h3>Register New Student</h3>
      <label htmlFor='firstName'>First Name:</label>
      <input onChange={handleChange('firstName')} name='firstName' value={form.firstName} />

      <label htmlFor='lastName'>Last Name:</label>
      <input onChange={handleChange('lastName')} name='lastName' value={form.lastName} />
      
      <label htmlFor='email'>E-mail:</label>
      <input onChange={handleChange('email')} name='email' value={form.email} />
      
      <label htmlFor='gpa'>GPA:</label>
      <input onChange={handleChange('gpa')} name='gpa' value={form.gpa} />
      
      <label htmlFor='imageUrl'>Image URL:</label>
      <input onChange={handleChange('imageUrl')} name='imageUrl' value={form.imageUrl} />

      <label htmlFor='campusId'>College Selection:</label>  
      <SelectCampus onChange={handleChange('campusId')} name="campusId" value={form.campusId} />

      <button type='submit'>Submit</button>
    </form>
  );
}

export default NewStudent;