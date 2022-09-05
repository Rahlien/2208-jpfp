import React, { useState } from 'react';
import { updateCampus } from '../features/campusSlice';
import { useDispatch } from 'react-redux';

const EditCampus = ({campus})=> {

  const [form, setForm] = useState({})

  const dispatch = useDispatch();

  const handleChange = (props) => (e) => {
    setForm({
      ...form,
      [props]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!form.name){
      form.name = campus.name
    }

    if(!form.address){
      form.address = campus.address
    }

    dispatch(updateCampus(form, campus.id));
    window.location.reload(false)
  }

  return (
    <form id='campusEdit-form' onSubmit={handleSubmit}>
      <h3>Edit Current Campus</h3>  
      <label htmlFor='name'>College Name:</label>
      <input onChange={handleChange('name')} name='name' value={form.name} />

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

export default EditCampus;