import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
export const Add = () => {
  const {register,handleSubmit,formState: { errors }} = useForm();
  const Submit=(data,e)=>{


     axios({
       method:'POST',
       url:'http://localhost:5001/',
       data:data,
     }).then((res)=>{
       console.log(res);
       e.target.reset()
     }).catch((err)=>{
       console.log(err);
     })
  }
  return (
    <div className="container"  style={{marginTop:'20vh'}}>
      <h3 className="display-6 offset-4 mt-4" style={{marginTop:'30vh'}}>Add New Post</h3>
      <form onSubmit={handleSubmit(Submit)} className="form-group w-75 rounded offset-1 shadow p-3 mt-5 " >
        <label style={{fontWeight:'bold'}} >Title</label>
        <br/><input {...register('title')} className="form-control"/><br/>
        <label style={{fontWeight:'bold'}} >Body</label>
        <br/>
        <input {...register('body')} className="form-control"/>
        <input type="submit" value="Submit" className="btn offset-6 btn-primary d-lg-end mt-4"/>
      </form>
    </div>
  )
}
