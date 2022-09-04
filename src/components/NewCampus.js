import React, { useState } from 'react';
import { addNewCampus } from '../features/campusSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NewCampus = ()=> {

  const [form, setForm] = useState({
    name: '',
    address: '',
    imageUrl: "",
    description: ""
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
    dispatch(addNewCampus(form));
  }

  return (
    <form id='campus-form' onSubmit={handleSubmit}>
      <h3>Register a new Campus</h3>  
      <label htmlFor='name'>College Name:</label>
      <input onChange={handleChange('name')} name='taskName' value={form.name} />

      <label htmlFor='address'>Address:</label>
      <input onChange={handleChange('address')} name='address' value={form.address} />
      
      <label htmlFor='description'>Description:</label>
      <input onChange={handleChange('description')} name='description' value={form.description} />
      
      <label htmlFor='imageUrl'>Image URL:</label>
      <input onChange={handleChange('imageUrl')} name='imageUrl' value={form.imageUrl} />

      <button type='submit'>Submit</button>
    </form>
  );
}

export default NewCampus;