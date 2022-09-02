import React, { useState } from 'react';
import { addNewStudent } from '../features/studentsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NewStudent = ()=> {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const dispatch = useDispatch();

  const handleChange = (props) => (e) => {
    setForm({
      ...form,
      [props]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewStudent(form));
  }
  console.log(form)

  return (
    <form id='campus-form' onSubmit={handleSubmit}>
      <label htmlFor='firstName'>First Name:</label>
      <input onChange={handleChange('firstName')} name='firstName' value={form.firstName} />

      <label htmlFor='address'>Last Name:</label>
      <input onChange={handleChange('lastName')} name='lastName' value={form.lastName} />
      
      <label htmlFor='address'>E-mail:</label>
      <input onChange={handleChange('email')} name='email' value={form.email} />

      <button type='submit'>Submit</button>
    </form>
  );
}

export default NewStudent;